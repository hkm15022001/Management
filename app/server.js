require('dotenv').config()
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const route = require("./routes/index");
const routeAPI = require("./routes/api");
const db = require("./models")
const fileUpdload = require("express-fileupload")
// var corsOptions = {
//   origin: "http://localhost:8081"
// };

// app.use(cors(corsOptions));
// enable cors
// app.use(cors());
// app.options('*', cors());

// parse requests of content-type - application/json
app.use(express.json());

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'));


// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//use express-uploadfiles
app.use(fileUpdload());

//simple route
app.get("/", (req, res) => {
  res.render('home.ejs');
});
routeAPI(app);
route(app);


// set port, listen for requests and connect to db
(async () => {
  try {
    await db.connection();
    const PORT = process.env.PORT || 8080;
    const HOST_NAME = process.env.HOST_NAME || "localhost";
    app.listen(PORT, HOST_NAME,() => {
      console.log(`Server is running on port ${PORT}.`);
    });
  } catch (error) {
    console.log(">> Error to db: ",error)};
})();

