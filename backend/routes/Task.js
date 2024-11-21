const express = require('express');
const router = express.Router();
const Task = require('../models/tasks');

//get all tasks 
router.get('/',async (req,res)=>{
    try{
        const tasks = await Task.find() // Fetches all tasks from the 'tasks' collection in MongoDB
        res.status(200).json(tasks); // Respond with all tasks
    }catch(err){
        res.status(500).json({ message: err.message });
    }
})

// Add a new task
router.post('/', async (req, res) => {
    const { text, completed } = req.body;

    // Check if text is provided
    if (!text) {
        return res.status(400).json({ message: 'Text is required' });
    }

    // Create a new task with text and completed status
    const newTask = new Task({
        text,
        completed: completed || false, 
    });

    // Try to save the task
    try {
        const savedTask = await newTask.save();
        res.status(201).json(savedTask); // Respond with the created task
    } catch (err) {
        res.status(500).json({ message: err.message }); // Error response
    }
});

// Update a task by ID
router.put('/:id', async (req, res) => {
    const { id } = req.params; // Get the task ID from the URL
    const { text, completed } = req.body; // Get the updated data from the request body

    try {
        // Find and update the task by its ID
        const updatedTask = await Task.findByIdAndUpdate(id, {
            text,
            completed
        }, { new: true }); // `new: true` will return the updated document

        
        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }

        // Respond with the updated task
        res.status(200).json(updatedTask);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// Delete a task by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        // Find and delete the task by its ID
        const deletedTask = await Task.findByIdAndDelete(id);

        
        if (!deletedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }

        
        res.status(200).json({ message: 'Task deleted successfully', task: deletedTask });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});




module.exports = router;