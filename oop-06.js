/**
 * Hrac
 * @param {string} playerName
 * @param {number} [marketPrice] - Nepovinny parametr marketPrice
 */
 function Player(playerName, marketPrice) {
  this.playerName = playerName;
​
  /**
   * Soukrome property jsou svazane s tridou, kde jsou definovane.
   * Rodic chce mit praci s nimi pod kontrolou, proto nejsou videt ani u potomka.
   */
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
    if (typeof newMarketPrice === "number") {
      localMarketPrice = newMarketPrice;
    }
  };
​
  this.setMarketPrice(marketPrice);
​
  const setValidGoals = function (newGoals) {
    if (newGoals > goals) {
      goals = newGoals;
    }
  };
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
  Player.call(this, goaliePayerName, goalieMarketPrice);
​
  this.zakrok = 0;
​
  this.printStatistics = function () {
    console.log("Name: " + this.playerName + ", goals: " + this.getGoals());
  };
}
​
/**
 * Logicke operace
 */
// || = or = alespon jedna hodnota je truthy
// && = and = obe hodnoty jsou truthy
// truthy - hodnota je pri prevodu na Boolean rovna true
// falsy - hodnota je pri prevodu na Boolean rovna true
// 1 - truthy
// "text" - truthy
// 0 - neni truthy
​
/**
 * Vkladani prvku do pole
 */
// const allowedPosition = [];
// allowedPosition.push("obrance"); // ["obrance"]
// allowedPosition.push("utocnik"); // ["obrance", "utocnik"]
// allowedPosition.push("zaloznik"); // ["obrance", "utocnik", "zaloznik"]
​
function FieldPlayer(
  fieldPlayerName,
  fieldPlayerMarketPrice,
  fieldPlayerPosition
) {
  /**
   * Ekvivalentni zapisy pro nastaveni defaultni hodnoty promenne
   */
  // let position = fieldPlayerPosition || "obrance";
  // let position = fieldPlayerPosition
  // if (!fieldPlayerPosition) {
  //   position = "obrance";
  // }
​
  Player.call(this, fieldPlayerName, fieldPlayerMarketPrice);
​
  const allowedPosition = ["obrance", "utocnik", "zaloznik"];
​
  let position = "obrance";
​
  this.getPosition = function () {
    return position;
  };
  this.setPosition = function (newPosition) {
    // Kontrolujeme, ze nastavovana pozice je jednou z tech definovanych v promenne allowedPosition
    if (allowedPosition.includes(newPosition)) {
      position = newPosition;
    } else if (typeof newPosition !== "undefined") {
      console.error(newPosition + " is invalid field player position!");
    }
  };
​
  this.setPosition(fieldPlayerPosition);
}
​
function Team(name) {
  this.name = name;
​
  const players = [];
​
  /**
   *
   * @param {Player} teamPlayer
   */
  this.addPlayer = function (teamPlayer) {
    /**
     * Implicitne ocekavame, ze do promenne "players" pujdou jen instance tridy Player
     * nebo instance trid, ktere od Player dedi. Bud musime spolehat na to, ze to ohlida programator,
     * ktery pouziva nasi tridu, nebo to osetrit sami, napr. pres "instanceof"
     */
    // if (
    //   teamPlayer instanceof FieldPlayer ||
    //   teamPlayer instanceof Goalie ||
    //   teamPlayer instanceof Player
    // ) {
    // }
​
    /**
     * Ekvivalentni zapis, jen s tim rozdilem, ze vytvarime navic promennou "existingPlayerSearcher",
     * kterou pak predavame jako callback.
     * Pokud ji pouzijeme jen jednou, je to relativne zbytecne a muzeme pouzit zapis nize (anonymni callback).
     * Naopak, pokud ji pouzivame vicekrat (pripadne logika callbacku je na vice mistech shodna), je vhodne z toho udelat promennou.
     */
    // const existingPlayerSearcher = function (value) {
    //   return value.playerName === teamPlayer.playerName;
    // };
    // const existingPlayer = players.find(existingPlayerSearcher);
​
    const existingPlayer = players.find(function (value) {
      return value.playerName === teamPlayer.playerName;
    });
​
    if (!existingPlayer) {
      players.push(teamPlayer);
    }
​
    /**
     * Includes porovnava primo hodnoty, coz se u instanci nikdy nebude shodovat.
     * "new" vytvari nove misto v pameti, promenna s instanci obsahuje adresu na toto misto
     */
    // const existingPlayer = players.includes(teamPlayer);
  };
  this.getPlayers = function () {
    return players;
  };
  this.printPlayers = function () {
    console.log("Team " + this.name + ", players: " + players.length);
    players.forEach(function (value) {
      console.log(
        "Player name: " +
          value.playerName +
          ", market price: " +
          value.getMarketPrice()
      );
​
      /**
       * typeof vs instanceof - typeof u instanci trid vzdycky vrati "object"
       */
      // console.log("Type of player: " + typeof value);
​
      /**
       * "getPosition" je vlastnost tridy FieldPlayer, neni sdilena napric ostatnimi tridami,
       * ktere dedi od Player, proto pred jejim volanim musime kontrolovat instanci
       */
      if (value instanceof FieldPlayer) {
        console.log("Player position: " + value.getPosition());
      }
    });
  };
}
​
// function TestClass() {
//   this.playerName = "Test player name";
// }
​
const goaliePetrCech = new Goalie("Petr Cech");
const goaliePetrCechDuplicit = new Goalie("Petr Cech");
const horvi = new FieldPlayer("Horvi", 1000000000);
const test = new TestClass();
​
const sparta = new Team("Sparta");
sparta.addPlayer(goaliePetrCech);
sparta.addPlayer(horvi);
/**
 * Duplicitni golman se nevlozi diky kontrole na shodu jmen
 */
sparta.addPlayer(goaliePetrCechDuplicit);
/**
 * Ukazka, ze nam nic nebrani vlozit i tridu, ktera nededi od tridy Player (pokud to v kodu sami neosetrime)
 * Da se pripadne zkusi spolehnout na dokumentaci
 */
// sparta.addPlayer(test);
sparta.printPlayers();
// console.log(sparta.getPlayers());