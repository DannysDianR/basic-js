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

/*Get Items Function*/
const getItems = (items) => {
  console.log("Fruit List:");
  items.forEach((item) => {
    if (item.isSold === true) {
      console.log(
        `${item.id}. [X] ${item.name} ${item.type}, Rp. ${item.price}, ${item.stock} pcs`
      );
    } else {
      console.log(
        `${item.id}. [ ] ${item.name} ${item.type}, Rp. ${item.price}, ${item.stock} pcs`
      );
    }
  });
};

/* Get Items Call
  getItems(items); */
getItems(items);

/*Add Items Function*/

// (...params) = Tujuannya kalau parameternya banyak, bisa kamu tulis semua param sepert (a,b,c,dll)
const addItem = (...params) => {
  const [name, type, price, stock] = params;

  // lastIndex = mengambil index yg dari length item dikurang 1, contoh. Length = 2, maka: 2 - 1 = 1, maka yg diambil yg index [1]
  let lastIndex = items.length - 1;

  // id = mengambil data dari items yang dari Last Index (berupa data idnya) + 1, contoh: last index = 1, maka data yg diambil = 2, maka let id = 2+1 = 3
  let id = items[lastIndex].id + 1;

  let tempObj = {
    id,
    name,
    type,
    price,
    stock,
    isSold: false,
  };
  /*console.log disini Ngecek datanya terbuat atau tidak
  console.log(tempObj);*/

  //Tujuan push disini agar data yg terbuat di tempObj ini bisa dimasukan kedalam Object items
  items.push(tempObj);

  console.log(`${name} has been added to the list`);
};

/* Add Item Call
  addItem("Melon Madu", "Melon", 27500, 15); */

/*Delete Items Function*/

const deleteItem = (id) => {
  // Logikanya = items.filter ini memilih item.id yg bukan id yg dipilih, lalu id yg tidak dipilih nanti dimasukan kembalik ke Object Items.
  items = items.filter((item) => item.id !== id);
  console.log(`Fruit id "${id}" has been deleted`);
};

/* Delete Item Call
  deleteItem(2); */

//MASIH SALAH
const updateItem = (...params) => {
  const [id, name, type, price, stock] = params;
  //items.map tujuannya untuk memproses if, operasi logic, for, dll.
  items = items.map((item) => {
    if (item.id === id) {
      item.name = name;
      item.type = type;
      item.price = price;
      item.stock = stock;
    }
    return item;
  });
  console.log(`Fruit id "${id}" has been updated`);
};

//MASIH SALAH
const changeStatus = (id) => {
  items = items.map((item) => {
    if (item.id === id) {
      item.isSold != item.isSold;
    }
    return item;
  });
  console.log(`Fruit id "${id}" has been changed`);
  console.log("Fruit id " + id + " has been changed");
};

changeStatus(1);

/* Versi kalau menggunakan Destruction Object
  Buat ngapus item. , tinggal block si item., lalu di ctrl + d

 const getItems = (items) => {
  console.log("Fruit List:");
  items.forEach((item) => {
    const { id, name, type, price, stock, isSold } = item;
    if (isSold === true) {
      console.log(`${item.id}. [X] ${name} ${type}, Rp. ${price}, ${stock} pcs`);
    } else {
      console.log(`${id}. [ ] ${name} ${type}, Rp. ${price}, ${stock} pcs`);
    }
  });
}; 
 */

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
