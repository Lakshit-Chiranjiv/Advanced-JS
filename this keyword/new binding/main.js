
function Game(gameName){
    this.gameName = gameName;
}

const g1 = new Game("Cricket");
const g2 = new Game("Football");
const g3 = new Game("Hockey");

//constructor use
//in this case, the this keyword acts as an empty object inside the Game function which now has a property gameName

console.log(g1.gameName);
console.log(g2.gameName);
console.log(g3.gameName);