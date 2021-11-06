/**
 * Hrac
 * @param {string} playerName
 * @param {number} [marketPrice] - Nepovinny parametr marketPrice
 */
 function Player(playerName, marketPrice) {
    this.playerName = playerName;
  ​
    /**
     * Kontrolujeme, jestli jsme dostali parametry tridy - v JS jsou vzdy implicitne nepovinne
     */
    // console.log(
    //   "Params",
    //   typeof playerName === "undefined",
    //   typeof marketPrice === "undefined"
    // );
  ​
    let localMarketPrice = 0;
  ​
    let goals = 0;
  ​
    this.getMarketPrice = function () {
      return localMarketPrice;
    };
    this.getMarketPriceWithVat = function () {
      return this.getMarketPrice() * 1.21;
    };
    this.getGoals = function () {
      return goals;
    };
    this.setMarketPrice = function (newMarketPrice) {
      /**
       * Osetreni hodnoty mame v ramci setteru, ktery volame pri vytvareni instance
       */
      if (typeof newMarketPrice === "number") {
        localMarketPrice = newMarketPrice;
      }
    };
  ​
    this.setMarketPrice(marketPrice);
  ​
    /**
     * Promenna "setValidGoals", ktera obsahuje callback (anonymni funkci)
     * Nehoistuje se
     */
    const setValidGoals = function (newGoals) {
      if (newGoals > goals) {
        goals = newGoals;
      }
    };
    /**
     * Funkce zvana "setValidGoals"
     * Hoistuje se
     */
    // function setValidGoals(newGoals) {
    //   if (newGoals > goals) {
    //     goals = newGoals;
    //   }
    // }
  ​
    this.setGoals = function (newGoals) {
      setValidGoals(newGoals);
    };
    this.addGoal = function () {
      goals += 1;
    };
  }
  ​
  const goalieMarketPrice = 1000000;
  function Goalie(goaliePayerName) {
    /**
     * Call se da volat s ruznymi hodnotami na miste prvni parametru, nebo byt vzdy jen "this"
     */
    // this.test = function () {};
    // Player.call(this.test, goaliePayerName, goalieMarketPrice);
    // this.test = {};
    // Player.call(this.test, goaliePayerName, goalieMarketPrice);
  ​
    /**
     * Volani rodice bez parametru, ktere ocekava
     */
    // Player.call(this);
  ​
    Player.call(this, goaliePayerName, goalieMarketPrice);
  ​
    this.zakrok = 0;
  ​
    /**
     * Pretizeni metody rodice, golmanovi neumoznime davat goly
     */
    // this.addGoal = function () {};
    // this.setGoals = function () {};
  }
  ​
  function FieldPlayer() {}
  ​
  /**
   * Prestoze hrac ma definovane vstupni parametry,
   * muzeme ho zavolat i bez nich - je dobre byt na to opatrny
   */
  const player = new Player();
  const goalie = new Goalie("brankar");