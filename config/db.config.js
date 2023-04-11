require('dotenv').config();

module.exports = {
    PORT: process.env.PORT,
    DATABASE_PORT: process.env.DATABASE_PORT,
    DATABASE_HOST: process.env.DATABASE_HOST,
    USER: process.env.DATABASE_USERNAME,
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DATABASE,
    dialect: 'postgres',
};