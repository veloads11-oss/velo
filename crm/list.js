#!/usr/bin/env node
/**
 * List records from a base44 entity (CRM or website app), for exploring
 * your schema or pulling data (e.g. leads, pipeline stages, site content).
 *
 * Usage:
 *   node crm/list.js <EntityName> [limit] [--app=crm|website]
 *
 * Examples:
 *   node crm/list.js Lead 20
 *   node crm/list.js BlogPost 10 --app=website
 */
import { getBase44Client } from "./client.js";

async function main() {
  const args = process.argv.slice(2);
  const appArg = args.find((a) => a.startsWith("--app="));
  const app = appArg ? appArg.split("=")[1] : "crm";
  const positional = args.filter((a) => !a.startsWith("--"));
  const [entityName, limitArg] = positional;

  if (!entityName) {
    console.error("Usage: node crm/list.js <EntityName> [limit] [--app=crm|website]");
    process.exit(1);
  }
  const limit = limitArg ? Number(limitArg) : 20;

  const base44 = getBase44Client(app);
  try {
    const records = await base44.entities[entityName].list("-created_date", limit);
    console.log(`[${app}] ${entityName} (${records.length} records)`);
    console.log("=".repeat(60));
    console.log(JSON.stringify(records, null, 2));
  } catch (err) {
    console.error(`Error fetching ${entityName}:`, err.message || err);
    process.exit(1);
  }
}

main();
