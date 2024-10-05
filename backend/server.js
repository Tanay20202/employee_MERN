// server/index.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Employee model
const Employee = require('./models/employeeModel.js');

// GET all employees
app.get('/api/employees', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching employees' });
    }
});

// POST new employee
app.post('/api/employees', async (req, res) => {
    const { name, email, position, salary } = req.body;
    try {
        const newEmployee = new Employee({ name, email, position, salary });
        await newEmployee.save();
        res.status(201).json(newEmployee);
    } catch (error) {
        res.status(500).json({ message: 'Error creating employee' });
    }
});

// Connect to MongoDB and start server
const PORT = process.env.PORT || 5000;
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error));
