"""Thin wrapper around the Meta Marketing (Graph) API for Donna.

Reads credentials from environment variables (see .env.example):
  META_ACCESS_TOKEN, META_AD_ACCOUNT_ID (act_XXXXXXXXXX)
"""
import os
import requests

GRAPH_VERSION = "v21.0"
GRAPH_URL = f"https://graph.facebook.com/{GRAPH_VERSION}"


class MetaAPIError(RuntimeError):
    pass


class MetaAdsClient:
    def __init__(self, access_token: str | None = None, ad_account_id: str | None = None):
        self.access_token = access_token or os.environ.get("META_ACCESS_TOKEN")
        self.ad_account_id = ad_account_id or os.environ.get("META_AD_ACCOUNT_ID")
        if not self.access_token:
            raise MetaAPIError("META_ACCESS_TOKEN is not set")
        if not self.ad_account_id:
            raise MetaAPIError("META_AD_ACCOUNT_ID is not set (format: act_XXXXXXXXXX)")

    def _get(self, path: str, params: dict | None = None) -> dict:
        params = dict(params or {})
        params["access_token"] = self.access_token
        resp = requests.get(f"{GRAPH_URL}/{path}", params=params, timeout=30)
        data = resp.json()
        if resp.status_code != 200 or "error" in data:
            err = data.get("error", {})
            raise MetaAPIError(
                f"Meta API error ({err.get('code')}): {err.get('message', resp.text)}"
            )
        return data

    def whoami(self) -> dict:
        return self._get("me", {"fields": "id,name"})

    def list_ad_accounts(self) -> list[dict]:
        data = self._get("me/adaccounts", {"fields": "id,name,account_status,currency"})
        return data.get("data", [])

    def list_campaigns(self, status_filter: list[str] | None = None) -> list[dict]:
        params = {"fields": "id,name,status,objective,daily_budget,lifetime_budget"}
        if status_filter:
            params["filtering"] = str(
                [{"field": "campaign.effective_status", "operator": "IN", "value": status_filter}]
            )
        data = self._get(f"{self.ad_account_id}/campaigns", params)
        return data.get("data", [])

    def get_insights(
        self,
        level: str = "campaign",
        date_preset: str = "last_7d",
        fields: list[str] | None = None,
    ) -> list[dict]:
        fields = fields or [
            "campaign_name",
            "spend",
            "impressions",
            "clicks",
            "ctr",
            "cpc",
            "actions",
            "cost_per_action_type",
            "purchase_roas",
        ]
        params = {
            "level": level,
            "date_preset": date_preset,
            "fields": ",".join(fields),
        }
        data = self._get(f"{self.ad_account_id}/insights", params)
        return data.get("data", [])

    def pause_campaign(self, campaign_id: str) -> dict:
        return self._post(campaign_id, {"status": "PAUSED"})

    def resume_campaign(self, campaign_id: str) -> dict:
        return self._post(campaign_id, {"status": "ACTIVE"})

    def update_campaign_budget(self, campaign_id: str, daily_budget_cents: int) -> dict:
        return self._post(campaign_id, {"daily_budget": daily_budget_cents})

    def _post(self, node_id: str, payload: dict) -> dict:
        payload = dict(payload)
        payload["access_token"] = self.access_token
        resp = requests.post(f"{GRAPH_URL}/{node_id}", data=payload, timeout=30)
        data = resp.json()
        if resp.status_code != 200 or "error" in data:
            err = data.get("error", {})
            raise MetaAPIError(
                f"Meta API error ({err.get('code')}): {err.get('message', resp.text)}"
            )
        return data
