const express = require("express");
const app = express();

const server = app.listen(8000, () => console.log("Server running on port 8000"));
const io = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});
io.on("connection", socket => {
    //place emitters here
    socket.emit("Welcome", "Welcome to ChatApp");

});