function getCard(id){
  fetch("https://anapioficeandfire.com/api/characters/" + id)
  .then(response => response.json())
  .then(charName => console.log(charName));
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
  
  var button = document.getElementById('btn-dice__roll');
  
  button.onclick = function() {
    var result = dice.roll();
    diceNumber(result);
  };
  
  
  

