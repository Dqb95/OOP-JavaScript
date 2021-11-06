/**
 * Trida City
 * instanceof vs typeof
 * private property
 * kopirovani adres namisto hodnot u pole/objektu
 */

/**
 *
 * @param {*} name
 * @param {*} population
 */

function City(name, population) {
  // Public prop
  this.name = name;

  // Private prop
  localPopulation = population;
  populationChange = 0;

  const districts = ["Pankrac", "Nusle", "Vinohrady"];

  /**
   * Method
   */
  this.getPopulation = function () {
    return localPopulation;
  };
  this.getPopulationChange = function () {
    return populationChange;
  };
  this.getStatistics = function () {
    return {
      // Skalarni hodnoty se kopiruji
      name: this.name,
      population: localPopulation,
      populationChange: populationChange,
      // districts: districts,
      // Vytvarime nove pole, kam kopirujeme puvodni hodnoty, aby se nam neprepisovaly
      districts: districts.slice(),
    };
  };
  this.printStatistics = function () {
    // console.log("Statistika mesta " + this.name);
    // Template literal, podobne, jako zapis vyse
    console.log(`Statistika mesta ${this.name}:
    Populace: ${localPopulation}, 
    Zmena populace: ${populationChange}`);
  };
  this.changePopulation = function (newPopulation) {
    localPopulation += newPopulation;
    populationChange += newPopulation;
  };
  this.addDistrict = function (districtName) {
    districts.push(districtName);
  };
}

function Test() {}

const prague = new City("prague", 1200000);
const pilsen = new City("pilsen", 170000);
const test = new Test();

console.log(prague);

/**
 * instanceof vs typeof
 */

// console.log(typeof prague);
// console.log(typeof prague === "object");
// console.log(typeof prague === typeof test);
// console.log(prague instanceof City);
// console.log(prague instanceof Test);
// console.log(prague.getStatistics().districts instanceof Array);
// // Od objektu dedi temer vse
// console.log(prague.getStatistics().districts instanceof Object);

/**
 * Proc pouzivat private property - odstinime od vnitrni logiky
 */

// console.log(prague.name);
// console.log(prague.getPopulation());
// console.log(prague.getPopulationChange());

// prague.changePopulation(5000);

// console.log(prague.getPopulation());
// console.log(prague.getPopulationChange());

// console.log(prague.printStatistics());

/**
 * Vzajmne ovlivnovani hodnot v poli ("districts"), pokud ho nezkopirujeme
 * Slozite typy (pole, objekty) kopiruji v getteru adresu v pameti,
 * nikoliv svoji hodnotu
 */

// const statistics = prague.getStatistics();
// console.log(statistics);

// prague.addDistrict("Zizkov");
// console.log(statistics);
// console.log(prague.getStatistics());

/**
 * Zmena statistiky neovlivni populaci tridy
 */

// statistics.population = 100000;
// console.log(prague.getPopulation());

// prague.localPopulation = 0;

// console.log(prague.getPopulation());
// console.log(prague.getPopulationChange());
