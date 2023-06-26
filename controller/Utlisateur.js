const User = require("../model/user")

const listeExpedition = require("../model/listeExpedition")

exports.createUser = (req, res) => {
    console.log(req);
const user = new User(req.body)

    user.save()
    .then((user) => {
        return res.status(201).json({user})
    })
    .catch((error) => {
        return res.status(400).json((error))
    })
}


exports.inscription = async (req, res)=> {

    try {
        const login = await User.findEmail
        
    } catch (error) {
        
    }
}

exports.formulaireExp = async (req, res) => {
    const tableauExpe = await listeExpedition.find({});
  
    res.render("listeExpedition", {tableauExpe });
  };