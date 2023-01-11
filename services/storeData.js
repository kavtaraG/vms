// let obj = require('../public/javascripts/store.json');
let obj = [
    {
        id:0,
        brand:"focus",
        purpose:"paper towlers",
        origin:"turkey",
        in_stock: true,
        price:"5 GEL"
    },
    {
        id:1,
        brand:"focus",
        purpose:"napkins",
        origin:"turkey",
        in_stock: true,
        price:"3 GEL"
    }

];

const getStore = () => (obj); 

const addStore = (record) => {
    record.id = Date.now();
    obj.push(record);
    
};

const updateStore = () => {

};

const deleteStore = (id) => {
    let temp = obj.filter((record) => (record.id != id));
    obj = temp;
};

module.exports = { getStore, addStore, updateStore, deleteStore };