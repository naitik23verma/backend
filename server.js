// const express = require("express");
// const fs = require("fs");
// const path = require("path");
// const cors = require("cors");

// const app = express();
// const PORT = process.env.PORT || 5000;
// const DATA_FILE = path.join(__dirname, "visitorData.json");

// app.use(cors());
// app.use(express.json());

// // ✅ Create file if not present
// const initializeDataFile = () => {
//     const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//     const initialData = days.map(day => ({ name: day, visitors: Math.floor(Math.random() * 100) }));
//     fs.writeFileSync(DATA_FILE, JSON.stringify(initialData, null, 2));
//   };
  

// initializeDataFile();

// // 📊 Get visitor data
// app.get("/api/visitors-by-day", (req, res) => {
//   const data = JSON.parse(fs.readFileSync(DATA_FILE));
//   res.json(data);
// });

// // ➕ Increment today's visitors
// app.post("/api/visit", (req, res) => {
//   const data = JSON.parse(fs.readFileSync(DATA_FILE));
//   const todayIndex = new Date().getDay();
//   data[todayIndex].visitors += 1;
//   fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
//   res.json({ success: true });
// });

// app.listen(PORT, () => {
//   console.log(`✅ Server running on port ${PORT}`);
// });
// const express = require("express");
// const fs = require("fs");
// const path = require("path");
// const cors = require("cors");

// const app = express();
// const PORT = process.env.PORT || 5000;
// const DATA_FILE = path.join(__dirname, "visitorData.json");

// app.use(cors());
// app.use(express.json());

// // ✅ If no file exists, create an empty array
// if (!fs.existsSync(DATA_FILE)) {
//   fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2));
// }

// // 📊 Get visitor data
// app.get("/api/visitors-by-day", (req, res) => {
//   const data = JSON.parse(fs.readFileSync(DATA_FILE));
//   res.json(data);
// });

// // ➕ Increment today's visitors or create new entry if not present
// app.post("/api/visit", (req, res) => {
//   const data = JSON.parse(fs.readFileSync(DATA_FILE));
//   const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   const todayName = days[new Date().getDay()];

//   // Check if today already exists in the data
//   const entry = data.find(e => e.name === todayName);
  
//   if (entry) {
//     // Increment the visitor count for today
//     entry.visitors += 1;
//   } else {
//     // If no entry for today, create a new one
//     data.push({ name: todayName, visitors: 1 });
//   }

//   // Write the updated data back to the file
//   fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
//   res.json({ success: true });
// });

// app.listen(PORT, () => {
//   console.log(`✅ Server running on port ${PORT}`);
// });
// const express = require("express");
// const fs      = require("fs");
// const path    = require("path");
// const cors    = require("cors");
// const app     = express();

// const PORT     = process.env.PORT || 5000;
// const DATA_FILE = path.join(__dirname, "visitorData.json");

// app.use(cors());
// app.use(express.json());

// // 1️⃣ Seed file if missing
// const seedData = [
//   { name: "Sun", visitors: 0 },
//   { name: "Mon", visitors: 0 },
//   { name: "Tue", visitors: 0 },
//   { name: "Wed", visitors: 0 },
//   { name: "Thu", visitors: 0 },
//   { name: "Fri", visitors: 0 },
//   { name: "Sat", visitors: 0 }
// ];

// if (!fs.existsSync(DATA_FILE)) {
//   fs.writeFileSync(DATA_FILE, JSON.stringify(seedData, null, 2));
// }

// // 2️⃣ GET the data
// app.get("/api/visitors-by-day", (req, res) => {
//   const data = JSON.parse(fs.readFileSync(DATA_FILE));
//   res.json(data);
// });

// // 3️⃣ POST a visit
// app.post("/api/visit", (req, res) => {
//   const data = JSON.parse(fs.readFileSync(DATA_FILE));
//   const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
//   const today = days[new Date().getDay()];
//   const entry = data.find(d => d.name === today);

//   if (entry) entry.visitors += 1;
//   else        data.push({ name: today, visitors: 1 });

//   fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
//   res.json({ success: true });
// });

// app.listen(PORT, () => console.log(`✅ Server on port ${PORT}`));
// const express = require("express");
// const cors = require("cors");

// const app = express();
// const PORT = process.env.PORT || 5000;

// // In-memory visitor data (WILL RESET when server restarts)
// const visitorData = [
//   { name: "Sun", visitors: 0 },
//   { name: "Mon", visitors: 0 },
//   { name: "Tue", visitors: 0 },
//   { name: "Wed", visitors: 0 },
//   { name: "Thu", visitors: 0 },
//   { name: "Fri", visitors: 0 },
//   { name: "Sat", visitors: 0 },
// ];

// app.use(cors());
// app.use(express.json());

// // Get visitor data
// app.get("/api/visitors-by-day", (req, res) => {
//   res.json(visitorData);
// });

// // Increment today's visitor count
// app.post("/api/visit", (req, res) => {
//   const todayIndex = new Date().getDay();
//   visitorData[todayIndex].visitors += 1;
//   res.json({ success: true });
// });

// app.listen(PORT, () => {
//   console.log(`✅ Server running on port ${PORT}`);
// });
// const express = require("express");
// const cors = require("cors");

// const app = express();
// const PORT = process.env.PORT || 5000;

// // In-memory visitor data
// const visitorData = [
//   { name: "Sun", visitors: 0 },
//   { name: "Mon", visitors: 0 },
//   { name: "Tue", visitors: 0 },
//   { name: "Wed", visitors: 0 },
//   { name: "Thu", visitors: 0 },
//   { name: "Fri", visitors: 0 },
//   { name: "Sat", visitors: 0 },
// ];

