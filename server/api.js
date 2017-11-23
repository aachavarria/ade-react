const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');

var db = mongojs(process.env.MONGODB_URI,['personas'])

// GET ALL Personas
router.get('/personas', (req, res, next) => {
  db.personas.find(function(err, personas){
    if(err){
      res.send(err);
    }
    res.json(personas);
  });
});

// Save Persona
router.post('/persona', (req, res, next) => {
  var persona = req.body;
  if(!persona.name && !(persona.email)){
    res.status(400);
    res.json({
      "error": "Bad Data"
    });
  }else {
    db.personas.save(persona, function(err, persona) {
      if(err){
        res.send(err);
      }
      res.json(persona);
    });
  }
});

// Update Persona
router.put('/persona/:id', (req, res, next) => {
  var persona = req.body;
  var updPersona = persona;
  delete updPersona._id;
  // updPersona = {
  //   name : persona.name,
  //   email : persona.email
  // }

  if(!updPersona){
    res.status(400);
    res.json({
      "error": "Bad Data"
    });
  }else {
    db.personas.update({ _id: mongojs.ObjectId(req.params.id)}, updPersona, {}, function(err, task){
      if(err){
        res.send(err);
      }
      res.json(persona);
    });
  }
});

module.exports = router;
