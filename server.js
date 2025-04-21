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
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Log a visit
app.get('/api/visit', (req, res) => {
  const today = new Date().toISOString().split('T')[0];
  db.prepare('INSERT INTO visitors (date) VALUES (?)').run(today);
  res.json({ success: true, date: today });
});

// Get all visitor counts by date
app.get('/api/visitors', (req, res) => {
  const rows = db
    .prepare('SELECT date, COUNT(*) AS count FROM visitors GROUP BY date ORDER BY date')
    .all();
  res.json(rows);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
