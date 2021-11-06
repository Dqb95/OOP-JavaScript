/**
 * Eshop - CartItem, Chip, Parfume
 * Dedeni
 */

function CartItem(name, price, quantity) {
  // Private property
  let localPrice = price;
  let localQuantity = quantity;

  this.getName = function () {
    return name;
  };
  this.getPrice = function () {
    if (localQuantity > 5) {
      return localPrice * 0.9;
    }
    return localPrice;
  };
  this.getQuantity = function () {
    return localQuantity;
  };

  this.setQuantity = function (newQuantity) {
    localQuantity = newQuantity;
  };

  // Ukazka staticke (sdilene) promenne pres __proto__,
  // neni vhodny zpusob reseni

  // let localQuantity = 0;
  // this.__proto__.totalQuantity = quantity;

  // this.addQuantity = function (newQuantity) {
  //   localQuantity += newQuantity;

  //   if (!this.__proto__.totalQuantity) {
  //     this.__proto__.totalQuantity = 0;
  //   }
  //   this.__proto__.totalQuantity += newQuantity;
  // };

  // this.substractQuantity = function (newQuantity) {
  //   localQuantity -= newQuantity;

  //   if (!this.__proto__.totalQuantity) {
  //     this.__proto__.totalQuantity = 0;
  //   }
  //   this.__proto__.totalQuantity -= newQuantity;
  // };
}

function Chip(name, price, quantity, manufacturer) {
  /**
   * Prvni parametr call muze byt i jina trida, ne jen "this"
   */
  // const motherboard = function () {};
  // CartItem.call(motherboard, name, price, quantity);
  // this.getMotherboard = function () {
  //   return motherboard;
  // };

  CartItem.call(this, name, price, quantity);

  /**
   * Pretizeni rodicovske metody
   */
  this.getName = function () {
    // return `${manufacturer} - ${name}`;
    return "Cip: " + manufacturer + " - " + name;
  };

  this.getYearMade = function () {
    return 2021;
  };
}

/**
 * Jine parametry nez rodic CartItem
 */
function Parfume(price, quantity, brand, serialNumber) {
  const name = `${brand} - ${serialNumber}`;

  CartItem.call(this, name, price, quantity);
}

function Cart() {
  const items = [];

  this.addItem = function (item) {
    items.push(item);
  };

  this.getQuantity = function () {
    let quantity = 0;

    items.forEach(function (item) {
      quantity += item.getQuantity();

      // if (item instanceof Chip) {
      //   console.log(item.getYearMade());
      // }
      // if (item.getYearMade) {
      //   console.log(item.getYearMade());
      // }
    });

    return quantity;
  };

  this.getPrice = function () {
    let price = 0;

    items.forEach(function (item) {
      price += item.getPrice() * item.getQuantity();
    });

    return price;
  };
}

const chip1 = new Chip("cip 1", 2000, 1, "Intel");
const chip2 = new Chip("cip 2", 2000, 2, "Intel");
const chip3 = new Chip("cip 3", 2000, 3, "Intel");
const parfume1 = new Parfume(1000, 2, "Hugo Boss", "123");

const cart = new Cart();
cart.addItem(chip1);
cart.addItem(chip2);
cart.addItem(chip3);
cart.addItem(parfume1);

console.log(
  `Pocet polozek: ${cart.getQuantity()}, celkova cena: ${cart.getPrice()}`
);

/**
 * Pocitani celkoveho poctu polozek pres sdilenou (statickou) promennou
 */
// const item1 = new CartItem("Polozka 1", 2000);
// item1.addQuantity(1);
// const item2 = new CartItem("Polozka 2", 2000);
// item2.addQuantity(1);
// const item3 = new CartItem("Polozka 3", 3000);
// item3.addQuantity(1);
// console.log(item3.totalQuantity);

/**
 * Ekvivalentni zapisy, prvni varianta je kratsi
 */
// console.log(chip.getMotherboard().getName());

// const motherboard = chip.getMotherboard();
// console.log(motherboard.getName());
