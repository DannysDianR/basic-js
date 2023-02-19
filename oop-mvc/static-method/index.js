// Salah 1 package dari node js yg berfungsi salah satunya mengambil file dan mengwrite file.
const fs = require("fs");

class Vehicle {
  constructor(id, name, type, brand, price) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.brand = brand;
    this.price = price;
  }

  static getVehicles() {
    // JSON.parse
    // Fungsi parsenya berfungsi mengubah file string menjadi object
    let temp = JSON.parse(fs.readFileSync("./data.json", "utf8"));

    /*Mencoba di print biar tau hasilnya apa
    console.log(temp);
    */

    let vehicles = temp.map((vehicle) => {
      const { id, name, type, brand, price } = vehicle;
      return new Vehicle(id, name, type, brand, price);
    });

    // console.log(vehicles);
    return vehicles;
  }

  // Harus di dalam 1 class kalau static, karena jatohnya merupakan factory class
  // Menampilkan data dari Class Vehicles

  static showObjectVehicles() {
    const vehicles = this.getVehicles();
    console.log("Show Vehicles List:");
    console.log(vehicles);
  }

  static showVehicles() {
    const vehicles = this.getVehicles();
    console.log("Show Vehicles List: ");
    vehicles.forEach((vehicle) => {
      const { id, name, price } = vehicle;
      console.log(`${id}. ${name}, Rp. ${price}`);
    });
  }

  // ...args = ada beberapa arguments
  static addVehicle(...args) {
    //menambahkan data

    const vehicles = this.getVehicles();
    const [name, type, brand, price] = args;

    let id = vehicles[vehicles.length - 1].id + 1;

    vehicles.push(new Vehicle(id, name, type, brand, price));

    this.save(vehicles);

    console.log(`${name} has been added to Vehicles!!`);

    console.log(vehicles);
  }

  static deleteVehicle(id) {
    let vehicles = this.getVehicles();
    vehicles = vehicles.filter((vehicle) => vehicle.id !== id);
    this.save(vehicles);
    console.log(`Kendaraan no ${id} sudah dihapus ya :)`);
  }

  static updateVehicle(
    id,
    Vehiclename,
    Vehicletype,
    Vehiclebrand,
    Vehicleprice
  ) {
    let vehicles = this.getVehicles();

    //Tidak perlu menggunakan this karena sudah ada Class yg terhubung tanpa perantara
    vehicles = vehicles.map((vehicle) => {
      if (vehicle.id === id) {
        vehicle.name = Vehiclename;
        vehicle.type = Vehicletype;
        vehicle.brand = Vehiclebrand;
        vehicle.price = Vehicleprice;
      }
      this.save(vehicles);
      return vehicle;
    });
    console.log(`Kendaraan no ${id} sudah diupdate ya :)`);
  }

  static save(vehicles) {
    // Ini logika buat mengubah data dari array of object menjadi string (JSON.stringify)
    // JSON.stringify(variable, null, angka); Harus diisi parameternya dengan benar, angka disini agar posisi menjorok codenya
    const vehiclesStrings = JSON.stringify(vehicles, null, 3);

    // Fungsi menulis kembali ke data.jsonnya
    fs.writeFileSync("./data.json", vehiclesStrings);
  }
}

// Logikannya kalau mau destructuring class di dalam class, maka inisiasi methodnya apa saja lalu di masukan kedalam nama class, jadi gak perlu manggil class lagi.
const {
  showObjectVehicles,
  showVehicles,
  addVehicle,
  getVehicles,
  deleteVehicle,
} = Vehicle;
// getVehicles();

// Vehicle.addVehicle("Bombomcar", "sedan", "yamaha", 10000000);
// Vehicle.addVehicle("ParameterCar", "suv", "dimond", 35000000);
// Vehicle.updateVehicle(4, "KamaCar", "truck", "kicir-kicir", 20000000);

// Vehicle.getVehicles();
// Vehicle.addVehicle("Jaguar", "sports", "Macan", 40000000);

Vehicle.deleteVehicle(4);
// Vehicle.updateVehicle(1, "RadioTruck", "truck", "google", 50000000);
Vehicle.showObjectVehicles();
