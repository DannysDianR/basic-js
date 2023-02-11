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

// ES5

// ES6

/**/
