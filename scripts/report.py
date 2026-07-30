#!/usr/bin/env python3
"""Pull a campaign performance report from Meta Ads for Donna.

Usage:
  python scripts/report.py [--period last_7d|yesterday|last_30d|today]
"""
import argparse
import sys

from dotenv import load_dotenv

from meta_client import MetaAdsClient, MetaAPIError

load_dotenv()


def _find_roas(row: dict) -> str:
    for entry in row.get("purchase_roas", []) or []:
        return f"{float(entry['value']):.2f}x"
    return "—"


def _find_cost_per_result(row: dict) -> str:
    for entry in row.get("cost_per_action_type", []) or []:
        if entry.get("action_type") in ("purchase", "offsite_conversion.fb_pixel_purchase", "lead"):
            return f"${float(entry['value']):.2f}"
    return "—"


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--period", default="last_7d")
    args = parser.parse_args()

    client = MetaAdsClient()
    try:
        rows = client.get_insights(date_preset=args.period)
    except MetaAPIError as e:
        print(f"Error pulling insights: {e}", file=sys.stderr)
        return 1

    if not rows:
        print("No campaign activity for this period.")
        return 0

    print(f"Donna's Report — {args.period}")
    print("=" * 60)
    for row in sorted(rows, key=lambda r: float(r.get("spend", 0)), reverse=True):
        name = row.get("campaign_name", "Unknown")
        spend = float(row.get("spend", 0))
        ctr = float(row.get("ctr", 0))
        cpr = _find_cost_per_result(row)
        roas = _find_roas(row)
        print(f"{name}")
        print(f"  Spend: ${spend:.2f} | CTR: {ctr:.2f}% | Cost/Result: {cpr} | ROAS: {roas}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
