const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://goamarieconstance:Constance23.@marie.5ivejvu.mongodb.net/test',
{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=> {
    console.log("Connexion success !");
}).catch((error) =>{
    console.log(error); 
})

module.exports=mongoose