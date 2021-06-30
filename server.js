const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8080;
// const csurf = require("csurf");
// const db = require("./db");
// const { hash, compare } = require("./bc");
// const cookieSession = require("cookie-session");
// const cookieParser = require("cookie-parser");
// const compression = require("compression");
// const session = require("express-session");
// const bodyParser = require("body-parser");

// let secret;

// if (process.env.DATABASE_URL) {
//     secret = process.env;
// } else {
//     secret = require("./secrets.json");
// }

// app.use(
//     cookieSession({
//         secret: secret.secret,
//         maxAge: 1000 * 60 * 60 * 24 * 14,
//     })
// );

app.use(express.json());

// app.use(cookieParser());

// app.use(express.urlencoded({ extended: true }));

// app.set("trust proxy", 1); // trust first proxy
// app.use(
//     session({
//         secret: secret.secret,
//         resave: false,
//         saveUninitialized: true,
//         cookie: { secure: true },
//     })
// );

// app.use(csurf());

// app.use(function (req, res, next) {
//     res.cookie("mytoken", req.csrfToken());
//     next();
// });

// app.use(express.json());

// app.use(compression());

app.use(express.static(path.join(__dirname, "build"))); //then change "public" to "build"

// app.post("/register", (req, res) => {
//     console.log("req.body: ", req.body);
// });

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html")); //then change "public" to "build"
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});
