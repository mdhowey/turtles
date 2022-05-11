const express = require('express');
const app = express();
const cors = require("cors");
const controllers = require('./controllers/turtles_controller.js')

// app config 
const PORT = process.env.PORT || 4500
require('./config/db.connection')

// data - Turtles Adolescent  
const turtles = require('./seed/seed')

// middleware 
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.set('/api', controllers);

// routing 
app.get('/', (req, res) => {
  res.json({
    response: "Hello World"
  });
});

app.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT}`));