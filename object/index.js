/*Study Case 1

Ubah sebuah array menjadi sebuah object

Contoh:
let book = ["JS for dummies", "learning", 150000,5,true]

*/

// function bookObject(arr) {
//   let result = {};

//   result.name = arr[0];
//   result.type = arr[1];
//   result.price = arr[2];
//   result.stock = arr[3];
//   result.isAvailable = arr[4];

//   //Kalo tidak ada return variable, maka nanti dioutput tidak akan menghasilkan apa" (Cuman object dan function)

//   // tidak ada return result = undefined.
//   return result;
// }

// //Jangan lupa [] karena bentuknya array
// console.log(bookObject(["JS for Dummies", "Learning", 150000, 5, true]));

// function bookObject(arr) {
//   let result = {};

//   result.name = arr[0];
//   result.type = arr[1];
//   result.price = arr[2];
//   result.stock = arr[3];
//   result.isAvailable = arr[4];

//   return result;
// }

// let file = ["JS For Expert", "Expensive", 2000000, 10, true];

// console.log(bookObject(file));

const countVote = (votes) => {
  // code here
  let result = {};

  if (votes.length === 0) {
    return "tidak ada suara.";
  }

  for (let i = 0; i < votes.length; i += 1) {
    //Kondisi jika si votes tidak ada selain 1 suara / ada nambah orang baru tapi cuman 1.
    if (result[votes[i]] === undefined) {
      result[votes[i]] = 1;
    } else {
      result[votes[i]] += 1;
    }
  }

  let winner = 0;
  let winnerKey = "";
  /*
    Kondisi for nya yaitu bakal Loop sesuai dengan result / jumlah orang yg dimasukin di votes.
  
  */
  for (let key in result) {
    /*Kondisinya
      Jika winner < vincent[3]
      Jika 0 < vincent[3], maka jalankan kondisinya
    */
    if (winner < result[key]) {
      // winnernya berubah menjadi nama/result dari key yg terbanyak.
      winner = result[key];

      // winnerKey nya juga terubah berdasarkan banyaknya key tersebut. (Konteksnya disini angka terbesar)
      winnerKey = key;
    }
  }

  return `Pemenang adalah ${winnerKey} dengan ${winner} suara.`;
};

//Test Case
console.log(
  countVote([
    "vincent",
    "ncent",
    "vincent",
    "james",
    "ncent",
    "james",
    "vincent",
  ])
);

console.log(countVote([]));
