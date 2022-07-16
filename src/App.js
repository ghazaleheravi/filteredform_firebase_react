import React, { useState, useEffect } from "react";
import Form from './components/Form';
import { db } from "./firebase-config"; 
import { collection, getDocs } from "firebase/firestore";
import Filters from "./components/Filters";

function App() {
  const [employees, setEmployees] = useState([]);
  const [formView, setFormView] = useState(false);
  const [btnVisibility, setBtnVisibility] = useState(true);
  const employeesCollectionRef = collection(db, 'employees');

  useEffect(() => {
    const getEmployees = async () => {
      const data = await getDocs(employeesCollectionRef);
      setEmployees(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
    }

    getEmployees();
  }, []);
  console.log('data: ',employees)

  function handleClick(e) {
    setFormView(true);
    setBtnVisibility(false);
  }

  return (
    <div className="App">
      <button
        className="sub_btn"
        onClick={handleClick}
        style={{visibility : btnVisibility ? "visible" : "hidden"}}
      >
        + Add Employee
      </button>
      {formView 
        ? <Form setFormView={setFormView} setBtnVisibility={setBtnVisibility} />
        : <div>
            <h1>Employees</h1>
            <Filters employees={employees} />
            <hr/>
          </div>
      }
    </div>
  );
}

export default App;
