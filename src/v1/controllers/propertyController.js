const propertyService = require("../services/propertyService")

const getAllProperties = async (req, res) => {
    const { year } = req.query;

    try {
        const allProperties = await propertyService.getAllProperties({year});
        res.send({status: "OK", data: allProperties})
        
    } catch (error) {
        res.send({
            status: "FAILED", 
            data: {
                error: error
            }
        })

    }
}

const getAllPropertiesPreSale = async (req, res) => {
    try {
        const allPropertiesPreSale = await propertyService.getAllPropertiesPreSale();
        res.send(allPropertiesPreSale)
    } catch (error) {
        console.log(error)
    }
}

const getAllPropertiesForSale = async (req, res) => {
    try {
        const allPropertiesForSale = await propertyService.getAllPropertiesForSale();
        res.send(allPropertiesForSale)
    } catch (error) {
        console.log(error)
    }
}

const getAllPropertiesSold = async (req, res) => {
    try {
        const allPropertiesSold = await propertyService.getAllPropertiesSold();
        res.send(allPropertiesSold)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllProperties,
    getAllPropertiesPreSale,
    getAllPropertiesForSale,
    getAllPropertiesSold
};