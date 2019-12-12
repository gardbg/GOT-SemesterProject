
//pop-up modal when entering page
Swal.fire({
    imageUrl: 'images/GOTLogo.png',
    imageWidth: 550,
    imageHeight: 300,
    imageAlt: 'A tall image',
    background: "#000",
    confirmButtonColor: "#43464B",
    confirmButtonText: "Play",
    timer: 3500,
  })


//Fetch character info start


function getCard(name, id){

fetch("https://anapioficeandfire.com/api/characters/" + id)

.then((response)=>{
    return response.json();
})
//create the divs to place fetched content
.then((data)=>{
    console.log(data);
    let characterInfo = document.getElementById('cardCharacterName' + name);
    let character = document.getElementById('cardBody' + name);
    let born = document.getElementById('cardBorn' + name);
    let culture = document.getElementById('cardCulture' + name);
    
    character.innerHTML += 'Name: ' + data.name;
    characterInfo.innerHTML = 'Gender: ' + data.gender;
    born.innerHTML = 'Born: ' + data.born;
    culture.innerHTML = 'Culture: ' + data.culture;
    console.log(data.name);
})

}
//loop through the id, to find correct champion, then store selected champions in local storage, (data image from character select)
for(i=1; i<11; i++) {
    let button = document.getElementById(`champion${i}`);
    button.onclick = function() {
        if ("player1" in localStorage) {
            localStorage.setItem("player2", this.getAttribute("data-image"));
            localStorage.setItem("gameReady", true);

            window.location.replace("board.html")
        } else {
            localStorage.setItem("player1", this.getAttribute("data-image"));
        }

    };
}




//function saveCharact(name)

//localStorage.setItem("playerOne", name)

//localStorage.getItem('playerOne')