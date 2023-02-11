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
  // object
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
    // console.log(result[votes[i]]);
  }
  console.log(result);

  let winner = 0;
  let winnerKey = "";
  /*
    Kondisi for nya yaitu bakal Loop sesuai dengan result / jumlah orang yg dimasukin di votes.
  
  */
  for (let key in result) {
    /*Kondisinya
      Jika winner < result[vincent]
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

let arr = ["vincent"];
//Test Case
console.log(
  //jadi object ini gak make index, tapi patokannya berupa key. Kalau dikasus ini adalah string.
  //key disini
  countVote([
    "vincent",
    "vincent",
    "vincent",
    "james",
    "ncent",
    "ncent",
    "james",
    "vincent",
    "vincent",
  ])
);

// console.log(countVote([]));
