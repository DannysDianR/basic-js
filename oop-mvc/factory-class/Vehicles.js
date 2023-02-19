// 1 Parent Class

class Vehichle {
  constructor(id, name, type, brand, price) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.brand = brand;
    this.price = price;
  }
}

// 3 Child Class

class SUV extends Vehichle {
  constructor(id, name, type, brand, price) {
    super(id, name, type, brand, price);
  }
}

class Truck extends Vehichle {
  constructor(id, name, type, brand, price) {
    super(id, name, type, brand, price);
  }
}

class Sedan extends Vehichle {
  constructor(id, name, type, brand, price) {
    super(id, name, type, brand, price);
  }
}

module.exports = {
  SUV,
  Truck,
  Sedan,
};
