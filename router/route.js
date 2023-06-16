const express = require("express");
const router = express.Router();
const userCtrl = require('../controller/Utlisateur')

router.post('/inde',userCtrl.createUser)

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/apropos", (req, res) => {
  res.render("apropos");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.get("/connexion", (req, res) => {
  res.render("connexion");
});

router.get("/inscription", (req, res) => {
  res.render("inscription");
});

router.get("/accueil", (req, res) => {
  res.render("accueil");
});
    


module.exports = router;