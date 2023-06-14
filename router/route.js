const express = require("express");
const router = express.Router();
const userCtrl = require('../controller/Utlisateur')

router.post('/inde',userCtrl.createUser)

router.get("/", (req, res) => {
  res.render("index");
});
    


module.exports = router;