// Looping

// i++ bisa diganti dengan i+=
// i+1 gak bisa dikarenakan error di Syntax Javascript
// **2 = Pangkat 2

/*Contoh Looping
for (var i = 0; i < 10; i += 1) {
  console.log("Bilangan kuadrat dari " + (i + 1) + ": " + (i + 1) ** 2);
}*/

/*Study Case 1

  Tampilkan 10 bilangan pertama genap dan ganjil
  Input:
  var num = 10;

  Result:
  1. adalah Bilangan Ganjil
  2. adalah Bilangan Genap
  3. dst
  .
  .
  .
  .
  10.



Jawaban

for (var i = 1; i <= 10; i++) {
  if (i % 2 === 1) {
    console.log(i + " adalah Bilangan Ganjil");
  } else {
    console.log(i + " adalah Bilangan Genap");
  }
}

*/

/* Study Case 2

  Tampilkan setiap Karakter dalam sebuah string
  Contoh:
  var kata ="Mandi Lumpur"

  Result:
  m
  a
  n
  d
  i
  l
  u
  m
  p
  u
  r
*/

/* Study Case 3 [Contoh soal gak bisa gw tebak]
var str = "mandi lumpur";
for (var i = 0; i < str.length; i++) {
  if (str[i] !== " ") {
    console.log(str[i]);
  }
}
*/

/*Study Case 4 [Contoh soal gak bisa gw tebak (2)]

var str = "sayur lodeh";
var temp = "";

for (var i = 0; i < str.length; i++) {
  if (i % 2 === 0) {
    temp += str[i].toUpperCase();
  } else {
    temp += str[i];
  }
}

console.log(temp);
*/

/*Study Case 5 [Contoh soal gak bisa gw tebak (3)]

Tentukan apakah jumlah 'x' dan 'o' berjumlah sama.

Contoh:
var point = "xoxoxoxoxo"

Result:
true

Contoh:
var point = "xxxoxox"

Result:
false

Jawaban:
var point = "xoxoxox";
var countX = 0;
var countO = 0;

for (var i = 0; i < point.length; i++) {
  if (point[i] === "x") {
    countX++;
  } else if (point[i] === "o") {
    countO++;
  }
}
if (countX === countO) {
  console.log("True");
} else {
  console.log("False");
}
*/

/*Study Case 6

Cek apakah sebuah bilangan adalah prima atau tidak

Contoh:
var n = 7;

Result:
Angka 7 adalah Bilangan Prima

Bilangan Prima merupakan Bilangan yang punya 2 Faktor 
Contoh:
5

5 % 1 = 0
5 % 2 = 1 #Salah ini
5 % 3 = 1 #Salah ini  


Jawaban:
var n = 12;

var factor = 0;

for (var i = 1; i <= n; i++) {
  if (n % i === 0) {
    factor++; //Bisa factor = factor + 1; | factor += 1;
  }
}

if (factor === 2) {
  console.log("Angka " + n + " merupakan Bilangan Prima");
} else {
  console.log("Angka " + n + " merupakan Bilangan Bukan Prima");
}

//Ternary (Lebih dipersingkat true falsenya saja)

factor === 2 ? console.log(true) : console.log(false);
*/
