# Velo — Donna, AI Media Buying Chief of Staff

Tooling that connects Claude (configured via `CLAUDE.md` as "Donna") to the
Meta Marketing API for campaign reporting and management.

## Setup

```bash
pip install -r requirements.txt
cp .env.example .env   # fill in META_ACCESS_TOKEN and META_AD_ACCOUNT_ID
```

- `META_ACCESS_TOKEN`: a System User access token from Business Settings
  with `ads_read` (and `ads_management` if Donna should take actions).
- `META_AD_ACCOUNT_ID`: format `act_XXXXXXXXXX`, found in Ads Manager.

## Usage

```bash
python scripts/report.py --period last_7d
```

Periods: `today`, `yesterday`, `last_7d`, `last_30d` (any Meta `date_preset`).

## Structure

- `scripts/meta_client.py` — thin wrapper around the Graph API: list ad
  accounts/campaigns, pull insights (spend, CTR, cost/result, ROAS),
  pause/resume campaigns, update budgets.
- `scripts/report.py` — CLI report over campaign insights.

`.env` is gitignored — never commit real credentials.
