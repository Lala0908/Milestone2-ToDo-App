const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

//Routes

app.use(require("./routes/index"))

const PORT = process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`))