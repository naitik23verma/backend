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
// db.js
// db.js
// db.js
const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.DATABASE_URL,  // Your connection string from Render
  ssl: {
    rejectUnauthorized: false, // Allow SSL connection
  },
});

client.connect()
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

module.exports = client;
