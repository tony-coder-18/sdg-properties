const dbConfig = require("../../config/db.config.js");

const { Sequelize, DataTypes } = require('sequelize');

const DATABASE = dbConfig.DB;
const USERNAME = dbConfig.USER;
const PASSWORD = dbConfig.PASSWORD;
const HOST = dbConfig.DATABASE_HOST;
const DATABASE_PORT = dbConfig.DATABASE_PORT;

const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
    host: HOST,
    port: DATABASE_PORT,
    dialect: 'postgres'
});

const Property = sequelize.define('property', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
    },
    city: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.BIGINT
    },
    description: {
        type: DataTypes.STRING
    },
    year: {
        type: DataTypes.BIGINT
    },
}, {
    timestamps: false,
    freezeTableName: true
});

const Status = sequelize.define('status', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
    },
    label: {
        type: DataTypes.STRING
    }
}, {
    // Other model options go here
    timestamps: false,
    freezeTableName: true
});

const StatusHistory = sequelize.define('status_history', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    property_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Property,
            key: 'id'
        }
    },
    update_date: {
        type: DataTypes.DATE
    },
    status_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Status,
            key: 'id'
        }
    },
}, {
    timestamps: false,
    freezeTableName: true
});


Status.belongsToMany(Property, {
    through: StatusHistory,
    foreignKey: 'status_id',
    otherKey: 'property_id',
});

Property.belongsToMany(Status, {
    through: StatusHistory,
    foreignKey: 'property_id',
    otherKey: 'status_id',
});

StatusHistory.belongsTo(Property, { foreignKey: 'property_id' });
StatusHistory.belongsTo(Status, { foreignKey: 'status_id' });

// Sync the "property" table with the database
sequelize.sync().then(() => {
    console.log('Table "property" synced successfully.');
}).catch((err) => {
    console.error('Unable to sync table "property":', err);
});

const getAllProperties = async (filterParams) => {
    try {
        const properties = await Property.findAll({
            attributes: ['address', 'city', 'price', 'description', 'year'],
            include: [
                {
                    model: Status,
                    attributes: ['name', 'label']
                }
            ],
            raw: true,
            nest: true
        });

        // To get the properties with the last status of each one
        propertiesReversed = properties.reverse();

        function removeDuplicates(myArr, prop) {
            return myArr.filter((obj, pos, arr) => {
                return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos
            })
        }

        propertiesLastStatus = removeDuplicates(propertiesReversed, 'address').reverse();

        if (filterParams) {
            if (filterParams.year) {
                propertiesLastStatus = propertiesLastStatus.filter((p) => {
                    const constructionDate = p.year;
                    return constructionDate.toString() === filterParams.year;
                })
            }
            if (filterParams.city) {
                propertiesLastStatus = propertiesLastStatus.filter((p) => {
                    const city = p.city;
                    return city.toLowerCase().includes(filterParams.city.toLowerCase());
                })
            }
            if (filterParams.state) {
                propertiesLastStatus = propertiesLastStatus.filter((p) => {
                    const state = p.statuses.name.replace("_", "-");
                    return state.toLowerCase().includes(filterParams.state.toLowerCase());
                })
            }
        }

        // SHow only the name of status and remove the "year" field
        propertiesLastStatus = propertiesLastStatus.map((p) => {
            delete p.year;
            return ({ ...p, statuses: p.statuses.label })
        })

        return propertiesLastStatus;
    } catch (error) {
        throw error;
    }


};

const getAllPropertiesPreSale = async (filterParams) => {
    try {
        const allProperties = await getAllProperties(filterParams);
        const propertiesPreSale = allProperties.filter((p) => p.statuses === "Pre Venta");

        return propertiesPreSale;
    } catch (error) {
        throw error
    }
}

const getAllPropertiesForSale = async (filterParams) => {
    try {
        const allProperties = await getAllProperties(filterParams);
        const propertiesForSale = allProperties.filter((p) => p.statuses === "En Venta");

        return propertiesForSale;
    } catch (error) {
        throw error
    }
}

const getAllPropertiesSold = async (filterParams) => {
    try {
        const allProperties = await getAllProperties(filterParams);
        const propertiesSold = allProperties.filter((p) => p.statuses === "Vendido");

        return propertiesSold;
    } catch (error) {
        throw error
    }
}

module.exports = {
    getAllPropertiesPreSale,
    getAllPropertiesForSale,
    getAllPropertiesSold
}