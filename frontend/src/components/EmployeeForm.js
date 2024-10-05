import React, { useState } from 'react';
import axios from 'axios';

const EmployeeForm = ({ fetchEmployees }) => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [position, setPosition] = useState('');
   const [salary, setSalary] = useState('');

   const handleSubmit = async (e) => {
      e.preventDefault();
      const newEmployee = { name, email, position, salary };
  
      try {
          await axios.post('/api/employees', newEmployee);  // Check this route
          fetchEmployees();
      } catch (error) {
          console.error('Error adding employee:', error);
      }
  };

   return (
      <form onSubmit={handleSubmit}>
         <h3>Add New Employee</h3>
         <div>
            <input
               type="text"
               placeholder="Name"
               value={name}
               onChange={(e) => setName(e.target.value)}
               required
            />
         </div>
         <div>
            <input
               type="email"
               placeholder="Email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               required
            />
         </div>
         <div>
            <input
               type="text"
               placeholder="Position"
               value={position}
               onChange={(e) => setPosition(e.target.value)}
               required
            />
         </div>
         <div>
            <input
               type="number"
               placeholder="Salary"
               value={salary}
               onChange={(e) => setSalary(e.target.value)}
               required
            />
         </div>
         <button type="submit">Add Employee</button>
      </form>
   );
};

export default EmployeeForm;
