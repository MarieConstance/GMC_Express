const mongoose = require('mongoose')

const expeditionSchema = mongoose.Schema(
    {
       reference:{
            type: String,
            required: [true]
        },
        numero:{
            type: String,
            required: [true, "Please enter a name"]
        },

        destinataire: {
            type: String,
            required: true,
        },
        expediteur: {
            type: String,
            required: true,
        },
          adressLivraison: {
            type: String,
            required: true,
        },
       dateExpedition: {
            type: Date,
            required: true,
        },
        poids: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: false,
        }
          
    },
    {
        timestamps: true
    }
)

const Expedition = mongoose.model("expedition", expeditionSchema); 
module.exports = Expedition;