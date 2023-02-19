const fs = require("fs");

class Todo {
  constructor(id, task, status, created_at, completed_at) {
    this.id = id;
    this.task = task;
    this.status = status;
    this.created_at = created_at;
    this.completed_at = completed_at;
  }

  static getTodos() {
    //
    let todos = JSON.parse(fs.readFileSync("./data.json", "utf8"));

    //Kalau mau bikin kondisi dimana tidak ada isi file di JSON, kondisinya harus diluar .map.
    // .map harus ada isi JSONnya karena .map disini ngecek kalau ada isi JSONnya ada atau tidak
    if (todos.length === 0) {
      console.log("Kosong Woy");
    } else {
      todos = todos.map((todo) => {
        const { id, task, status, created_at, completed_at } = todo;
        return new Todo(
          id,
          task,
          status,
          new Date(created_at),
          new Date(completed_at)
        );
      });
    }
    return todos;
  }

  static add(params) {}

  static delete(params) {}

  static update(params) {}

  static save() {}
}

module.exports = Todo;
