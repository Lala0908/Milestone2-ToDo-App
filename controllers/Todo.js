const router = require('express').Router();
import Todo from ('../models/todo');

// find all todos what we need 
app.get('/todos', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

// creates new todo 
// app.get('/todo/new', (req, res) => { //post
// const todo = new Todo({
//     text: req.body.text});

//     todo.save();

//     res.json(todo);
// });


//update, auto complete
app.put('/todo/complete/id', async (req, res) => {

    const todo = await Todo.findById(req.params.id);

    todo.complete = !todo.complete;

    todo.save();

    res.json(todo);
})

app.delete('/todo/delete/:id', async (req, res) => {
    const result = await Todo.findByIdAndDelete(req.params.id);

    res.json(result);
})


module.exports = router;
