function getCard(name, id){

fetch("https://anapioficeandfire.com/api/characters/" + id)

.then((response)=>{
    return response.json();
})

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

for(i=1; i<11; i++) {
    let button = document.getElementById(`champion${i}`);
    button.onclick = saveCharacter;
    function saveCharacter(){
        if ("player1" in sessionStorage) {
            sessionStorage.setItem("player2", this.getAttribute("data-image"));
            
        } else {
            sessionStorage.setItem("player1", this.getAttribute("data-image"));
        }
}

}



//function saveCharact(name)

//localStorage.setItem("playerOne", name)

//localStorage.getItem('playerOne')