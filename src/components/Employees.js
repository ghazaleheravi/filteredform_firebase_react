import React from "react";

function Employees(props) {
  console.log('props', props);
  return (
    <div className="employee_container">
      <ul className="employee_ul">
        <li>{props.name}</li>
        <li>{props.email}</li>
      </ul>
    </div>
  );
}

export default Employees;