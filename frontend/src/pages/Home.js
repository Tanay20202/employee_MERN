import React, { useState, useEffect } from 'react';
import EmployeeList from '../components/EmployeeList';
import EmployeeForm from '../components/EmployeeForm';
import axios from 'axios';

const Home = () => {
   const [employees, setEmployees] = useState([]);

   // Fetch all employees from the backend
   const fetchEmployees = async () => {
      try {
          const { data } = await axios.get('/api/employees');  // Check this route
          setEmployees(data);
      } catch (error) {
          console.error('Error fetching employees:', error);
      }
   };

   useEffect(() => {
      fetchEmployees();
   }, []);

   return (
      <div>
         <h1>Employee Management System</h1>
         <EmployeeForm fetchEmployees={fetchEmployees} />
         <EmployeeList employees={employees} />
      </div>
   );
};

export default Home;
