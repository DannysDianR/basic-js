// ES6

/*Contoh dari ppt
let numbers = [1, 2, 3];
var temp = "";
numbers.forEach((numbers) => {
  temp += numbers;
  // Kalo ini dibacanya temp diisi numbers, lalu sebelah numbers diisi dengan " "
  temp += " ";
});

console.log(temp);*/

/*Study Case 1

 Buatlah sebuah function untuk menentukan bilangan ganjil atau genap

*/

/* Contoh ES5
function checkGanjilGenap(number) {
  if (number % 2 === 0) {
    return "Genap";
  } else {
    return "Ganjil";
  }
}


console.log(checkGanjilGenap(5));
console.log(checkGanjilGenap(2));
*/

/* Contoh ES6
const checkGanjilGenap = (number) => (number % 2 === 0 ? "Genap" : "Ganjil");
console.log(checkGanjilGenap(11));
console.log(checkGanjilGenap(8));

*/

/*Study Case 2

  Buat function beriikut dengan task tertentu:
  1. Function untuk mengkalikan angka dengan 2
  2. Function untuk memilih angka yang lebih dari 10
  3. Function untuk menampilkan semua angka

  Contoh:
  let arr = [10,2,3,5,6,12,7];

  Testcase:
  1. powerTwo(arr) // [100,4,9,25,36,144,49]
  2. filterTen(arr) // [100,25,36,144,49]
  3. showNumbers(arr)

  // Result
  10
  25
  36
  144
  49
*/

/* ES5
function powerTwo(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i] ** 2);
  }
  return result;
}

function filterTen(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      result.push(arr[i]);
    }
  }
  return result;
}

function showNumbers(arr) {
  var pangkatDua = powerTwo(arr);
  var saring10 = filterTen(pangkatDua);
  for (var i = 0; i < saring10.length; i++) {
    console.log(saring10[i]);
  }
}

showNumbers([10, 2, 3, 5, 6, 12, 7]);
*/

/* ES6
const showNumbersES6 = (arr) => {
  let result = arr.map((num) => num ** 2);
  result = result.filter((num) => num > 10);
  result.forEach((num) => console.log(num));
};

showNumbersES6([10, 2, 3, 5, 6, 12, 7]);
*/

/* ES6 Versi Lebih Cepat
let scores = [10, 2, 3, 5, 6, 12, 7];

scores
  .map((score) => score ** 2)
  .filter((score) => score > 10)
  .forEach((score) => console.log(score));
*/

/*Study Case 3


Sebuah gudang memiliki banyak barang dari berbagai tipe dan harga dan juga stoknya.

Buuatlah sebuah function untuk melakukan manajemen seperti Create, Read, Update, Delete

Functions:
1. getItems
2. addItem
3. deleteItem
4. editItem
5. changeStatus
*/

let items = [
  {
    id: 1,
    name: "Envy USA",
    type: "Apple",
    price: 50000,
    stock: 50,
    isSold: true,
  },
  {
    id: 2,
    name: "Fresh Ponkan",
    type: "Orange",
    price: 35000,
    stock: 50,
    isSold: false,
  },
];

// Functions CRUD
/**
 * Fruits List:
 * 1. [X] Envy USA Apple, Rp. 50000, 50 pcs
 * 2. [] Fresh Ponkan Orange, Rp. 35000, 50 pcs
 */
const getItems = (items) => {
  console.log("Fruit List:");
  items.forEach((items) => {
    if (items.isSold === true) {
      console.log(
        `${items.id}. [X] ${items.name} ${items.type}, Rp. ${items.price}, ${items.stock} pcs`
      );
    } else {
      console.log(
        `${items.id}. [ ] ${items.name} ${items.type}, Rp. ${items.price}, ${items.stock} pcs`
      );
    }
  });
};

getItems(items);

/*Destructuring Array dan Object
Kalo Array asalkan ngurut, penamaannya bisa bebas dan tidak perlu khawatir (Contoh: let [a,b,c] / let [apa,iya,enggak]);
let students = ["Dannys", 3.14, true];
let [name, gpa, isGraduated] = students;

Beda dengan Object, harus mengikuti sesuai dengan key yg sudah tertulis didalam Object
Contoh: let {a,b} = obj, result bakal error karena bukan sesuai dengan key didalam object.
        Maka harus menginisialisasinya sebagai: let {id, key} = obj

let obj = {
  id: 1,
  key: "tes",
};

let { id, key } = obj;

*/
