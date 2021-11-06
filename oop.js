/**
 * Konstruktorova funkce (trida)
 * Public, private a staticke promenne
 * Klicove slovo "new"
 * Prototype chain
 * Podminky a prevod na boolean
 */

function PersonalCar(name, year, readMileage) {
  // property, prop
  this.name = name;
  // staticka, sdilena promenna
  this.__proto__.count++;

  // private property
  let mileage = 10000;
  let createdYear = year;

  this.engine = {
    name: "",
  };

  /**
   * Getter
   */
  this.getName = function () {
    return this.name;
  };
  this.getMileage = function () {
    return mileage;
  };
  this.getCreatedYear = function () {
    return createdYear;
  };

  /**
   * Setter
   */
  this.setCreatedYear = function (newYear) {
    createdYear = newYear;
    return createdYear;
  };

  this.incrementMileage = function (increment) {
    mileage += increment;
  };
}

const skoda = new PersonalCar("Skoda", 2012, readMileage);
console.log(skoda.name);
// Private property nevidime
console.log(skoda.createdYear);
console.log(skoda.getCreatedYear());
console.log(skoda.setCreatedYear(2015));
console.log(skoda.getCreatedYear());

/**
 * Bez new nedostanu novou instanci, nemam k cemu pristupovat
 */

// const nonInstance = PersonalCar("VW");
// console.log(nonInstance);

/**
 * Staticka (sdilena) promenna, kterou si u forda prepiseme vlastni public (verejnou)
 */

// PersonalCar.prototype.count = 0;

// ford.count = 10;

// console.log(ford.mileage);

// ford.mileage = 10000;

// console.log(ford.mileage);
// console.log(skoda.mileage);

/**
 * Konstruktorova funkce vs Object.create
 */

// const Truck = {
//   name: "truck",
// };
// const avia = Object.create(Truck);

// function Truck() {
//   this.name = "truck";
// }
// const avia = new Truck();

// console.log(avia.name);

/**
 * Podminky
 */

// if (0) {
//   console.log("Nula");
// }
// if (-1) {
//   console.log("Zaporne cislo");
// }
// if (1) {
//   console.log("Jedna");
// }
// if ("") {
//   console.log("Prazdny string");
// }
// if (NaN) {
//   console.log("NaN");
// }
// if ("Neco") {
//   console.log("Neprazdny string");
// }

/**
 * Prototype chain
 */
// console.log(ford);
// console.log(ford.__proto__.count);
// console.log(skoda);
// console.log(skoda.hasOwnProperty("count"));
// console.log(ford.hasOwnProperty("count"));

// console.log(ford.count);
// console.log(skoda.count);
