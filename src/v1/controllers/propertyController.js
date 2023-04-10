const propertyService = require("../services/propertyService")

const getAllProperties = (req, res) => {
    const allProperties = propertyService.getAllProperties();

    res.send("Get all properties")
}

const getAllPropertiesPreSale = (req, res) => {
    const allPropertiesPreSale = propertyService.getAllPropertiesPreSale();
    res.send("Get all the properties in pre-sale")
}

const getAllPropertiesForSale = (req, res) => {
    const allPropertiesForSale = propertyService.getAllPropertiesForSale();
    res.send("Get all the properties for sale")
}

const getAllPropertiesSold = (req, res) => {
    const allPropertiesSold = propertyService.getAllPropertiesSold();
    res.send("Get all the sold properties")
}

module.exports = {
    getAllProperties,
    getAllPropertiesPreSale,
    getAllPropertiesForSale,
    getAllPropertiesSold
};