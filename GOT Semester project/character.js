/*function getCard(id){

    fetch("https://anapioficeandfire.com/api/characters/" + id)
    .then((response=>{
        return response.json()
    })
    .then((charName =>{
        console.log(charName);
        
    })
  
}*/

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

