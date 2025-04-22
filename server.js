const express = require("express");
const { Client } = require("pg");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => console.error("Connection error", err.stack));

// Create table if it doesn't exist (Run only once)
client.query(`
  CREATE TABLE IF NOT EXISTS visits (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL
  )
`, (err, res) => {
  if (err) {
    console.error("Table creation error", err.stack);
  } else {
    console.log("Table 'visits' created or already exists");
  }
});

// API to track visit
app.post("/api/visit", (req, res) => {
  const date = new Date().toISOString().split('T')[0]; // Get the date part only
  const query = "INSERT INTO visits (date) VALUES ($1)";
  client.query(query, [date], (err, result) => {
    if (err) {
      console.error("Error inserting visit", err.stack);
      return res.status(500).send("Error tracking visit");
    }
    res.status(200).send("Visit tracked");
  });
});

// API to get visitor count (for your frontend graph)
app.get("/api/visitor-count", (req, res) => {
  const query = "SELECT COUNT(*) FROM visits";
  client.query(query, (err, result) => {
    if (err) {
      console.error("Error fetching visitor count", err.stack);
      return res.status(500).send("Error fetching visitor count");
    }
    res.json({ visitorCount: result.rows[0].count });
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
