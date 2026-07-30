import { createClient } from "@base44/sdk";
import dotenv from "dotenv";

dotenv.config();

const APP_IDS = {
  crm: process.env.BASE44_CRM_APP_ID,
  website: process.env.BASE44_WEBSITE_APP_ID,
};

/**
 * @param {"crm"|"website"} app - which base44 app to connect to
 */
export function getBase44Client(app = "crm") {
  const appId = APP_IDS[app];
  const apiKey = process.env.BASE44_API_KEY;

  if (!appId) throw new Error(`BASE44_${app.toUpperCase()}_APP_ID is not set`);
  if (!apiKey) throw new Error("BASE44_API_KEY is not set");

  return createClient({
    appId,
    headers: { api_key: apiKey },
  });
}
