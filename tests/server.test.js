//  Importing the code that we want to test

const { app } = require("../src/server.js");

// Importing a testing helper function from supertest
const request = require("supertest")

//  Syntax: describe(desc, callback test function)
describe("Root route", () => {
    // Syntax: test/it (acknowledgement msg, callback)
    test("Server returns 'Hello World!' message", async () => {
        //  Make a request to the '/' route
        // wait for response and store it
        const response = await request(app).get("/");
        
        // check the body of the response to see if it matches the 'Hello World!' string
        expect(response.body.message).toBe("Hello World!");
        expect(response.statusCode).toBe(200);
    });

    test("Server returns a response without Auth header", async () => {
        const response = await request(app).get("/");
        expect(response.headers["Authorisation"]).toBeFalsy();
    })
});