const express = require("express");
const { Server } = require("socket.io");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const webServer = require("http").createServer(app);

const wss = new Server(webServer);

const history = [];

wss.on("connection", (ws) => {
  ws.broadcast.emit("new user", history);
  ws.emit("history", history);
});

wss.on("connection", (ws) => {
  ws.on("DecrementClick", (msg) => {
    ws.emit("DecrementClick", msg);
  });
});

wss.on("connection", (ws) => {
  ws.on("ServerAttack", (a, b) => {
    ws.emit("ServerAttack", a, b);
  });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

webServer.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
