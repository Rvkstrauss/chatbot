const path = require("path");
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const bot = require("./bot");
app.use(express.static(path.join(__dirname, "../build")));

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));
const clients = {};

io.on("connect", (socket) => {
  clients[socket.id] = null
  socket.on("message", (msg) => {
    const dialog = bot.respond(msg);
  
    dialog.map(res => {
      if(res.content) setTimeout(() => io.emit("message", res, 2000))
      else {
        io.emit("message", msg)
      }
    });
  });
});


const port = process.env.PORT || 3001;
app.set("port", port);

http.listen(port, () => {
  console.log("listening on *:3001");
});
