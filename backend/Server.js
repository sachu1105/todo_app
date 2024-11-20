// Load environment variables
require('dotenv').config();

const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./routes/Task')

app.use(cors());
app.use(express.json());


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true,useUnifiedTopology: true,})
    .then(() => console.log('Successfully connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Define routes
app.use('/api/tasks', router)
    


    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });