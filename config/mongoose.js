const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/todo_list");

const db = mongoose.connection;

db.on(
  "error",
  console.error.bind(console, "Error in connecting to the database!")
);

db.once("open", () => {
  console.log("Successfully connected to database!");
});
