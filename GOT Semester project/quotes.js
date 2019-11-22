
const api = "https://got-quotes.herokuapp.com/";

const getQuote = (char) => {
    let endpoint = `${api}/quotes`;
    if (char) endpoint += `?char=${char}`;
    fetch(endpoint)
        .then(response => response.json())
        .then(json => {
            parseQuote(json.quote);
            parseCharacter(json.character);
        })
        .catch(err => console.log(err));
};

const parseQuote = (quote) => {
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quote;
};

const parseCharacter = (character = null) => {
    const characterElement = document.getElementById('character');
    characterElement.innerText = character;
};

const quoteButton = document.getElementById('quoter');
quoteButton.addEventListener('click', getQuote);





getQuote();