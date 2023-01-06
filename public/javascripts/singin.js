var countries = require('./singin.json');







const countryList = () => {
    let jsonCountry = JSON.stringify(countries);
    document.getElementById('select').value= jsonCountry;
}

module.exports = countryList;