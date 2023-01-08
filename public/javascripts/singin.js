const fs = require('fs');




const countryList = () => {
    let data = fs.readFileSync('./singin.json', 'utf-8');
    let jsonCountry = JSON.parse(data);
    document.getElementById('select') = jsonCountry[0].text;

}

module.exports = countryList;