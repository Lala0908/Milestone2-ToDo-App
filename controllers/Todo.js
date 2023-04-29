const router = require('express').Router();
const Todo = require('../models/Todo');

// find all todos what we need 
router.get('/', async (req, res) => {
    const todos = await Todo.find({});
    res.json(todos);
});

router.post('/', async (req, res) => {
    const todo = await Todo.create({ 
        text:req.body.text, 
        complete:req.body.complete
    })
    res.json(todo)
    res.sendStatus(200)
});

//update, auto complete
router.put('/complete/:id', async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    todo.complete = !todo.complete;
    todo.save();
    res.json(todo);
})

router.delete('/:id', async (req, res) => {
    const result = await Todo.findByIdAndDelete(req.params.id);
    res.json(result);
})


module.exports = router;

// creates new todo 
// app.get('/todo/new', (req, res) => { //post
// const todo = new Todo({
//     text: req.body.text});

//     todo.save();

//     res.json(todo);
// });