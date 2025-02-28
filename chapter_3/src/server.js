import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();

const PORT = process.env.PORT || 5000;

// Get the file path from the URL of the current module
const __filename = fileURLToPath(import.meta.url);

// Get the directory name from the file path
const __dirname = dirname(__filename);

// Middlleware
app.use(express.json());

// serve html firle from the public folder
// tell express to serve all files form the public folder as static assets

app.use(express.static(path.join(__dirname, "../public")));

// serving up the HTML file form the public folder
app.get("/", (req, res) => {
  res.sendFile(path, join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
