const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
const DATA_FILE = path.join(__dirname, "visitorData.json");

app.use(cors());
app.use(express.json());

// ✅ Create file if not present
const initializeDataFile = () => {
  if (!fs.existsSync(DATA_FILE)) {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const initialData = days.map(day => ({ name: day, visitors: 0 }));
    fs.writeFileSync(DATA_FILE, JSON.stringify(initialData, null, 2));
  }
};

initializeDataFile();

// 📊 Get visitor data
app.get("/api/visitors-by-day", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE));
  res.json(data);
});

// ➕ Increment today's visitors
app.post("/api/visit", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE));
  const todayIndex = new Date().getDay();
  data[todayIndex].visitors += 1;
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
