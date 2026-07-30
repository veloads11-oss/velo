import { createClient } from "@base44/sdk";
import dotenv from "dotenv";

dotenv.config();

export function getBase44Client() {
  const appId = process.env.BASE44_APP_ID;
  const apiKey = process.env.BASE44_API_KEY;

  if (!appId) throw new Error("BASE44_APP_ID is not set");
  if (!apiKey) throw new Error("BASE44_API_KEY is not set");

  return createClient({
    appId,
    headers: { api_key: apiKey },
  });
}
