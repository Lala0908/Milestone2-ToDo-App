const mongoose = require("mongoose")


const ToDoSchema = new mongoose.Schema ({
    todo: {
        type: String,
        required: true 
            
        },
    
})

module.exports = new mongoose.model('Todo', TodoSchema)