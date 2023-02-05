//Function

// function checkOddEven(number) {
//   if (number % 2 === 0) {
//     console.log("Angka " + number + " Genap");
//   } else {
//     console.log("Angka " + number + " Ganjil");
//   }
// }

// checkOddEven(101);

/*Study Case 1

Buatlah sebuah function untuk menghitung rata-rata dari sebuah angka.

function countMean(arrNumber){

}
*/

// function countMean(arrNumber) {
//   let mean = 0;
//   let total = 0;

//   for (let i = 0; i < arrNumber.length; i += 1) {
//     total += arrNumber[i];
//   }

//   mean = total / arrNumber.length;

//   console.log("Angka Meannya adalah : " + mean.toFixed(2));
// }

// countMean([1, 2, 3, 4, 5]);

/* Study Case 2

Buatlah sebuah function untuk cek Palindrome.
Palindrome adalah sebuah istilah untuk sebuah kata yang jika di balik sama urutannya.

Contoh:
Katak
Kodok
Kasur rusak

function checkPalindrome(str){
  //code here

}

Result:
test case
checkPalindrome("katak") => true
checkPalindrome("baso") => false

*/

function checkPalindrome(str) {
  let temp = "";

  // Baca kondisinya. Dimulai dari index string terakhir (str.length - 1). Kalau i >= 0, kondisinya berhenti. Lalu indexnya bakal dikurang 1
  for (let i = str.length - 1; i >= 0; i -= 1) {
    temp += str[i];
  }
  console.log(temp);

  if (str === temp) {
    console.log("True");
  } else {
    console.log("False");
  }
}

checkPalindrome("katak");
checkPalindrome("baso");
