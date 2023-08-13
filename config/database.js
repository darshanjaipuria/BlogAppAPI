const mongoose = require("mongoose");

require("dotenv").config();

const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //useUnifiedTopology: true: This option enables the new MongoDB driver topology engine. The topology engine is responsible for managing the underlying connections to the MongoDB server. By setting useUnifiedTopology to true, you're telling the driver to use the new engine, which provides better management of connections and improved performance. It replaces the old monitoring engine with a more efficient one.
        
        //useNewUrlParser: true: This option is used to enable the new MongoDB connection string parser. The MongoDB connection string is a URL-like string that contains information about the database server, authentication credentials, and other options. The useNewUrlParser option ensures that the driver uses the new parser instead of the old one. The new parser handles various edge cases and options more accurately.
    })
    .then(console.log("DB Connected Successfully 👍"))
    .catch( (error) => {
        console.log("DB Facing Connection Issues");
        console.log(error);
        process.exit(1);
    } ) 
};

module.exports = connectWithDb;