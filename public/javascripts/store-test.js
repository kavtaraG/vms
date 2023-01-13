const fs = require('fs');

// const tempOver = () => {
//     return fs.readFileSync(`../../views/partials/temp/temp-overview.ejs`, 'utf-8');
// };

const tempCard = () => {
    return fs.readFileSync(`${__dirname}/views/partials/temp/temp-card.ejs`, 'utf-8');
};

const overview = () => {
    return fs.readFileSync(`${__dirname}/views/partials/temp/overview.ejs`, 'utf-8');
};

// const overview = () => {
//     return fs.readFileSync('../../views/partials/temp/overview.html', 'utf-8');
// }


// const tempTest = fs.readFileSync('../../views/partials/store-test.html', 'utf-8');
// const tempOver = fs.readFileSync('../../views/partials/temp/temp-overview.html', 'utf-8');
// const tempCard = fs.readFileSync('../../views/partials/temp/temp-card.html', 'utf-8');



module.exports = { tempCard, overview };