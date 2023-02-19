/* process.argv = package dari node.js untuk mengambil value dari terminal
// Contoh diterminal = node index.js help 1 2 3
// Dibaca terminalnya [0,   1,       2,  3,4,5] (index ke 0,1,2,3,4,5).
const command = process.argv;

console.log(command);
*/

// kalo ada array [], berarti yg diprint terminal itu yg index ke-2
const command = process.argv[2];

//.slice ini agar mengambil nilai dari index ke 3 (Dari kasus kalo di console.log di terminal)
const params = process.argv.slice(3);

/* Ngetes isi dari command dan params
  console.log(command);
  console.log(params);
*/

const TodoController = require("./controllers/TodoController");

switch (command) {
  case "help":
    TodoController.help();
    break;
  case "list":
    TodoController.list();
    break;
  case "add":
    TodoController.add(params);
    break;
  case "delete":
    TodoController.delete(params);
    break;
  case "update":
    TodoController.update(params);
    break;
  default:
    TodoController.default();
}
