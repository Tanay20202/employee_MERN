const Employee = require('../models/employeeModel');

// Get all employees
const getEmployees = async (req, res) => {
   const employees = await Employee.find();
   res.json(employees);
};

// Create new employee
const createEmployee = async (req, res) => {
   const { name, email, position, salary } = req.body;

   const employee = new Employee({
      name,
      email,
      position,
      salary,
   });

   const createdEmployee = await employee.save();
   res.status(201).json(createdEmployee);
};

// Update employee
const updateEmployee = async (req, res) => {
   const employee = await Employee.findById(req.params.id);

   if (employee) {
      employee.name = req.body.name || employee.name;
      employee.position = req.body.position || employee.position;
      employee.salary = req.body.salary || employee.salary;

      const updatedEmployee = await employee.save();
      res.json(updatedEmployee);
   } else {
      res.status(404).json({ message: 'Employee not found' });
   }
};

// Delete employee
const deleteEmployee = async (req, res) => {
   const employee = await Employee.findById(req.params.id);

   if (employee) {
      await employee.remove();
      res.json({ message: 'Employee removed' });
   } else {
      res.status(404).json({ message: 'Employee not found' });
   }
};

module.exports = { getEmployees, createEmployee, updateEmployee, deleteEmployee };
