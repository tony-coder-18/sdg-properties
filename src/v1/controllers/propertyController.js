const propertyService = require("../services/propertyService")

const getAllPropertiesPreSale = async (req, res) => {
    const {year, city} = req.query;

    try {
        const allPropertiesPreSale = await propertyService.getAllPropertiesPreSale({year, city});
        res.send({
            status: "OK",
            data: allPropertiesPreSale
        })
    } catch (error) {
        console.log(error);
        res.send({
            status: "FAILED",
            data: {
                error: error
            }
        })
    }
}

const getAllPropertiesForSale = async (req, res) => {
    const {year, city} = req.query;

    try {
        const allPropertiesForSale = await propertyService.getAllPropertiesForSale({year, city});
        res.send({
            status: "OK",
            data: allPropertiesForSale
        });
    } catch (error) {
        res.send({
            status: "FAILED",
            data: {
                error: error
            }
        })
    }
}

const getAllPropertiesSold = async (req, res) => {
    const {year, city} = req.query;

    try {
        const allPropertiesSold = await propertyService.getAllPropertiesSold({year, city});
        res.send({
            status: "OK",
            data: allPropertiesSold
        })
    } catch (error) {
        res.send({
            status: "FAILED",
            data: {
                error: error
            }
        })
    }
}

module.exports = {
    getAllPropertiesPreSale,
    getAllPropertiesForSale,
    getAllPropertiesSold
};