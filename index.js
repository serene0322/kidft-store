const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors"); //allow cross-domain request

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server Running");
});

//run when we have a client connection on our io instance
io.on("connection", (socket) => {
  //set id for user
  socket.emit("me", socket.id);

  //just the specific socket that just joined
  socket.on("callUser", ({ userToCall, signalData, from, name }) => {
    io.to(userToCall).emit("callUser", {
      signal: signalData,
      from,
      name,
    });
  });

  socket.on("updateMyMedia", ({ type, currentMediaStatus }) => {
    console.log("updateMyMedia");
    socket.broadcast.emit("updateUserMedia", { type, currentMediaStatus });
  });

  //send message to user
  socket.on("msgUser", ({ name, to, msg, sender }) => {
    io.to(to).emit("msgRcv", { name, msg, sender });
  });

  socket.on("answerCall", (data) => {
    socket.broadcast.emit("updateUserMedia", {
      type: data.type,
      currentMediaStatus: data.myMediaStatus,
    });
    io.to(data.to).emit("callAccepted", data);
  });

  //reload the screen for the id that end call
  socket.on("endCall", ({ id }) => {
    io.to(id).emit("endCall");
  });
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));