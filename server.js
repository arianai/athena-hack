const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

app.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("^/$|/home(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "home.html"));
});

app.get("^/$|/meeting(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "meeting.html"));
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
