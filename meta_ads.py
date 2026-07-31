#!/usr/bin/env python3
"""Entry point for Donna's Meta Ads reporting tool.

Quickstart:
  pip install -r requirements.txt
  cp .env.example .env   # fill in META_ACCESS_TOKEN and META_AD_ACCOUNT_ID
  python meta_ads.py [--period last_7d|yesterday|last_30d|today]
                      [--min-ctr 1.0] [--max-cpr 25] [--min-roas 2.0]
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent / "scripts"))

from report import main  # noqa: E402

if __name__ == "__main__":
    raise SystemExit(main())
