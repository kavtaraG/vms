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

const getStoreById = (id) =>{
   let temp = obj.filter((data)=> (data.id == id));
   if(temp.length > 0){
    return temp[0];
   }else{
    return {};
   };
};

const addStore = (record) => {
    record.id = Date.now();
    obj.push(record);
    
};

const updateStore = (rec) => {
    obj.map((item,index)=>{
        if(rec.id == item.id){
          rec = obj[index];
        }
      });
};

const deleteStore = (id) => {
    let temp = obj.filter((record) => (record.id != id));
    obj = temp;
};

module.exports = { getStore, getStoreById, addStore, updateStore, deleteStore };