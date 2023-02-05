// Array

// Materi baru = let

// Ada error yg biasa dilakukan ketika baru mulai belajar JavaScript: MODULE_NOT_FOUND, biasanya ini karena terminal mu belum di lokasi dari index.js yg dipanggil.

/* Contoh Soal
let scores = [1, 2, 3, 4, 5];
let temp = "";

for (let i = 0; i < scores.length; i++) {
  temp += scores[i];
}

//Convert menjadi number cara ES5
console.log(Number(temp));

//Convert menjadi number cara ES6
console.log(+temp);
*/

/*Study Case 1

  Hitung mean dari sebuah data statistik/

  Contoh:
  let stats = [1.7, 0.2, 5.1, 7.3, 3.5];

  Result:
  Mean: 3.56

  Jawaban:
  let stats = [1.7, 0.2, 5.1, 7.3, 3.5];
  let total = 0;

  for (let i = 0; i < stats.length; i++) {
    // total = total + stats[i];

    total += stats[i];
  }

  // Kenapa sih harus di inisialisasi seperti dibawah ini? Kenapa gak langsung di console.log aja???
  // Karena biar rapih dicodingan dan bisa dipanggil lagi di function tersebut, dan juga readability
  let mean = total / stats.length;


  //toFixed ditunjukan untuk membuat yg dibelakang koma sesuai yg kita mau. Kalo dicontoh itu toFixed(2) berarti dibelakang koma itu 2 angka.

  console.log("Mean: " + mean.toFixed(2));

  //hasil dari diatas menjadi string karena "Mean" disini sudah string.
*/

/*Study Case 2
  Tampilkan list arloji seseorang.

  Contoh:
  let items = ["Timex", "G-Shock", "Rolex"]


  Result:
  1. Timex
  2. G-Shock
  3. Rolex

  Jawaban:

  let items = ["Timex", "G-Shock", "Rolex"];

  for (let i = 0; i < items.length; i += 1) {
    // console.log(i + 1 + ". " + items[i]);

  console.log(`${i + 1}. ${items[i]}`);
}
*/

// let murid = [
//   [1, "Vincent", 3.5],
//   [2, "Udin", 3.0],
//   [3, "Mamang", 2.1],
// ];

// for (let i = 0; i < murid.length; i += 1) {
//   if (murid[i][2] >= 3.0) {
//     console.log(
//       murid[i][0] + ". " + murid[i][1] + "IPK = " + murid[i][2] + ", Lulus."
//     );

//     // console.log(
//     //   `${murid[i][0]}. ${murid[i][1]} ${IPK = } $ `
//     // );
//   } else {
//     console.log(
//       murid[i][0] +
//         ". " +
//         murid[i][1] +
//         "IPK = " +
//         murid[i][2] +
//         ", Tidak Lulus."
//     );
//   }
// }

/*Study Case 3


Pecahkan kalimat menjadi per kata.

Contoh:
let pantun = "Makan siang bareng temen cakep"

Result: 
["makan", "siang", "bareng", "temen", "cakep"]

*/

//KONDISI TERAKHIR NIH GAK NGERTI
// let pantun = "Makan siang bareng temen cakep";

// let temp = "";
// let tempArray = [];

// for (let i = 0; i < pantun.length; i++) {
//   if (pantun[i] !== " ") {
//     temp += pantun[i];
//   } else {
//     tempArray.push(temp);
//     temp = "";
//   }

//   if (i === pantun.length - 1) {
//     tempArray.push(temp);
//     temp = "";
//   }
// }
// console.log(tempArray);
