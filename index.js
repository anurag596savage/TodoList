const express = require("express");
const db = require("./config/mongoose");
const router = require("./routes");
const bodyParser = require("body-parser");
const port = 9000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("assets"));

app.use("/", router);

app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, (error) => {
  if (error) {
    console.log("Error in running the server: ", port);
    return;
  }
  console.log("The server is up and running on port: ", port);
});
