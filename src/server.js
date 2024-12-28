// Here, we configure the application server

// Reason for separation:
// Don't often need to start the server
// Can imnport the app without worrying about starting the server

// Import express
const express = require("express");

// Make an instgance of the express server
const app = express();

// Start defining routes: instance.verb(url, middleware/callback)
// GET localhost:3300/
app.get("/", (req, res) => {
    res.json({
        message: "Hello World!"
    })
});

const UserRoute = require("./routes/users.js")
app.use("/users", UserRoute);

module.exports = {
    app
}