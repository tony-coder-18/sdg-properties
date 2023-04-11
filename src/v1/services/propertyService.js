const Property = require("../../database/Property")

const getAllProperties = (filterParams) => {
    const allProperties = Property.getAllProperties(filterParams);
    return allProperties;
}

const getAllPropertiesPreSale = () => {
    const allPropertiesPreSale = Property.getAllPropertiesPreSale();
    return allPropertiesPreSale;
}

const getAllPropertiesForSale = () => {
    const allPropertiesForSale = Property.getAllPropertiesForSale();
    return allPropertiesForSale;
}

const getAllPropertiesSold = () => {
    const allPropertiesSold = Property.getAllPropertiesSold();
    return allPropertiesSold;
}

module.exports = {
    getAllProperties,
    getAllPropertiesPreSale,
    getAllPropertiesForSale,
    getAllPropertiesSold
};