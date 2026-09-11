import { DatabaseSync } from 'node:sqlite';
import { mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

export function openLocalDatabase(path) {
  if (path !== ':memory:') mkdirSync(dirname(path), { recursive: true });
  const database = new DatabaseSync(path);
  database.exec('PRAGMA journal_mode = WAL');
  function query(sql, values = []) {
    return {
      bind(...parameters) { return query(sql, parameters); },
      async first() { return database.prepare(sql).get(...values) ?? null; },
      async all() { return { results: database.prepare(sql).all(...values) }; },
      execute() { database.prepare(sql).run(...values); return { success: true }; },
      async run() { return this.execute(); }
    };
  }
  return {
    prepare(sql) { return query(sql); },
    async batch(statements) {
      database.exec('BEGIN IMMEDIATE');
      try { const results = statements.map(statement => statement.execute()); database.exec('COMMIT'); return results; }
      catch (error) { database.exec('ROLLBACK'); throw error; }
    },
    close() { database.close(); }
  };
}
