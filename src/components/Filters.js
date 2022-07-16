import React, { useState } from "react";
import { data } from "../data/departmentAndStatus";
import Employees from "./Employees";

function Filters({ employees }) {
  const initialValues = {
    name: '',
    ID: '',
    department: '',
    status: '',
    email: ''
  }
  console.log('employees', employees);

  const [values, setValues] = useState(initialValues);
  const [filteredEmployees, setFilteredEmployees] = useState(null);
    

  console.log('filteredEmp ', filteredEmployees);

  function handleChange(e) {
    const {name, value} = e.target;
    console.log(name);
    setValues({
      ...values,
      [name]: value,
    });
    switch(name) {
      case 'name':
        employees.map(employee => (employee.name === value) 
          ? setFilteredEmployees(employee)
          : null
          )
        break;
      case 'ID':
        employees.map(employee => (employee.ID === value) 
          ? setFilteredEmployees(employee)
          : null
          )
        break;
      case 'department':
        employees.map(employee => (employee.department === value) 
          ? setFilteredEmployees(employee)
          : null
          )
        break;
      case 'status':
        employees.map(employee => (employee.status === value) 
          ? setFilteredEmployees(employee)
          : null
          )
        break;
      case 'email':
        employees.map(employee => (employee.email === value) 
          ? setFilteredEmployees(employee)
          : null
          )
        break;
      default:
        console.log('No filters applied!')  
    }

  }

  return (
    <div>
      <select
        id='emplyeesNames' 
        name="name"
        className="names" 
        value={values.name}
        onChange={handleChange}
      >
        <option value="">All employees</option>
        {employees.map(employee => (
          <option>{employee.name}</option>
        ))}
      </select>

      <select
        id='employeesIDS' 
        name="ID"
        className="ID"
        value={values.ID}
        onChange={handleChange} 
      >
        <option value="">Filter By ID</option>
        {employees.map(employee => (
          <option>{employee.ID}</option>
        ))}
      </select>

      <select
        id='employeesDepartments' 
        name="department"
        className="department" 
        value={values.department}
        onChange={handleChange}
      >
        <option value="">Filter By Department</option>
        {data.departments.map(dep => (
          <option>{dep}</option>
        ))}
      </select>

      <select
        id='employeesStatus' 
        name="status"
        className="status" 
        value={values.status}
        onChange={handleChange}
      >
        <option value="">Filter By Status</option>
        {data.statuses.map(stat => (
          <option>{stat}</option>
        ))}
      </select>

      <select
        id='employeesEmail' 
        name="email"
        className="email" 
        value={values.email}
        onChange={handleChange}
      >
        <option value="">Filter By Email</option>
        {employees.map(employee => (
          <option>{employee.email}</option>
        ))}
      </select>

      {filteredEmployees === null 
        ? employees.map(emp => <Employees {...emp} />)
        : <Employees {...filteredEmployees} />
      }
      
    
    </div>
  );
}

export default Filters;
