const express = require("express");
const server = express();
const productRouter = require("./routes/products");

server.use(express.json());

server.use((req, res, next) => {
  console.log(req.get("user-agent"), req.method, req.ip, req.hostname);
  next();
});

server.use("/", productRouter.routr);

server.listen(5000, () => {
  console.log("on port 5000");
});