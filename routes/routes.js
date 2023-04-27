const router = require("express").Router()

//routes

router.get('/', (req, res) => {
    res.send({
        message: "Welcome to ToDo App!"
    })
})






module.exports = router;