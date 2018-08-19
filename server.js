const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const router = require("./routes");

require("dotenv").config();
app.use(bodyParser.json());

app.use(express.static(path.join(`${__dirname}client/build`)));
app.use(router);

process.on("unhandledRejection", error => {
  console.log("unhandled Rejection", error);
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Server is listening on port ${port}`);
