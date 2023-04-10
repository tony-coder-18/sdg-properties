const getAllProperties = (req, res) => {
    res.send("Get all properties")
}

const getAllPropertiesPreSale = (req, res) => {
    res.send("Get all the properties in pre-sale")
}

const getAllPropertiesForSale = (req, res) => {
    res.send("Get all the properties for sale")
}

const getAllPropertiesSold = (req, res) => {
    res.send("Get all the sold properties")
}

module.exports = {
    getAllProperties,
    getAllPropertiesPreSale,
    getAllPropertiesForSale,
    getAllPropertiesSold
};