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
// const Database = require('better-sqlite3');
// // For local testing we use visitors.db; later we'll switch to /data/visitors.db on Render
// const db = new Database('visitors.db');

// db.prepare(`
//   CREATE TABLE IF NOT EXISTS visitors (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     date TEXT NOT NULL
//   )
// `).run();

// module.exports = db;
// const Database = require("better-sqlite3");
// const path = require("path");

// const db = new Database(path.resolve(__dirname, "visitors.db"));

// // Create table if not exists
// db.prepare(`
//   CREATE TABLE IF NOT EXISTS visitors (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     date TEXT NOT NULL
//   )
// `).run();

// module.exports = db;
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = process.env.NODE_ENV === 'production'
  ? '/data/visitors.db' // Render persistent disk path
  : path.resolve(__dirname, 'data', 'visitors.db'); // local path

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Failed to open DB:', err);
  } else {
    console.log('Database opened at', dbPath);
  }
});

db.run(`
  CREATE TABLE IF NOT EXISTS visits (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT NOT NULL
  )
`);

module.exports = db;
