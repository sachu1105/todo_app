const mongoose = require('mongoose');


//Defining database schema
const taskSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
      },
      completed: {
        type: Boolean,
        default: false
      }
})

// Define the model for the tasks collection
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;