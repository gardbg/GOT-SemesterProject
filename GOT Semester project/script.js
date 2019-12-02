
// set traps on which tiles
let specialTiles = {
  5: 3,
  7: 22,
  14: 5,
  29: 4,
  21: 26,
}



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


  playerTwo = {
    currentTile: 1,
    nextTile: 1,
    icon: localStorage.getItem("player2"),
    isplayersTurn: false
  }

  placePlayerIcons();

}

initialize();


//send players back to character select, when game is won/or reset button is clicked
function toMenu() {
  localStorage.removeItem("player1");
  localStorage.removeItem("player2");
  window.location.replace("character.html")
};




//place the icons selected onto starting tiles
function placePlayerIcons(){
  let tilePlayerOne = document.getElementById(`tile${playerOne.currentTile}icon1`);
  tilePlayerOne.src = "";
  
  let tilePlayerTwo = document.getElementById(`tile${playerTwo.currentTile}icon2`);
  tilePlayerTwo.src = "";
  
  tilePlayerOne = document.getElementById(`tile${playerOne.nextTile}icon1`);
  tilePlayerOne.src = playerOne.icon;
  
  tilePlayerTwo = document.getElementById(`tile${playerTwo.nextTile}icon2`);
  tilePlayerTwo.src = playerTwo.icon;

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
      title: `${victory} is victorious!`,
      imageUrl: "images/starkbackground.png",
      imageWidth: 550,
      imageHeight: 225,
      imageAlt: "Stark wolf",
      confirmButtonText: "Restart",
      confirmButtonColor: "#43464B",
      reverseButtons: true,
      background: "#000",
      
    }).then((result) => {
      toMenu();
    });
  }
}

//The random dice number
var dice = {
    dicesides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.dicesides) + 1;
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
    var result = dice.roll();

    let player = playerOne.isplayersTurn ? playerOne : playerTwo;
    let playerName = playerOne.isplayersTurn ? "Player one" : "Player two";
    player.nextTile =  Math.min(30, player.currentTile + result);
    
    //trap message
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
        showClass: {
          popup: 'animated fadeInDown faster'
        },
        hideClass: {
          popup: 'animated fadeOutUp faster'
        },
        
      })
      console.log("special tile going from ", player.nextTile, " to ", specialTiles[player.nextTile])
      player.nextTile = specialTiles[player.nextTile];
    }


    playerOne.isplayersTurn = !playerOne.isplayersTurn;
    playerTwo.isplayersTurn = !playerTwo.isplayersTurn;
    //call functions
    placePlayerIcons();
    checkForVictory();
    diceNumber(result);
  }
  
  var button = document.getElementById('btn-dice__roll');
  
  button.onclick = rollDice;
  //reset back to champ select
  document.getElementById('btnReset').onclick = toMenu;
  //call movement function
  function movePlayer(){

  }
  
  

