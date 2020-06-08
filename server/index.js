const path = require("path");
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const bot = require("./bot");
const STATES = require('./config');

app.use(express.static(path.join(__dirname, "../build")));

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));
let clients = {};

io.on("connect", (socket) => {
  const client = socket.handshake.query.name;
  clients[client] = STATES.CONNECTED;
  socket.on("message", (msg) => {
    const { dialog, state } = bot.respond(msg, client, clients[client]);
    clients[client] = state;
    console.log('client msg received', msg, client, clients[client] );
    if (dialog) {
      dialog.map((res) => {
        setTimeout(() => io.emit("message", res), 1000);
      });
    }
  });
});

const port = process.env.PORT || 3001;
app.set("port", port);

http.listen(port, () => {
  console.log("listening on *:3001");
});
