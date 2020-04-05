import React, { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './User.css'

const User = (props) => {
   const [users, setUsers] = useState([0,15]);
   useEffect(()=> {
    fetch('https://www.json-generator.com/api/json/get/ceipaPDcVu?indent=2')
    .then(response => response.json())
    .then(data => setUsers(data));
   },[])
   const [added,setAdded] = useState([]);
   const handleAddUser = (user) => {
   const newAdd = [...added, user];
   setAdded(newAdd);
}
   const totalSalary = added.reduce((totalSalary, add) => totalSalary + add.employee_salary, 0);    
  console.log(users)
    return (
        <div>          
          <div className="container">
            {
              users.map(user =>
                <div className="single-user">
                    <div className="img-area">
                        <img src={user.profile_image} alt=""/>
                    </div>
                    <div className="info-area">
                    <h2>Name: {user.employee_name}</h2>
                    <p>Age: {user.employee_age}</p>
                    <p>Company Name: {user.employee_company}</p>
                    <p>Annual Salary: ${user.employee_salary}</p>
                    <button onClick={()=>handleAddUser(user)}><span><FontAwesomeIcon icon={faUserPlus} /></span> Add User</button>
                    </div>
                </div>
              )} 
              </div>
              <div className="added-user">
                <h3>Added User Summery</h3>
                <p>Added User: {added.length} </p>
                <p>Total Annual Salary: ${totalSalary}.00 </p>
            </div>
        </div>
    );
};

export default User;