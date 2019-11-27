
const api = "https://got-quotes.herokuapp.com/";

const generateQuote = (char) => {
    let quotesource = `${api}/quotes`;
    if (char) quotesource += `?char=${char}`;
    fetch(quotesource)
        .then(response => response.json())
        .then(json => {
            theQuote(json.quote);
            whichCharacter(json.character);
        })
        .catch(err => console.log(err));
};

const theQuote = (quote) => {
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quote;
};

const whichCharacter = (character = null) => {
    const characterElement = document.getElementById('character');
    characterElement.innerText = character;
};

const quoteButton = document.getElementById('btnQuote');
quoteButton.addEventListener('click', generateQuote);





generateQuote();