#!/usr/bin/env python3
"""Pull a campaign performance report from Meta Ads for Donna.

Usage:
  python scripts/report.py [--period last_7d|yesterday|last_30d|today]
                            [--min-ctr 1.0] [--max-cpr 25] [--min-roas 2.0]
"""
import argparse
import sys

from dotenv import load_dotenv

from meta_client import MetaAdsClient, MetaAPIError

load_dotenv()


def _find_roas(row: dict) -> float | None:
    for entry in row.get("purchase_roas", []) or []:
        return float(entry["value"])
    return None


def _find_cost_per_result(row: dict) -> float | None:
    for entry in row.get("cost_per_action_type", []) or []:
        if entry.get("action_type") in ("purchase", "offsite_conversion.fb_pixel_purchase", "lead"):
            return float(entry["value"])
    return None


def _flags(row: dict, spend: float, ctr: float, cpr: float | None, roas: float | None, args) -> list[str]:
    flags = []
    if spend > 0 and cpr is None and roas is None:
        flags.append("spending with zero tracked results")
    if ctr and ctr < args.min_ctr:
        flags.append(f"CTR {ctr:.2f}% below your {args.min_ctr}% floor")
    if cpr is not None and cpr > args.max_cpr:
        flags.append(f"cost/result ${cpr:.2f} above your ${args.max_cpr} ceiling")
    if roas is not None and roas < args.min_roas:
        flags.append(f"ROAS {roas:.2f}x below your {args.min_roas}x floor")
    return flags


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--period", default="last_7d")
    parser.add_argument("--min-ctr", type=float, default=1.0, help="flag campaigns below this CTR%%")
    parser.add_argument("--max-cpr", type=float, default=25.0, help="flag campaigns above this cost/result")
    parser.add_argument("--min-roas", type=float, default=2.0, help="flag campaigns below this ROAS")
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

    rows = sorted(rows, key=lambda r: float(r.get("spend", 0)), reverse=True)

    all_flags = []  # (campaign_name, [flags])
    print(f"Donna's Report — {args.period}")
    print("=" * 60)
    for row in rows:
        name = row.get("campaign_name", "Unknown")
        spend = float(row.get("spend", 0))
        ctr = float(row.get("ctr", 0))
        cpr = _find_cost_per_result(row)
        roas = _find_roas(row)
        cpr_str = f"${cpr:.2f}" if cpr is not None else "—"
        roas_str = f"{roas:.2f}x" if roas is not None else "—"

        print(f"{name}")
        print(f"  Spend: ${spend:.2f} | CTR: {ctr:.2f}% | Cost/Result: {cpr_str} | ROAS: {roas_str}")

        flags = _flags(row, spend, ctr, cpr, roas, args)
        if flags:
            all_flags.append((name, flags))

    if all_flags:
        print()
        print("NEEDS ATTENTION")
        print("=" * 60)
        for name, flags in all_flags:
            for f in flags:
                print(f"  [{name}] {f}")
    else:
        print()
        print("Everything's within your thresholds. Nothing on fire.")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
