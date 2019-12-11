
//dictionary. the keys represents the trap tiles, while their values represent the trap destination
// set traps on which tiles
let specialTiles = {
  5: 3,
  7: 22,
  14: 5,
  29: 4,
  21: 26,
}


//initialize the players as empty objects 
let playerOne = {
}


let playerTwo = {
}

//if no character is selected, return to character select, function to check, if not remove local storage items and go back
function initialize(){

    // Check if characters have been selected
  if(localStorage.getItem("gameReady") == null){
    toMenu();
  } else {
    // Go back to champ select at refresh
    localStorage.removeItem("gameReady");
  }

  playerOne = {
    currentTile: 1,
    nextTile: 1,
    icon: localStorage.getItem("player1"),
    isplayersTurn: true
  }

  //true/false only 1 can start
  playerTwo = {
    currentTile: 1,
    nextTile: 1,
    icon: localStorage.getItem("player2"),
    isplayersTurn: false
  }
  //Icons will be placed on tile 1
  placePlayerIcons();

}

initialize();


//send players back to character select, when game is won/or reset button is clicked
function toMenu() {
  localStorage.removeItem("player1");
  localStorage.removeItem("player2");
  window.location.replace("character.html")
};



//Places the icons, removes them from the last tile and ads them to the next tile.
//place the icons selected onto starting tiles
function placePlayerIcons(){
  let tilePlayerOne = document.getElementById(`tile${playerOne.currentTile}icon1`);
  tilePlayerOne.src = ""; //src attribute to the image object
  
  let tilePlayerTwo = document.getElementById(`tile${playerTwo.currentTile}icon2`);
  tilePlayerTwo.src = "";
  
  tilePlayerOne = document.getElementById(`tile${playerOne.nextTile}icon1`);
  tilePlayerOne.src = playerOne.icon;
  
  tilePlayerTwo = document.getElementById(`tile${playerTwo.nextTile}icon2`);
  tilePlayerTwo.src = playerTwo.icon;

  //the player icon is now moved, update the currentTile to the new value
  playerOne.currentTile = playerOne.nextTile;
  playerTwo.currentTile = playerTwo.nextTile;

}
  //check if a player has reached the end of game
function checkForVictory(){
  victory = null;
  if(playerOne.currentTile == 30){
    victory = "Player one"
  }
  if(playerTwo.currentTile == 30){
    victory = "Player two"
  }

  //victory message
  if(victory != null){``
    swal({
      title: `Congratulations! ${victory} is victorious!`,
      imageUrl: "images/starkbackground.png",
      imageWidth: 550,
      imageHeight: 225,
      imageAlt: "Stark wolf",
      confirmButtonText: "Restart",
      confirmButtonColor: "#43464B",
      reverseButtons: true,
      background: "#000",
      className: "victory-message",
      backdrop: `
    rgba(0,0,123,0.4)
    url("images/fireworks2.gif")
    repeat
  `
      
    }).then((result) => {
      toMenu(); //run function
    });
  }
}

//The random dice number
var dice = {
    dicesides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.dicesides) + 1;//Returns a random number between 1 and 6(dicesides)
      return randomNumber;
    }
  }
  
  //Prints dice roll to the page
  
  function diceNumber(number) {
    var diceplacement = document.getElementById('dice-number');
    diceplacement.innerHTML = number;
  }

    //roll the dice, and move correct player
  function rollDice(){
    var diceResult = dice.roll();
    //inline if sentence to avoid writing logic for both players. The generic player variable will be set to player 1 if it is his turn, otherwise it will be set to player 2
    let player = playerOne.isplayersTurn ? playerOne : playerTwo;
    let playerName = playerOne.isplayersTurn ? "Player one" : "Player two";

    //Update the players next location. Never exceed tile 30 as it is the last tile
    player.nextTile =  Math.min(30, player.currentTile + diceResult);
    
    //trap message
    //checks if the players new tile is in the trap dictionary. if it exists the value in the dictionary will tell it's next location
    if(specialTiles[player.nextTile]){
      swal({
        title: `${playerName} landed on a trap - jumping from ${player.nextTile} to ${specialTiles[player.nextTile]}`,
        confirmButtonText: "Ok",
        imageUrl: "images/tyrionTile.jpg",
        imageWidth: 550,
        imageHeight: 225,
        confirmButtonColor: "#43464B",
        reverseButtons: true,
        background: "#000",
        timer: 1500,
        
      })
      console.log("special tile going from ", player.nextTile, " to ", specialTiles[player.nextTile])
      player.nextTile = specialTiles[player.nextTile];//update with the traps value
    }

    // only change turns if the player did not roll a 6
    console.log(diceResult)
    if(diceResult != 6){

      //if true, becomes false, if false becomes true. becomes the opposite of it's value.
      playerOne.isplayersTurn = !playerOne.isplayersTurn;
      playerTwo.isplayersTurn = !playerTwo.isplayersTurn;
    } else {
      swal({
        title: 'You rolled a 6, roll again!',
        imageUrl: 'images/GOTLogo.png',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        background: "#000",
        confirmButtonColor: "#43464B",
        timer: 2500,
      })
    }
    //places the icon on its new tile based on the new value
    placePlayerIcons();
    checkForVictory();
    diceNumber(diceResult);
  }
  
  var button = document.getElementById('btn-dice__roll');
  
  button.onclick = rollDice;
  //reset back to champ select
  document.getElementById('btnReset').onclick = toMenu;

  

