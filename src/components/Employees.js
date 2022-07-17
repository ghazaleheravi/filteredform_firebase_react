import React from "react";

function Employees(props) {
  return (
    <div className="employee_container">
      <hr/>
      <ul className="employee_ul">
        <li>{props.name}</li>
        <li>{props.ID}</li>
        <li>{props.department}</li>
        <li>{props.status}</li>
        <li>{props.email}</li>
      </ul>
    </div>
  );
}

export default Employees;