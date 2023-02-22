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

  static add(params) {
    const todos = this.getTodos();
    const [task] = params;

    let id = todos[todos.length - 1].id + 1;

    todos.push(new Todo(id, task, false, new Date(), null));

    this.save(todos);
    console.log(todos);
  }

  static delete(id) {
    let todos = this.getTodos();
    todos = todos.filter((todo) => todo.id !== id);
    this.save(todos);
    console.log(todos);
    console.log(`Task ${id} ini sudah dihapus ya :)`);
  }

  static update(id, task, status) {
    let todos = this.getTodos();

    todos = todos.map((todo) => {
      if (id === id) {
        todo.task = task;
        todo.status = status;
      }
      this.save(todos);
      return todo;
    });
    console.log(`Task no ${id} sudah diupdate ya`);
  }

  static save(todos) {
    const todosString = JSON.stringify(todos, null, 3);

    fs.writeFileSync("./data.json", todosString);
  }
}

module.exports = Todo;
