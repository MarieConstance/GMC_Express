const express=require('express')
const http = require ('http');
const app = express()
let bodyParser = require("body-parser");
// const server = http.createServer(app);
const dbconnexion=require('./dbconnexion');
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
const router=require('./router/route');

app.use('/', router)

app.listen(3000, ()=> {
console.log("server is runnig at localhost:3000");

})



