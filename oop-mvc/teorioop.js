// Pilar Utama OOP

/*
  1. Inheritance
  2. Polumorphism
  3. Encapsulation
  4. Abstractions
*/

// Inheritance
class Employee {
  // constructor = pembuat key/atribut dan value berdasarkan parameter
  constructor(id, name, job) {
    //Kondisi jika ingin mengeset datanya agar tidak undefined datanya jika di console.log tanpa di set datanya.
    // Bacanya value berupa id = undefined atau 0 = number, nanti komputer kan membaca data yg bersifat "true", maka dari itu ketika data tidak di set dan di console.log, maka data yg dipilih berupa 0
    this.id = id || 0;

    this.name = name;
    this.job = job;
  }
}

//class child, selalu ada tulisan extends
class Programmer extends Employee {
  // Tetap ditulis params dari Parentnya karena kondisinya ingin mengkopy atribut dari parent.
  // Jika ada tambahan parameter, tinggal ditambahin saja di parameter
  constructor(id, name, job, skills) {
    //super disini bertujuan untuk mengcopy langsung atribut dari parent (seperti this.id, this.name) itu langsung tercopy
    super(id, name, job);
    this.skills = skills;
  }
}

class Designer extends Employee {
  constructor(id, name, job, tools) {
    super(id, name, job);
    this.tools = tools;
  }
}

// Jika kamu gak set datanya, tetap jalan tapi isi datanya undefined / tidak tau tipe datanya
let Programmer1 = new Programmer(1, "Jon WickWick", "Front End Developer", [
  "Html",
  "CSS",
  "JavaScript",
]);
console.log(Programmer1);

// let Designer1 = new Designer(1, "Joko", "Video Editing", ["Figma", "Vegas"]);
// console.log(Designer1);

let Programmer2 = new Programmer(2, "Niko", "Back End Developer", [
  "JavaScript",
  "C",
  "React",
]);
console.log(Programmer2);
