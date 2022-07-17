import React, { useState } from "react";
import { data } from "../pureFunctions/departmentAndStatus";
import Employees from "./Employees";
import { filteredEmployees } from "../pureFunctions/filter";

function Filters({ employees }) {
  const initialValues = {
    name: '',
    ID: '',
    department: '',
    status: '',
    email: ''
  }

  const [values, setValues] = useState(initialValues);
  const [filteredEmployeesState, setFilteredEmployeesState] = useState(null);

  function handleChange(e) {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    switch(name) {
      case 'name':
        setFilteredEmployeesState(filteredEmployees(employees, value, 'name'));
        break;
      case 'ID':
        setFilteredEmployeesState(filteredEmployees(employees, value, 'ID'));
        break;
      case 'department':
        setFilteredEmployeesState(filteredEmployees(employees, value, 'department'));
        break;
      case 'status':
        setFilteredEmployeesState(filteredEmployees(employees, value, 'status'));
        break;
      case 'email':
        setFilteredEmployeesState(filteredEmployees(employees, value, 'email'));
        break;
      default:
        setFilteredEmployeesState(null);
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
        {employees.map((employee, idx) => (
          <option key={idx}>{employee.name}</option>
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
        {employees.map((employee,idx) => (
          <option key={idx}>{employee.ID}</option>
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
        {data.departments.map((dep,idx) => (
          <option key={idx}>{dep}</option>
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
        {data.statuses.map((stat,idx) => (
          <option key={idx}>{stat}</option>
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
        {employees.map((employee,idx) => (
          <option key={idx}>{employee.email}</option>
        ))}
      </select>

      <button 
        className="clear_btn"
        onClick={(e) => {
          setFilteredEmployeesState(null);
          setValues(initialValues);
        }}
      >
        Clear Filters
      </button>

      <ul className="title_ul">
        <li>Name</li>
        <li>ID</li>
        <li>Department</li>
        <li>Status</li>
        <li>Email</li>
      </ul>  
      
      {filteredEmployeesState === null
        ? employees.map(emp => <Employees {...emp} key={emp.id}/>)
        : filteredEmployeesState.map(emp => <Employees {...emp} key={emp.id}/>)
      }
    </div>
  );
}

export default Filters;
