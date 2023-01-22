const express = require('express')
const bodyparser = require('body-parser')
const dotenv = require("dotenv");
const morgan = require('morgan');



// const connectDB = require("./server/database/connection")
dotenv.config({ path: ".env" });
const app = express();
// connectDB();
app.use(morgan('tiny'))
app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use("/", require("./server/routes/routes"))


app.listen(3000, (req, res) => {
    console.log('app running on http://localhost:3000');
})
