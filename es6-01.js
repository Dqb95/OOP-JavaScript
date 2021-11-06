/**
 * U const pozor na to, ze "vnitrnosti" objektu lze stale menit
 */
// const b = {};
// b.a = "a";
// b.b = "b";
// console.log(b);
​
/**
 * Scope var vs let
 */
// {
//   let scopedVariable = "foo";
//   var scopedVariable = "foo";
// }
// console.log(scopedVariable);
​
class Car {
  /**
   * Ekvivalentni zapis s nastavenim z konstruktoru
   */
  yearMade = 2001;
​
  /**
   * Mrizka v nove syntaxi znaci, ze jde o private property
   * Je opravdu chranena proti pristupu zvenci
   */
  #hiddenProp = "top-secret";
​
  /**
   * Pokud trida neprijima zadne parametry, konstruktor muzeme vynechat
   */
  // constructor() {}
​
  /**
   * Konstruktor pouzivame, pokud chceme predat parametry tride
   */
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
​
    console.log("Constructor", this.#hiddenProp);
    /**
     * Nebude fungovat - metody v ramci konstruktoru nejsou hoistovane
     */
    // console.log("Constructor - printSomething", this.printSomething());
​
    // this.yearMade = 2001;
​
    /**
     * Ekvivalentni zapisy
     */
    // this.launch = function () {
    //   console.log("works");
    // };
​
    this.printSomething = () => {
      console.log("Something!");
    };
  }
​
  /**
   * Ekvivalentni zapisy funkci
   */
  // launch = function () {
  //   console.log("works", this.brand, this.model);
  /**
   * Pro zajimavost - dalsi rozdil oproti arrow (krome promenneho "this") je specialni promenna "arguments"
   */
  //   console.log("arguments", arguments);
  // };
  // launch() {
  //   console.log("works", this.brand, this.model);
  // }
  launch = () => {
    console.log(
      "It works! Brand of this car is " +
        this.brand +
        "\nand model of this car is " +
        this.model +
        "."
    );
    /**
     * Template literal - umoznuje vkladat JS kod do stringu.
     * Kod je mezi dolarem a slozenymi zavorkami (muzeme klidne i volat funkce).
     * Vysledek zavorky se prevadi na string.
     * Pozor na bile znaky! Nove radky, mezery, tabulatory apod. se berou v potaz a jsou soucasti retezce.
     */
    console.log(
      `It works! Brand of this car is ${this.brand} 
      and model of this car is ${this.model}.`
    );
  };
​
  /**
   * Defaultni parametry - nahrazuje, pokud hodnotu, vynecham pripadne uvedu "undefined"
   * Pozor, napr. "null" nenahrazuje
   */
  funcWithArguments = (
    someArgument = "Defaultni hodnota",
    someOtherArgument,
    lastArgument = "Treti defaultni hodnota"
  ) => {
    console.log(someArgument);
    console.log(someOtherArgument);
    console.log(lastArgument);
​
    /**
     * Drive bychom museli defaultni parametr resit nejak takto
     */
    // if (typeof someArgument === "undefined") {
    //   console.log("Defaultni hodnota");
    // } else {
    //   console.log(someArgument);
    // }
  };
}
​
const carMazda = new Car("mazda", "323F");
carMazda.printSomething();
​
/**
 * Po odkomentovani spadne program, protoze:
 * - mrizka znaci, ze jde o private property
 * - JS nedovoli zvenci manipulovat s private property
 */
// console.log(carMazda.#hiddenProp);
​
// console.log({ ...carMazda });
​
// carMazda.launch();
​
// carMazda.funcWithArguments();
// carMazda.funcWithArguments(undefined);
// carMazda.funcWithArguments(null);
​
/**
 * Otestovat s pouzitim "function" namisto arrow funkce - uvidite promenny "this" u "function"
 */
// carMazda.launch(1, "neco");
// const launchRef = carMazda.launch;
// launchRef();
​
/**
 * Nemuze se stat, ze "new" omylem vynechame, prohlizec rovnou vyhodi chybu
 */
// Car("mazda", "323F").launch();
​
// const add = function (b, c) {
//   return b + c;
// };
/**
 * Arrow funkce
 */
const add = (b, c) => {
  return b + c;
};
// const add = (b, c) => (
//   b + c
// );
// const add = (b, c) => b + c;
​
/**
 * Ekvivalentni zapisy pro navrat objektu
 */
// const createObject = function (a, b) {
//   return {
//     propertyA: a,
//     propertyB: b,
//   };
// };
/**
 * Pokud vracime rovnou objekt, musime JS napovedet kulatymi zarovkami, ktere rikaji,
 * ze rovnou vracime vysledek. JS by jinak ocekaval, ze budeme psat kod uvnitr tela funkce.
 */
// const createObject = (a, b) => ({
//   propertyA: a,
//   propertyB: b,
// });
​
const createObject = (a, b) => {
  return {
    propertyA: a,
    propertyB: b,
    propertyC: "prop-C",
    propertyD: "prop-D",
  };
};
​
// const obj = createObject("foo", "bar");
/**
 * Destructuring - ekvivalentni zapisy
 */
// const propertyA = obj.propertyA;
// const propertyB = obj.propertyB;
// const { propertyA, propertyB } = obj;
​
// const a = obj.propertyA;
// const b = obj.propertyB;
​
// const { propertyA: a, propertyB: b } = obj;
​
// console.log(a);
// console.log(b);
​
// console.log(propertyA);
// console.log(propertyB);
​
/**
 * Spread operator - tri tecky + vlastni nazev promenne
 */
// const { propertyA, propertyB, ...restProps } = obj;
// console.log(propertyA);
// console.log(propertyB);
// console.log(restProps);