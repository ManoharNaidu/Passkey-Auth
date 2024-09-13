const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const host = "0.0.0.0";

app.get("/", (req, res) => {
  res.send("Hello Cool");
});

app.listen(PORT, host, () => {
  console.log(`Server is running on http://${host}:${PORT}`);
});
