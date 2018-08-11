const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

require("dotenv").config();
app.use(bodyParser);

app.use(express.static(path.join(`${__dirname}client/build`)));

process.on("unhandledRejection", error => {
  console.log("unhandled Rejection", error);
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Server is listening on port ${port}`);
