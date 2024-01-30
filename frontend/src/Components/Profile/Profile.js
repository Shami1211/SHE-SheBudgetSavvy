import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Profile.css'; 
import { Link } from 'react-router-dom';
import axios from "axios";

const Profile = () => {

 const [users,serUsers]=useState([])

 useEffect(()=>{
    loadUsers();
 }, [])

 const loadUsers=async()=>{
    const result = await axios.get("http://localhost:8080/users")
     serUsers(result.data);
 }


  return (
    <div>
      <Header />
      <div className="profile-box">
        <h2>User Profile</h2>
        <table>
            
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
          {
                users.map((user,index)=>(

              <tr>
            <th key={index}>{index+1}</th>
              
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              
             
            </tr>
                ))
            }
            
          </tbody>
        </table>
      </div>
      {/* Navigation buttons after the table */}
      <div className="navigation-buttons">
        <Link to="/back">Back</Link>
        <Link to="/">Home</Link>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
