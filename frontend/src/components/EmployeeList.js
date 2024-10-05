import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeList = () => {
   const [employees, setEmployees] = useState([]);

   useEffect(() => {
      const fetchEmployees = async () => {
         const { data } = await axios.get('/api/employees');
         setEmployees(data);
      };

      fetchEmployees();
   }, []);

   return (
      <div>
         <h2>Employee List</h2>
         <ul>
            {employees.map(employee => (
               <li key={employee._id}>
                  {employee.name} - {employee.position}
               </li>
            ))}
         </ul>
      </div>
   );
};

export default EmployeeList;
