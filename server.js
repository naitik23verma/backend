const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const client = require('./db'); // The connection setup file

// Middleware for parsing JSON bodies
app.use(express.json());

// 1️⃣ Endpoint to track visits
app.post('/api/visit', async (req, res) => {
  const date = new Date().toISOString().split('T')[0]; // Current date in YYYY-MM-DD format

  try {
    await client.query('INSERT INTO visits (date) VALUES ($1)', [date]);
    res.status(200).send('Visit tracked');
  } catch (err) {
    console.error('Error tracking visit:', err);
    res.status(500).send('Error tracking visit');
  }
});

// 2️⃣ Endpoint to fetch visitor data for graph
app.get('/api/visitor-data', async (req, res) => {
  try {
    const result = await client.query('SELECT date, COUNT(*) FROM visits GROUP BY date ORDER BY date DESC');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching visitor data:', err);
    res.status(500).send('Error fetching visitor data');
  }
});

// 3️⃣ Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
