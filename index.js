const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const Todo = require('./models/Todo');

const app = express();


//routes



//db connection
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URI, { userNewUrlParser: true, userUnifiedTopology: true })
    .then(() => console.log ('DB connected'))
    .catch(err => console.error (err));

   

 
    
  

const PORT = process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`))