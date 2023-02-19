// OOP = Object Oriented Programming

class Students {
  constructor(id, name, major, age, isGraduated) {
    this.id = id;
    this.name = name;
    this.major = major;
    this.age = age;
    this.isGraduated = isGraduated;
  }

  speakUp() {
    console.log(
      `My Name is ${this.name}, this year i will be ${this.age} years old`
    );
    console.log(`I'm in ${this.major} major`);
  }

  growUp() {
    this.age++;
  }

  //Menjelaskan arti this
  mentionThis() {
    console.log(this);
  }

  //Contoh juga mengenai arti this
  mentionName() {
    console.log(this.name);
  }
}

// Proses Instansiasi = Instancination. Diambil dari kata Instance
// Proses pembuatan class menjadi object

// console.log(typeof Students);
// console.log(Students);

let student1 = new Students(1, "Dannys", "IT", 23, true);

// console.log(typeof student1);
// console.log(student1);
// student1.speakUp();
// student1.growUp();
// student1.growUp();
// student1.growUp();
// student1.speakUp();

let student2 = new Students(2, "Karen", "Design", 24, true);

// console.log(typeof student2);
// console.log(student2);
// //Enter
// console.log();

let student3 = new Students(3, "Kevin", "SI", 22, false);

// console.log(student3);

student1.mentionName();
