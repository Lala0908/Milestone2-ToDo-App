const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const todoRoutes = require('./controllers/Todo')

const app = express();
app.use(express.json())

//routes
//app.use('/todos', todoRoutes)
app.use('/todo', todoRoutes)


//db connection
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.error(err));

const PORT = process.env.PORT;

app.listen(PORT, console.log(`listening on port ${PORT}`));
