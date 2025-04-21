// const Database = require('better-sqlite3');
// const db = new Database('visitors.db');

// db.prepare(`
//   CREATE TABLE IF NOT EXISTS visitors (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     date TEXT,
//     count INTEGER
//   )
// `).run();

// module.exports = db;
// db.js
const Database = require('better-sqlite3');
// For local testing we use visitors.db; later we'll switch to /data/visitors.db on Render
const db = new Database('visitors.db');

db.prepare(`
  CREATE TABLE IF NOT EXISTS visitors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT NOT NULL
  )
`).run();

module.exports = db;
