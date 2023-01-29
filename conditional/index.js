// if else

/*Contoh simple if else
var angka = "1";

if (angka === 1) {
  console.log("Angka sesuai dengan " + angka);
} else {
  console.log("Angka tidak sesuai");
}
*/

// Conditional

/*A. Cek bilangan genap dan ganjil

Contoh:
var number = 5;

Result
5 adalah bilangan ganjil*/

/*B. Cek Store Nilai

School Grade
Buatlah Codingan untuk cek grade sekolah.

Grade A: Score antara 100 - 85
Grade B: Score antara 84 - 70
Grade C: Score antara 69 - 55
Grade D: Score antara 54 - 40
Grade E: Score antara 40 - 25
*/

/*Soal A.
 Bilangan Genap adalah bilangan yang habis dibagi 2 atau jika dimodulus maka hasilnya 0
Bilangan Ganjil adalah bilangan yang tidak habis dibagi 2 atau jika dimodulus maka hasilnya 1

var number = 5;

if (number % 2 == 1) {
  console.log("Angka " + number + " merupakan bilangan ganjil");
} else {
  console.log("Angka " + number + " merupakan bilangan genap");
}
*/

/*
Soal B.
var grade = 12;

if (grade <= 100 && grade >= 85) {
  console.log("Selamat kamu mendapatkan nilai A");
} else if (grade <= 84 && grade >= 70) {
  console.log("Selamat kamu mendapatkan nilai B");
} else if (grade <= 69 && grade >= 55) {
  console.log("Selamat kamu mendapatkan nilai C");
} else if (grade <= 54 && grade >= 40) {
  console.log("Selamat kamu mendapatkan nilai D");
} else if (grade <= 39 && grade >= 0) {
  console.log("Selamat kamu mendapatkan nilai E");
}*/

// Soal C

var totalHarga = 150000;
var diskon = "DiscountHarbolnas";
var keseluruhanHarga;

if (diskon == "Discount10%") {
  if (totalHarga >= 500000) {
    keseluruhanHarga = totalHarga * 0.1;
    console.log(totalHarga - keseluruhanHarga);
  } else if (totalHarga >= 300000 && totalHarga <= 500000) {
    keseluruhanHarga = totalHarga * 0.05;
    console.log(totalHarga - keseluruhanHarga);
  } else if (totalHarga < 300000) {
    keseluruhanHarga = totalHarga * 0.025;
    console.log(totalHarga - keseluruhanHarga);
  }
} else if (diskon == "DiscountHarbolnas") {
  if (totalHarga >= 250000) {
    keseluruhanHarga = totalHarga * 0.15;
    console.log(totalHarga - keseluruhanHarga);
  } else if (totalHarga < 250000) {
    console.log(totalHarga);
  }
}
