const TodoModel = require("../models/Todo");

class TodoView {
  static help() {
    console.log("Command List: ");
    console.log("node index.js help");
    console.log("node index.js list");
    console.log("node index.js add <task>");
    console.log("node index.js delete <task_id>");
    console.log("node index.js update <task_id> <task>");
  }

  static list(todos) {
    console.log("Todo List: ");
    console.log(todos);
  }

  static add(todos) {
    TodoModel.add(todos);
  }

  static delete(todos) {
    TodoModel.delete(todos);
  }

  static update(todos) {
    TodoModel.update(todos);
  }

  static default() {
    console.log("Please enter the correct command, trims gan");
    console.log("Don't know the command?");
    console.log("Type `node index.js help`.");
  }
}

module.exports = TodoView;
