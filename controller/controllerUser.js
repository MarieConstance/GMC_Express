const User = require("../model/user");

 class controllerUser{

    static saveUser(req, res){
        try{
            User.findOne({email:req.body.email})
            .then(request =>{
                if(request){
                    const msg = "Ce compte est deja utilisé !!";
                    res.render("inscription", {msg})
                }
                else{
                    let user = new User({...req.body});
                    user.save()
                    .then(newUser =>{
                        res.render("connexion", {newUser})
                    })
                    .catch(error =>{
                        console.log(error);
                        res.render("inscription", {msg:"Une erreur est survenue lors de l'enregistrement"})
                    })

                }
            })
        }catch(error){
            console.log("requette erronnée")
        }
    }


    static login(req, res){
        try{
            User.findOne({email:req.body.email, password: req.body.password})
            .then(request =>{
                if(request){
                    
                    res.render("accueil")
                }
                else{
                   res.render("connexion")

                }
            })
        }catch(error){
            console.log("requette erronnée")
        }
    }
 }


module.exports = controllerUser