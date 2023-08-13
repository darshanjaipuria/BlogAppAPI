

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());
//Middleware functions in Express are functions that can intercept and process the incoming HTTP request before it reaches the route handler. They can also modify the response before sending it back to the client. Middleware functions are executed in the order they are defined.
//express.json() Middleware: This middleware is provided by the express.json() method. It parses the incoming request body if it's in JSON format and populates the req.body object with the parsed data. This allows you to access the JSON data in your route handlers.
//In the context of the express.json() middleware, when it parses the incoming JSON data, it transforms the raw JSON string into a JavaScript object. This JavaScript object is what's referred to as the "parsed data." It's organized into key-value pairs, making it accessible and manipulable in your route handlers.

const blog = require("./routes/blog")
//mount
app.use("/api/v1", blog);

const connectWithDb = require("./config/database");
connectWithDb();

//start the server
app.listen(PORT, () => {
    console.log(`App is started at Port no ${PORT}`);
})

app.get("/", (req,res) => {
    res.send(`<h1>This is my homePage baby</h1>`)
})