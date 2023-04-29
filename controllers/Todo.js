import Todo from ('../models/todo')
const router = require("express").Router


app.delete('/todo/delete/:id', async (req, res) => {
    const result = await Todo.findByIdAndDelete(req.params.id);

    res.json(result);
})


module.exports = router;
