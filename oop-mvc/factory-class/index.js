//Karena mau membuat sebuah object
const showroom = require("/.Showroom");

/*contoh declarasi buat bikin datanya
let tiguan = new SUV(1, "Tiguan VW", "SUV", "Volkswagon", 500000000);
let colt = new Truck(2, "Colt Diesel", "Truck", "Colt", 150000000);
let civic = new SUV(3, "Civic All New", "Sedan", "Honda", 350000000);
*/

// showroom.showVehicles();
showroom.addVehicle("TiguanVW", "SUV", "Volkswagon", 50000000000);
showroom.addVehicle("Honda Civic", "Sedan", "Honda", 35000000000);
showroom.addVehicle("Hino", "Truck", "Hino", 3000000000);
// showroom.addVehicle(colt);
// showroom.addVehicle(civic);
showroom.updateVehicle(1, "TiguanKW", 450000000);
showroom.deleteVehicle(2);
// showroom.showVehicles();
