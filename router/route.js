const express = require("express");
const Router = express.Router();
const userCtrl = require('../controller/Utlisateur');
const ControllerUser = require("../controller/controllerUser");
const ControllerExpedition = require ("../controller/controllerExpedition");

Router.post("/saveUser", ControllerUser.saveUser);
Router.post("/login", ControllerUser.login);
Router.post("/expedition", ControllerExpedition.save);
Router.get("/listeExpedition", ControllerExpedition.recup);

Router.post('/inde',userCtrl.createUser)

Router.get("/", (req, res) => {
  res.render("index");
});

Router.get("/apropos", (req, res) => {
  res.render("apropos");
});

Router.get("/contact", (req, res) => {
  res.render("contact");
});

Router.get("/connexion", (req, res) => {
  res.render("connexion");
});

Router.get("/inscription", (req, res) => {
  res.render("inscription");
});


Router.get("/accueil", (req, res) => {
  res.render("accueil");
});

Router.get("/formulaireExp", (req, res) => {
  res.render("formulaireExp");
});


    


module.exports = Router;