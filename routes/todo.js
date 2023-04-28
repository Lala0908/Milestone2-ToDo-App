const router = require("express").Router();

//routes

router.get('/', (req, res) => {
    // connect to DB and fetch all TODOs

    // return list/array of todos in send() response

    res.send(
        "Welcome to ToDo App!"
    )
});

router.post('/', (req, res) => {
    // use the req - info about the todo

    // connevt to your DB to save the data from req

    /**
     * response = DB.save({data to save here...})
     * res.send(response)
     * 
     */


    res.send(
        "Welcome to ToDo App!"
    )
});

// router.get('/logout', logout);
// router.get("/me", getme);
// router.get ("/updatedetails", updateDetails);
// router.get("/updatepassword", updatePassword);







module.exports = router;