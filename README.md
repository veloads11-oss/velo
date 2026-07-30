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
- `scripts/report.py` — CLI report over campaign insights, with
  configurable performance-flagging thresholds.
- `clients/TEMPLATE.md` — copy per new client (goals, offer, voice,
  compliance notes, reporting cadence).
- `crm/client.js` — base44 SDK client, reads `BASE44_APP_ID` /
  `BASE44_API_KEY` from `.env`.
- `crm/list.js` — CLI to list records from any base44 entity (leads,
  pipeline stages, etc.). Usage: `node crm/list.js <EntityName> [limit]`.

`.env` is gitignored — never commit real credentials.

### CRM (base44) setup

```bash
npm install
node crm/list.js Lead 20   # replace "Lead" with your actual entity name
```

Entity names are specific to your base44 app's data model — check the
"Data" tab in the base44 editor for the exact names (e.g. `Lead`, `Deal`,
`Contact`).
