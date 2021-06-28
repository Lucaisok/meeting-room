const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public"))); //then change "public" to "build"

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html")); //then change "public" to "build"
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});