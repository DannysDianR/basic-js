/*Study Case 1

Ubah sebuah array menjadi sebuah object

Contoh:
let book = ["JS for dummies", "learning", 150000,5,true]

*/

function bookObject(arr) {
  let result = {};

  result.name = arr[0];
  result.type = arr[1];
  result.price = arr[2];
  result.stock = arr[3];
  result.isAvailable = arr[4];

  //Kalo tidak ada return variable, maka nanti dioutput tidak akan menghasilkan apa" (Cuman object dan function)

  // tidak ada return result = undefined.
  return result;
}

//Jangan lupa [] karena bentuknya array
console.log(bookObject(["JS for Dummies", "Learning", 150000, 5, true]));
