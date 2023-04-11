const Property = require("../../database/Property")

const getAllPropertiesPreSale = (filterParams) => {
    const allPropertiesPreSale = Property.getAllPropertiesPreSale(filterParams);
    return allPropertiesPreSale;
}

const getAllPropertiesForSale = (filterParams) => {
    const allPropertiesForSale = Property.getAllPropertiesForSale(filterParams);
    return allPropertiesForSale;
}

const getAllPropertiesSold = (filterParams) => {
    const allPropertiesSold = Property.getAllPropertiesSold(filterParams);
    return allPropertiesSold;
}

module.exports = {
    getAllPropertiesPreSale,
    getAllPropertiesForSale,
    getAllPropertiesSold
};