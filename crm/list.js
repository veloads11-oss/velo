#!/usr/bin/env node
/**
 * List records from a base44 entity, for exploring your CRM schema or
 * pulling data (e.g. leads, pipeline stages).
 *
 * Usage:
 *   node crm/list.js <EntityName> [limit]
 *
 * Example:
 *   node crm/list.js Lead 20
 */
import { getBase44Client } from "./client.js";

async function main() {
  const [entityName, limitArg] = process.argv.slice(2);
  if (!entityName) {
    console.error("Usage: node crm/list.js <EntityName> [limit]");
    process.exit(1);
  }
  const limit = limitArg ? Number(limitArg) : 20;

  const base44 = getBase44Client();
  try {
    const records = await base44.entities[entityName].list("-created_date", limit);
    console.log(`${entityName} (${records.length} records)`);
    console.log("=".repeat(60));
    console.log(JSON.stringify(records, null, 2));
  } catch (err) {
    console.error(`Error fetching ${entityName}:`, err.message || err);
    process.exit(1);
  }
}

main();
