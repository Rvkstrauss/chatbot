const path = require("path");
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const bot = require("./bot");
app.use(express.static(path.join(__dirname, "../build")));

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

io.on("connect", (socket) => {
  socket.on("message", (msg) => {
    const dialog = bot.respond(msg);
    
    // console.log(`message received from user: ${msg.from}`);
    // console.log(`message received content: ${msg.content}`);
    console.log('sent', msg)
    dialog.map(msg => io.emit("message", msg));
  });
});

const port = process.env.PORT || 3001;
app.set("port", port);

http.listen(port, () => {
  console.log("listening on *:3001");
});
