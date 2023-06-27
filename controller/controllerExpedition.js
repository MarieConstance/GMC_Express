const Expedition = require("../model/expedition");

 class ControllerExpedition{

    static save(req, res){
        try{
            const colis = "COLIS1";
            Expedition.find({})
            .then(response => {

                if (response.length == 0) req.body.reference= colis;
                else req.body.reference = 'COLIS'+(Number(response[response.length -1].reference.split('LIS')[1])+1)
                req.body.dateExpedition = new Date();
                const expedition = new Expedition({...req.body});
                expedition.save()
                .then (result => {
                    console.log('----------------------',result);
                    res.render("formulaireExp", result)
                })
                .catch(error => {
                    const messag = "une erreur s'est produite lors du traitement de la requette";
                    console.log(messag, error);
                    res.render("formulaireExp", {messag})
                })
            })
            
        }catch(error){
            console.log("requette erronnée")
        }
    }


    static recup(req, res){
        try{
            Expedition.find({})
            .then(listeExpedition =>{
                console.log(listeExpedition);
                res.render("listeExpedition", {listeExpedition});
            })
            .catch(error => {
                console.log(error);
            })
        }catch(error){
            
        }
        
    }

 }


module.exports = ControllerExpedition