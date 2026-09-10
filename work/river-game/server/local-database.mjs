import { DatabaseSync } from 'node:sqlite';
import { mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

export function openLocalDatabase(path) {
  if (path !== ':memory:') mkdirSync(dirname(path), { recursive: true });
  const database = new DatabaseSync(path);
  database.exec('PRAGMA journal_mode = WAL');
  function query(statement, values = []) {
    return {
      bind(...parameters) { return query(statement, parameters); },
      async first() { return statement.get(...values) ?? null; },
      async all() { return { results: statement.all(...values) }; },
      async run() { statement.run(...values); return { success: true }; }
    };
  }
  return { prepare(sql) { return query(database.prepare(sql)); }, close() { database.close(); } };
}
