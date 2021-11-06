/**
 * Ukazka JSDOC s navratovou hodnotou
 * @param {number} x
 * @param {number} y
 * @returns number
 */
 function addNumber(x, y) {
    const result = x + y;
    return result;
  }
  ​
  /**
   * JSDOC pro Tridy
   * @param {string} playerName
   * @param {number} marketPrice
   */
  function Player(playerName, marketPrice) {
    this.playerName = playerName;
   
    this.marketPrice = parseInt(marketPrice);
  ​
    let goals = 0;
  ​
    this.getGoals = function () {
      return goals;
    };
    
    const setValidGoals = function (newGoals) {
      if (newGoals > goals) {
        goals = newGoals;
      }
    };
    this.setGoals = function (newGoals) {
      setValidGoals(newGoals);
    };
  ​
    this.addGoal = function () {
      goals += 1;
    };
  }
  ​

  const player1 = new Player("Lavi", 10000000);
  const player2 = new Player("Horvi", "2000000");
  ​
  const PlayerObj = {
    playerName: "",
    marketPrice: 0,
    teams: ["Sparta", "Slavia"],
    player: player1,
  };
  ​
  player1.sickDays = 5;
  
  console.log(player1);
  console.log(JSON.stringify(player1));
  ​
  
  player1.playerName = "Darida";
  ​
  