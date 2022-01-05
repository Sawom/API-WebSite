const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => showAll(data))
}
loadCountry();
const showAll = receivedAll => {
    const countries = document.getElementById('showAll');
    for(const all of receivedAll){
        const div = document.createElement('div');
        // console.log(all);
        div.classList.add('countriesAll');
        div.innerHTML = `
        <h3>Country Name: ${all.name.common}</h3>
        <h4>Capital City: ${all.capital}</h4>
        <button class="btn btn-primary" onclick="loadDetails('${all.name.common}')"> See More </button>
        `;
        countries.appendChild(div);
    }
}
const loadDetails = (name) => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(response => response.json())
    .then(data => showDetails(data[0]))
}
const showDetails = allCountry => {
    // console.log(allCountry);
    const getDetails = document.getElementById('detailsShow');
    getDetails.innerHTML = `
    <h5>Country Name: ${allCountry.name.common}</h5>
    <p>Population: ${allCountry.population}</p>
    <p>Timezones: ${allCountry.timezones}</p>
    <img width="250px"  src="${allCountry.flags.png}" alt="">
    `
}