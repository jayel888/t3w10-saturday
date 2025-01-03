const express = require("express")

const router = express.Router();

// GET localhost:3300/users
router.get("/", (req, res) => {
    // Databse query to get the list of users

    // Attach the query result in the response body
    res.json({
        data: [
            "Bob",
            "Alice",
            "Osman",
            "Luke",
            "Venita"
        ]
    })
});

// POST localhost:3300/users/signup
router.post("/signup", (req, res) => {
    // receivedUserData that receives the data from the user request body
    let receivedUserData = req.body;

    // Get the hashed password from the front-end and encrypt it
    receivedUserData.password = "EncryptedPassword"

    // Store the data to the database using a query
    let databaseResult = {...receivedUserData};

    // Send the newly created user data as a response for acknowledgement
    res.json(databaseResult);
})

// GET localhost:3300/users/:id
router.get("/:userId", async (req, res) => {
    let targetUserId = req.params.userId;

    // Database query executes to fetch the specific user based on userId

    // Send the response back
    res.json({
        result: {
            id: targetUserId,
            username: "Username from DB"
        }
    });
});

// POST localhost:3300/users/login
router.post("/login", async (req, res, next) => {
    let authHeaderData = req.headers["authorization"]

    console.log(authHeaderData);

    if (authHeaderData != "Some header value") {
        // throw new Error("Not a valid login data");
        return next(new Error("Not a valid login data"))
    }

    res.json({
        authHeaderData
    });
});

module.exports = router;