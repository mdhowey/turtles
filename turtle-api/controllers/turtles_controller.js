const express = require('express');
const router = express.Router();
const turtles = require('../seed/seed');
const Turtle = require('../models/turtles');

const brandNewTurtle = {
  name: "Mandyce Catthews", role: "software engineer"
}

// index - get - /turtles 
router.get('/turtles', async (req, res) => {
  const data = await Turtle.find({});
  res.json(data);
  console.log(data);
});

// show - get - /turtles/:index 
router.get('/turtles/:_id', async (req, res) => {
  const data = await Turtle.find(req.params._id, () => {
    console.log('This hit!');
  });
  console.log(data);
});

// test Create 
router.post('/turtles/new', async (req, res) => {
  try {
    const data = await Turtle.create(brandNewTurtle);
    res.json(data);
  } catch(error) {
    console.log(error);
  }
});

// router.get("/seed", async (req, res) => {
//   const data = await Turtle.create(turtles);
//   console.log(data); 
// });

// create - POST - /turtles
router.post('/turtles', (req, res) => {

});


router.put('/turtles/:index', (req, res) => {
  
});

router.delete('/turtles/:index', (req, res) => {
  
});

module.exports = router;