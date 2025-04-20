const Database = require('better-sqlite3');
const db = new Database('visitors.db');

db.prepare(`
  CREATE TABLE IF NOT EXISTS visitors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT,
    count INTEGER
  )
`).run();

module.exports = db;