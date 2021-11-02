const express = require("express");
const app = express();
const server = require("http").Server(app);
app.use(express.static("public"));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
let port = process.env.PORT || 5500;
server.listen(port);
