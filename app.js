const dbConfig = require("./config/db.config.js");

const express = require("express"); 
const v1PropertyRouter = require("./src/v1/routes/propertyRoutes");

const app = express(); 
const PORT = dbConfig.PORT; 

app.use("/api/v1", v1PropertyRouter);

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});
