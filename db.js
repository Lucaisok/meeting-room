const spicedPg = require("spiced-pg");
var db = spicedPg(
    process.env.DATABSE_URL ||
        "postgres:postgres:postgres@localhost:5432/meetingroom"
);