// app.use(cors());
// app.use(express.json());

// // API: Get visitor stats
// app.get("/api/visitors-by-day", (req, res) => {
//   res.json(visitorData);
// });

// // API: Track new visit
// app.post("/api/visit", (req, res) => {
//   const todayIndex = new Date().getDay();
//   visitorData[todayIndex].visitors += 1;
//   console.log("✅ Visitor counted for:", visitorData[todayIndex].name);
//   res.json({ success: true });
// });

// app.listen(PORT, () => {
//   console.log(`✅ Server running on port ${PORT}`);
// });
// const express = require('express');
// const cors = require('cors');
// const db = require('./db');
// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(cors());
// app.use(express.json());

// // Visitor tracking route
// app.post('/api/visit', (req, res) => {
//   const today = new Date().toISOString().split('T')[0];
//   const existing = db.prepare('SELECT * FROM visitors WHERE date = ?').get(today);

//   if (existing) {
//     db.prepare('UPDATE visitors SET count = count + 1 WHERE date = ?').run(today);
//   } else {
//     db.prepare('INSERT INTO visitors (date, count) VALUES (?, ?)').run(today, 1);
//   }

//   res.send({ success: true });
// });

// // Get weekly visitor data
// app.get('/api/visitors', (req, res) => {
//     const visitors = db.prepare('SELECT date, count FROM visitors ORDER BY date').all();
//     res.json(visitors);
//   });
  
// app.listen(PORT, () => {
//   console.log(`✅ Server running on port ${PORT}`);
// });
// server.js
// const express = require('express');
// const cors = require('cors');
// const db = require('./db');

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(cors());

// // Log a visit
// app.get('/api/visit', (req, res) => {
//   const today = new Date().toISOString().split('T')[0];
//   db.prepare('INSERT INTO visitors (date) VALUES (?)').run(today);
//   res.json({ success: true, date: today });
// });

// // Get all visitor counts by date
// app.get('/api/visitors', (req, res) => {
//   const rows = db
//     .prepare('SELECT date, COUNT(*) AS count FROM visitors GROUP BY date ORDER BY date')
//     .all();
//   res.json(rows);
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
// const express = require("express");
// const cors = require("cors");
// const db = require("./db");

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(cors());
// app.use(express.json());

// // Record new visitor
// app.post("/api/visit", (req, res) => {
//   const today = new Date().toISOString().split("T")[0];
//   db.prepare("INSERT INTO visitors (date) VALUES (?)").run(today);
//   res.json({ message: "Visitor recorded" });
// });

// // Get weekly visitor counts
// app.get("/api/weekly-visits", (req, res) => {
//   const data = db.prepare(`
//     SELECT date, COUNT(*) as count
//     FROM visitors
//     WHERE date >= date('now', '-6 days')
//     GROUP BY date
//   `).all();

//   res.json(data);
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// Import required dependencies
// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// // Create an instance of Express
// const app = express();

// // Middleware
// app.use(cors()); // Allow cross-origin requests
// app.use(bodyParser.json()); // Parse incoming JSON requests

// // Define routes
// app.get('/', (req, res) => {
//   res.send('Hello, welcome to the server!');
// });

// // Example: Route for tracking visitors
// app.post('/track-visitor', (req, res) => {
//   const { visitorInfo } = req.body;
//   console.log('Visitor Data:', visitorInfo);
//   res.status(200).send('Visitor tracked!');
// });

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
// server.js
// const express = require('express');
// const app = express();
// const sqlite3 = require('sqlite3');
// const path = require('path');

// // Initialize SQLite database
// const db = new sqlite3.Database('./data/visitors.db');

// // Serve static files
// app.use(express.static(path.join(__dirname, 'public')));

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Route to track visits
// app.post('/api/visit', (req, res) => {
//   const date = new Date().toISOString().split('T')[0];  // Get the current date (YYYY-MM-DD)

//   db.run('INSERT INTO visits (date) VALUES (?)', [date], function (err) {
//     if (err) {
//       return res.status(500).json({ success: false, error: err.message });
//     }
//     res.json({ success: true, date });
//   });
// });

// // Route to get all visitor data
// app.get('/api/visitors', (req, res) => {
//   db.all('SELECT date, COUNT(*) as count FROM visits GROUP BY date ORDER BY date DESC', (err, rows) => {
//     if (err) {
//       return res.status(500).json({ success: false, error: err.message });
//     }
//     res.json(rows);
//   });
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Record a visit
app.post('/api/visit', (req, res) => {
  const date = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD

  db.run('INSERT INTO visits (date) VALUES (?)', [date], function (err) {
    if (err) {
      console.error('Error inserting visit:', err);
      return res.status(500).json({ error: 'Failed to record visit' });
    }
    res.json({ message: 'Visit recorded', id: this.lastID });
  });
});

// Get weekly visitors
app.get('/api/visitors', (req, res) => {
  db.all(
    `SELECT date, COUNT(*) as count 
     FROM visits 
     GROUP BY date 
     ORDER BY date DESC 
     LIMIT 7`,
    (err, rows) => {
      if (err) {
        console.error('Error fetching visitors:', err);
        return res.status(500).json({ error: 'Failed to fetch visitors' });
      }

      const visitors = rows.reverse().map((row) => ({
        day: row.date,
        count: row.count,
      }));

      res.json(visitors);
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
