// load quotes function
const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(response => response.json())
    .then(data => showQuotes(data))
}
// loadQuotes();
const showQuotes = (data) => {
    const getQuote = data.quote;
    // console.log(getQuote);
    const quoteLines = document.getElementById('kanyeQuotes');
    const p = document.createElement('p');
    p.innerText = getQuote;
    quoteLines.appendChild(p);
}