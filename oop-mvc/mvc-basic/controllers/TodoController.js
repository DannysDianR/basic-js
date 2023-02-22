const TodoView = require("../views/TodoView");
const TodoModel = require("../models/Todo");

class TodoController {
  static help() {
    //
    TodoView.help();
  }

  static list() {
    //ini mengambil data dari file Todo di folders models.
    const todos = TodoModel.getTodos();

    //disini yg bikin jadi Array of Object
    TodoView.list(todos);
  }

  static add(params) {
    //
    // const todos = TodoModel.add(params);
    TodoView.add(params);
  }

  static delete(params) {
    //
    TodoView.delete(params);
  }

  static update(params) {
    //
    TodoView.update(params);
  }

  static default() {
    //
    TodoView.default();
  }
}

module.exports = TodoController;
