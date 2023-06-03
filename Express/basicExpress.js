const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("USER HIT THE RESOURECE");
  res.status(200).send("<h1>Home Page</h1>");
});

app.get("/about", (req, res) => {
  console.log("USER HIT about RESOURECE");
  res.status(200).send("About Page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(5000, () => {
  console.log("server is port on 5000");
});

// app.get()
// app.post()
// app.put()
// app.delete()
// app.all()
// app.listen()
