const express = require("express");
const app = express();
const cors = require("cors");

app.unsubscribe(cors());

app.listen("3002", () => {
    console.log("server is runnig in port 3002...");
});