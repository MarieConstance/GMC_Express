const express = require ('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routeUser = require('./router/route')
const route=require('./router/route')


mongoose.connect('mongodb+srv://goamarieconstance:Constance23.@marie.5ivejvu.mongodb.net/test',
{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=> {
    console.log("Connexion success !");
}).catch((error) =>{
    console.log(error);
})

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.json())
app.use('/api/user', routeUser);

app.use("/",route)



module.exports = app;


// mongodb+srv://goamarieconstance:Constance23.@marie.5ivejvu.mongodb.net/