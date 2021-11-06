class Player {
    #marketPrice = 0;
    #goals = 0;
  ​
    /**
     *
     * @param {string} [playerName]
     * @param {number} [marketPrice] - nepovinny parametr, defaultne nastavujeme 1000000
     */
    constructor(playerName = "Neznamy hrac", marketPrice = 500000) {
      this.playerName = playerName;
  ​
      this.setMarketPrice(marketPrice);
    }
  ​
    getMarketPrice = () => this.#marketPrice;
  ​
    getMarketPriceWithVat = () => this.getMarketPrice() * 1.21;
  ​
    getGoals = () => this.#goals;
  ​
    setMarketPrice = (marketPrice) => {
      if (typeof marketPrice === "number") {
        this.#marketPrice = marketPrice;
      }
    };
  ​
    addGoal = () => {
      this.#goals += 1;
    };
  ​
    setGoals = (goals) => {
      this.#setValidGoals(goals);
    };
  ​
    #setValidGoals = (goals) => {
      if (goals > this.#goals) {
        this.#goals = goals;
      }
    };
  }
  ​
  class Goalie extends Player {
    /**
     * Pozor - soukrome promenne musime vzdy definovat zde, na urovni tridy,
     * v konstruktoru lzde definovat pouze verejne promenne
     */
    #zakrok = 0;
    verejnaPromenna = "neco";
    // goalieMarketPrice = 500000;
  ​
    constructor(goaliePlayerName) {
      const goalieMarketPrice = 1000000;
      super(goaliePlayerName, goalieMarketPrice);
  ​
      /**
       * Pokud bychom meli stejne pojmenovane promenne, jednu zde jako konstantu,
       * druhou na urovni tridy, rozlisime je pres "this"
       */
      // console.log(goalieMarketPrice, this.goalieMarketPrice);
  ​
      /**
       * Je mozne definovat promenne na urovni tridy (jako "verejnaPromenna") i na urovni konstruktoru.
       * Jde v podstate o ekvivalentni zapis a je na volbe programatora, ktery pouzije.
       * Pouzivat spise definici na urovni tridy je lepsi v tom, ze mam vsechny promenne na jednom miste
       * (jelikoz soukrome promenne se tam musi definovat vzdy).
       *
       * Hodnotu promenne definovane na urovni tridy pak muzeme v konstruktoru samozrejme prepsat.
       */
      this.jinaVerejnaPromenna = `neco-dalsiho s hodnotou ${goaliePlayerName}`;
  ​
      /**
       * Volani konstruktoru rodice s defaultnimi parametry
       */
      // super();
    }
  ​
    getZakrok = () => {
      /**
       * Resit navratovou hodnotu pres callback je v tomhle pripade zbytecne,
       * ale pro ilustraci - proc je dobre pouzivat arrrow funkce namisto "function"
       */
      const callback = () => this.#zakrok;
      // const callback = function() {
      //   return this.#zakrok;
      // };
  ​
      return callback();
    };
  ​
    setZakrok = (zakrok) => {
      if (zakrok > this.getZakrok()) {
        this.#zakrok = zakrok;
      }
    };
  ​
    printStatistics = () => {
      /**
       * Nemuzeme sahat primo na soukrome vlastnosti rodice, ty jsou "jen pod jeho kontrolou".
       * Musime k tomu vyuzivat verejne metody.
       */
      // console.log(`Name ${this.playerName}, goals: ${this.#goals}`);
      console.log(`Name ${this.playerName}, goals: ${this.getGoals()}`);
    };
  }
  ​
  class FieldPlayer extends Player {
    #allowedPosition = ["obrance", "utocnik", "zaloznik"];
    #position;
  ​
    constructor(fieldPlayerName, fieldPlayerMarketPrice, fieldPlayerPosition) {
      super(fieldPlayerName, fieldPlayerMarketPrice);
  ​
      this.setPosition(fieldPlayerPosition);
    }
  ​
    getPosition = () => this.#position;
  ​
    /**
     *
     * @param {string} [position] - jako defaultni hodnotu pouzivame "unknown" pro hezci vypis v konzoli
     */
    setPosition = (position = "unknown") => {
      if (this.#allowedPosition.includes(position)) {
        this.#position = position;
      } else {
        console.error(`${position} is invalid field player position.`);
      }
    };
  }
  ​
  class Team {
    #players = [];
  ​
    constructor() {
      this.name = name;
    }
  ​
    /**
     *
     * @param {Player} player
     */
    addPlayer = (player) => {
      /**
       * Dedicnost funguje lepe - instanceof uz (oproti drivejsim prikladum) funguje i na predka
       * Tzn. instanceof = "je instanci tridy a nebo je potomkem tridy"
       */
      if (!(player instanceof Player)) {
        console.error("Player is not instance of class Player!");
        return;
      }
  ​
      if (this.getPlayersCount() >= 11) {
        console.error("Max. number of players is 11!");
        /**
         * early return
         */
        return;
      }
  ​
      let goalieAlreadyExists = false;
      let playerNameAlreadyExists = false;
  ​
      this.#players.forEach((value) => {
        if (value instanceof Goalie) {
          goalieAlreadyExists = true;
        }
        if (value.playerName === player.playerName) {
          playerNameAlreadyExists = true;
        }
      });
  ​
      if (player instanceof Goalie && goalieAlreadyExists) {
        console.error("Team can have only one goalie!", this.#players);
        return;
      }
  ​
      if (!playerNameAlreadyExists) {
        this.#players.push(player);
      } else {
        console.error(
          `Player with name ${player.playerName} already exists!`,
          this.#players
        );
      }
    };
  ​
    getPlayersCount = () => {
      return this.#players.length;
    };
  ​
    getPlayers = () => {
      return this.#players;
    };
  }
  ​
  class NotAPlayer {}
  ​
  const petrCechGoalie = new Goalie("Petr Cech");
  const horvi = new FieldPlayer("Horvi", 1500000, "utocnik");
  const petrCechFieldPlayer = new FieldPlayer("Petr Cech", 2000000, "zaloznik");
  const pelta = new NotAPlayer();
  const bufon = new Goalie("Bufon");
  const player1 = new FieldPlayer("Player 1", 1000000, "utocnik");
  const player2 = new FieldPlayer("Player 2", 1000000, "utocnik");
  const player3 = new FieldPlayer("Player 3", 1000000, "utocnik");
  const player4 = new FieldPlayer("Player 4", 1000000, "zaloznik");
  const player5 = new FieldPlayer("Player 5", 1000000, "zaloznik");
  const player6 = new FieldPlayer("Player 6", 1000000, "zaloznik");
  const player7 = new FieldPlayer("Player 7", 1000000, "zaloznik");
  const player8 = new FieldPlayer("Player 8", 1000000, "zaloznik");
  const player9 = new FieldPlayer("Player 9", 1000000, "zaloznik");
  const player10 = new FieldPlayer("Player 10", 1000000, "obrance");
  ​
  const slavia = new Team("Slavia");
  slavia.addPlayer(petrCechGoalie);
  slavia.addPlayer(horvi);
  slavia.addPlayer(pelta);
  /**
   * Neprojde, protoze povolujeme jen jednoho golmana
   */
  slavia.addPlayer(bufon);
  /**
   * Neprojde, protoze ma shodne jmeno z nasim golmanem
   */
  slavia.addPlayer(petrCechFieldPlayer);
  slavia.addPlayer(player1);
  slavia.addPlayer(player2);
  slavia.addPlayer(player3);
  slavia.addPlayer(player4);
  slavia.addPlayer(player5);
  slavia.addPlayer(player6);
  slavia.addPlayer(player7);
  slavia.addPlayer(player8);
  slavia.addPlayer(player9);
  /**
   * Neprojde, protoze by slo o 12. hrace (a my dovolujeme pouze 11)
   */
  slavia.addPlayer(player10);
  console.log(slavia.getPlayersCount());
  console.log(slavia.getPlayers());
  ​
  /**
   * Indexovani pole
   */
  // const firstPlayer = this.#players[0];
  // const secondPlayer = this.#players[1];
  // const thirdPlayer = this.#players[2];
  // const lastPlayer = this.#players[this.#players.length - 1];
  ​
  /**
   * setGoals funguje diky hoistingu
   */
  // const lavi = new Player("Lavi", 2000000);
  // console.log(lavi.getGoals());
  // lavi.setGoals(3);
  // console.log(lavi.getGoals());
  // lavi.setGoals(1);
  // console.log(lavi.getGoals());
  ​
  /**
   * Stale mame osetrenou vstupni hodnotu
   */
  // const lavi = new Player("Lavi", "text");
  // console.log(lavi.getMarketPrice());
  // lavi.setMarketPrice("spatne");
  // console.log(lavi.getMarketPrice());
  // lavi.setMarketPrice(2000000);
  // console.log(lavi.getMarketPrice());