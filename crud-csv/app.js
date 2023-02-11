// CSV = Comma Separated Values

const fs = require("fs"); // fs = File System = Salah 1 package/modul dalam node.js

const dogs = {
  houses: [],

  // Method 1 [Method hanya mengerjakan 1 Tugas saja]
  getDogs: function () {
    //Buat variable dogs, lalu panggil package fs.readFileSync (Membaca file secara Sinkron) dari data yg ditentukan dan membutuhkan encoding tertentu.
    let dogs = fs.readFileSync("./data.csv", "utf8");

    //Supaya data csv bisa dijadikan data object, harus dilakukan terlebih dahulu beberapa step.

    //1. Data csv diubah ke data array, agar mudah untuk diubah ke data object

    // Logikanya: dogs yg berisi data.csv ini di split / dipisah ketika ketemu enter, lalu langsung diubah ke bentuk array
    dogs = dogs.split("\n");

    //2. Data array yg sudah jadi, diubah lagi ke data array 2D
    // Untuk mengubah ke data array 2D, maka kamu harus menggunakan built in .map
    dogs = dogs.map((dog) => {
      // Logikanya: dogs yg berisi array ini di split / dipisah ketika ketemu ',' lalu langsung diubah ke bentuk array 2D
      return dog.split(",");
    });
    /* Mengecek kalau data Dogsnya sudah berubah menjadi Array 2D
      console.log(dogs);*/

    // Mengubah array 2D menjadi array of objects

    let dogsArrayOfObject = []; // Array of Objects
    let dogsObject = {};
    for (let i = 1; i < dogs.length; i++) {
      const [id, name, breed, characters, owner] = dogs[i];
      // Ini Kondisi dimana dogsObject
      dogObject = {
        id: Number(id),
        name,
        breed,
        characters: characters.split("-"),
        owner,
      };
      dogsArrayOfObject.push(dogObject);
    }
    this.houses = dogsArrayOfObject;
  },

  // Method 2
  showDogs: function () {
    console.log(this.houses);
  },

  //Method 3

  // args = arguments | params = parameters
  addDog: function (...args) {
    const [name, breed, characters, owner] = args;

    let lastIndex = this.houses.length - 1;
    let id = this.houses[lastIndex].id + 1;

    let tempObj = {
      id,
      name,
      breed,
      characters: characters.split("-"),
      owner,
    };

    this.houses.push(tempObj);
    console.log(`A dog named ${name} has been added to our house`);
    this.SaveToCSV();
  },

  // Method 4

  SaveToCSV: function () {
    let result = [];
    result = this.houses.map((dog) => {
      const { id, name, breed, characters, owner } = dog;
      let tempArr = [id, name, breed, [...characters].join("-"), owner];
      return tempArr.join(",");
    });

    //unshift = ngepush dari depan, dari index ke 0
    //agar yg index ke 0 bisa masuk sesuai urutan yg benar
    result.unshift("id,name,breed,characters,owner");
    result = result.join("\n");
    // [...characters] artinya membuat array baru berisi value dari variable characters sebelumnya
    console.log(result);
    fs.writeFileSync("./data.csv", result);
  },
};

dogs.getDogs();
dogs.addDog("Bobby", "Pitbull", "Strong-Fierce", "Jon");
dogs.showDogs();
