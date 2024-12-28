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

module.exports = router;