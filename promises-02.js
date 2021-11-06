class Hero {
    #name;
    #hp;
    #canfly = false;
    #hasShield = false;
    
    #maxHp = 100;

    /**
     * @param {string} nameParam 
     * @param {number} [hpParam] 
     */

    constructor(nameParam, hpParam = 50) {
       this.#name = nameParam;
       this.#hp = hpParam;
    }
    
    getName = () => this.#name;

    setName = (nameParam) => {
        this.#name = nameParam;
    };

    getHp = () => this.#hp;

    setHp = (hpParam) => {
        if (this.#maxHp < hpParam) {
        this.#hp = hpParam;
        console.warn(`Invalid HP: ${HpParam}. Max value is ${this.#maxhp}`);
    } else {
        this.#hp = hpParam;
    }
    };

    getCanFly = () => this.#canfly;

    setCanFly = (canFlyParam) => {
        this.#canfly = canFlyParam;
    };

    getHasShield = () => this.#hasShield;

    setHasShield = (hasShieldParam) => {
        this.#hasShield = hasShieldParam;
    };

    getDamage = () => 0;
}
    
    class Dragon extends Hero {
        constructor (dragonNameParam, dragonHpParam) {
            super(dragonNameParam, dragonHpParam);

            this.setCanFly(true);
        }

        setCanFly = () => {};
    }



const Legolas = new Hero ("Legolas", 80);
const Gandalf = new Hero ("Gandalf", 90);
const Smak = new Dragon("Smak", 120)
