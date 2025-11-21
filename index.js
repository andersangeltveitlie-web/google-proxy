import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/calc", (req, res) => {
  const value = Number(req.query.value);

  if (!value) {
    return res.status(400).json({ error: "Missing value" });
  }

  const result = value * 9; // Midlertidig test
  return res.json({ result });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
