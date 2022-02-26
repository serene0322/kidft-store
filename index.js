const express = require('express');
const app = require("express")(); //library that allow us to build an API server easily
const server = require("http").createServer(app);
const cors = require("cors"); //allow cross-domain request
const bodyParser = require('body-parser');
const path = require('path'); //allow us to dynamically build when we call it from our current directory to where we want to go

//if we in development or testing, load dotenv into process environment
//allow our process.env access the secret key
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});


const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
//make sure the url strings are getting in and we passing out do not contain spaces or symbols
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); //cross origin request

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  });
  // app.get("/", (req, res) => {
  //   res.send("Server Running");
  // });
}

// app.get("/", (req, res) => {
//   res.send("Server Running");
// });

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

server.listen(PORT, error => {
  if (error) throw error;
  console.log(`Server is running on port ${PORT}`);
});

app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'myr'
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});
