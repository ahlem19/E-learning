const express = require('express');
const router = express.Router();



const user=new (require('./class/user').user)();
const instructor=new (require('./class/instructor').instructor)();



/* GET api listing. */
router.all('*', (req, res) => {
  console.log("***** req.query : " + req.query +' req.url '+req.url); 
  
  var requestObject = req.url.split('/');
  console.log("***** requestObject 0: " + requestObject[0] +' 1: '+requestObject[1] +' 2: '+requestObject[2] +' 3: '+requestObject[3]); 
  var Objet = eval(requestObject[1]);
  var fonction = requestObject[2];
  var attributes = requestObject[3];



  if (typeof Objet != 'undefined'){
  console.log("***** Object defined ***** "+typeof Objet); 
     	Objet[fonction](req, res, attributes);
  }

});


module.exports = router;
