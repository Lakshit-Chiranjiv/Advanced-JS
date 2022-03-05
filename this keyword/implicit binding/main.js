
const game = {
    gameName: "Cricket",
    numOfPlayers: 11,

    tellGameName: function(){
        console.log("We are playing "+this.gameName);
    }
}

game.tellGameName();

//when a function is invoked with dot notation then the identifier or object at left of dot is what is referenced by the this keyword (implicit binding) 