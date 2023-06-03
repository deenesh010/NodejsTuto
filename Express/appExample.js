const express = require("express");
const app = express();
const path = require("path");

// app.use(express.static('./public/src'))

app.get("/", (req, res) => {
  res.json({
    name: "Dinesh",
    CRN: "020-358",
  });
});

app.all("*", (req, res) => {
  res.status(404).send("Resource not found");
});

app.listen(5000, () => {
  console.log("Server listening on port 5000....");
});
