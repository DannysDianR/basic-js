// Factory Class = Class yang berfokus ke methodnya

// Factory Class

const { SUV, Truck, Sedan } = require("./Vehicle");

class Showroom {
  constructor(rooms) {
    //Disini kalo kondisi || [] jika rooms yg digunakan banyak / lebih dari 1
    this.rooms = rooms || [];
  }

  showVehicles() {
    if (this.rooms.length !== 0) {
      console.log("Vehicles in room: ");
      this.rooms.forEach((room) => {
        const { id, name, brand } = room;
        console.log(`${id}. ${name} - ${brand}`);
      });

      // console.table(this.rooms); Ngetes isi dari this.rooms
    } else {
      console.log("There's no vehicles in this room.");
    }
  }

  addVehicle(...vehicle) {
    //console.log(vehicle); Ini buat ngetes isi dari vehicle kalo data yg dimasukinnya menggunakan let x = new Y.

    //Kenapa idnya tidak dimasukin? Karena agar idnya bisa increment, jadi tidak ditulis manual.
    const [name, type, brand, price] = vehicle;
    let id;

    // Jika roomnya kosong, maka idnya ditambah 1
    if (this.rooms.length === 0) {
      id = 1;
    } else {
      const lastIndex = this.rooms.length - 1;
      id = this.rooms[lastIndex].id + 1;
    }

    switch (type) {
      case "SUV":
        this.rooms.push(new SUV(id, name, type, brand, price));
        break;
      case "Truck":
        this.rooms.push(new Truck(id, name, type, brand, price));
        break;
      case "Sedan":
        this.rooms.push(new Sedan(id, name, type, brand, price));
        break;
    }
    // console.log(this.rooms); ngetes jika hasil filenya berupa Class
  }

  deleteVehicle(id) {
    //.filter tujuannya untuk menghapuus
    // Logikanya disini this.rooms nya di filter, sehingga id yg bukan sama dengan room.id itu di save, lalu yg room.idnya sama, maka di hapus.
    this.rooms = this.rooms.filter((room) => room.id !== id);
  }

  updateVehicle(id, vehicleName, vehiclePrice) {
    this.rooms = this.rooms.map((room) => {
      if (room.id === id) {
        room.name = vehicleName;
        room.price = vehiclePrice;
      }

      return room;
    });
  }
}

module.exports = Showroom;
