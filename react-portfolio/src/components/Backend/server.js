const express = require("express");
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser')


const options = {
  useNewUrlParser: true, 
  useUnifiedTopology: true
  }
  
  mongoose.connect(process.env.MONGO_URI, options)
  
  const connectionDB = mongoose.connection
  
  connectionDB.once('open', () => {
      console.log('DB is CONNECTED...from SERVER.js....')
  })

const userRoutes = require('./routes/user.routes')

app.use(bodyParser())
app.use(cors())
app.use('/user', userRoutes)


// let loginUrl = `http://localhost:3000/`
// app.route(loginUrl).get(function(req, res) {
//   console.log('// get', req.params)
//   res.json('success!');
// })
app.listen(process.env.PORT || 8000, function () {
  console.log("Your app is listening on port " +process.env.PORT);
});


module.exports = router;
