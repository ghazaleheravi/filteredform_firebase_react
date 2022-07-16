import React, { useState } from "react";
import { db, storage } from "../firebase-config"; 
import { collection } from "firebase/firestore";
import { addDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

function Form(props) {
  const [loader, setLoader] = useState(false);
  const employeesCollectionRef = collection(db, 'employees');
  
  const initialVal = {
    name: '',
    email: '',
    ID: '',
    status: '',
    department: '',
    accommodation: ''
  }

  const [values, setValues] = useState(initialVal);
  console.log(values);
  const createEmployee = () => {
    addDoc(employeesCollectionRef, values)
    .then(() => {
      alert('Your data has been submitted!')
      setLoader(false);
    })
  };
  
  const [fileInput, setFileInput] = useState(null); 
  
  const uploadFile = () => {
    if (fileInput === '' || null) return
    const fileRef = ref(storage, `files/${fileInput.name + v4()}`)
    uploadBytes(fileRef, fileInput).then(() => {
      alert('Files uploaded!')
    })
  }

  function handleChange(e) {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name]: value
    }); 
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoader(true);
    createEmployee();
    uploadFile();
    setValues(initialVal);
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor='name' className="nameLabel">Name</label>
      <input 
        id='name' 
        className="nameInput"
        value={values.name} 
        type="text"
        required
        name="name"
        onChange={handleChange}>
      </input>

      <label htmlFor='email' className="emailLabel">Email</label>
      <input 
        id='email' 
        className="emailInput"
        value={values.email} 
        type="email"
        required
        name="email"
        onChange={handleChange}>
      </input>

      <label htmlFor='ID' className="idLabel">ID</label>
      <input 
        id="ID" 
        className="IDInput"
        value={values.ID} 
        type="text"
        required
        name="ID"
        onChange={handleChange}>
      </input>
     
      <select 
        id='department' 
        value={values.department}
        name="department"
        onChange={handleChange} 
        className="department" 
        required>
        <option value="">Department</option>
        <option value={values.engineering} name="engineering">Engineering</option>
        <option value={values.HumanResource} name="HumanResource">Human Resource</option>
        <option value={values.Legal} name="Legal">Legal</option>
      </select>

      <select 
        id='status'
        value={values.status}
        name="status"
        onChange={handleChange} 
        className="status" 
        required>
        <option value="">Employment Status</option>
        <option value={values.Fulltime} name="Fulltime">Full time</option>
        <option value={values.Parttime} name="Parttime">Part time</option>
        <option value={values.Contract} name="Contract">Contract</option>
        <option value={values.Intern} name="Intern">Intern</option>
      </select>

      <select 
        id='selectInput' 
        value={values.accommodation}
        name="accommodation"
        onChange={handleChange} 
        className="accommodation" 
        required>
        <option value="">Accommodation Request</option>
        <option value={values.yes} name="yes">Yes</option>
        <option value={values.no} name="no">No</option>
      </select>

      <label htmlFor="uploadInput" className="uploadLabel">Attach Files</label>
      <input 
        id='uploadInput' 
        className="uploadInput"
        type="file"
        required 
        onChange={(e) => {
          setFileInput(e.target.files[0])
        }}
      >
      </input>

      <div className="cancel_save_btn">   
        <button 
          type="button"
          className="cancel_btn"
          onClick={() => {
            props.setFormView(false)
            props.setBtnVisibility(true);
          }}
        >
          Cancel
        </button>  

        <button 
          type="submit" 
          className="save_btn" 
          style={{background : loader ? 'white' : 'rgb(225, 225, 225)'}}
        >
          Save
        </button>
      </div> 
      
    </form>  
  );
}

export default Form;