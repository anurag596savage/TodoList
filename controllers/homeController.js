const Todo = require("../models/Todo");

module.exports.createTodo = async (request, response) => {
  try {
    let newTodo = await Todo.create(request.body);
    console.log(newTodo);
    return response.redirect("back");
  } catch (error) {
    console.log("Error in creating the todo: ", error);
  }
};

module.exports.home = async (request, response) => {
  try {
    let todos = await Todo.find({});
    return response.render("home", {
      title: "My TodoList",
      tasks: todos,
    });
  } catch (error) {
    console.log("Error in finding the todos: ", error);
  }
};

module.exports.destroyTodo = async (request, response) => {
  try {
    let todoId = request.body.check;
    await Todo.findByIdAndDelete(todoId);
    return response.redirect("back");
  } catch (error) {
    console.log("Error in deleting the todo: ", error);
  }
};
