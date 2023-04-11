require('dotenv').config();
const express = require("express"); 
const v1PropertyRouter = require("./src/v1/routes/propertyRoutes");

const app = express(); 
const PORT = process.env.PORT; 

app.use("/api/v1", v1PropertyRouter);

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});
