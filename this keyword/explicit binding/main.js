const game = {
    gameName: "Cricket",
    numOfPlayers: 11
}

function tellGameName(){
    console.log("We are playing "+this.gameName);
}

tellGameName();
tellGameName.call(game);
//every function has a call method by default where in the first parameter we can specify the name of the object or identifier ,and now that object will be referenced by the this keyword (explicit binding)