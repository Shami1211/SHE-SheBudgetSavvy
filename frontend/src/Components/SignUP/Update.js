import React, { useEffect, useState } from 'react';
import './SignUp.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BrowserRouter as Router,Routes} from 'react-router-dom';
import axios from 'axios';

const Update = () => {

  let navigate=useNavigate()

  const { id } = useParams();


  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
  });
  

  //Age
/*
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'age' && !Number.isNaN(value) && value >= 0) {
      setFormData({ ...formData, [name]: value });
    } else if (name !== 'age') {
      setFormData({ ...formData, [name]: value });
    }
  }; */

  const{name,username,email}=user

  const onInputChange = (e)=> {

    setUser({...user,[e.target.name]: e.target.value})

  }

  useEffect(() =>{
    loadUsers()
  }, []  );

  const onSubmit = async (e) => {
    e.preventDefault(); // Fix the typo here
  
    try {
        await axios.put(`http://localhost:8080/user/${id}`, user);
      navigate("/profile");
    } catch (error) {
      console.error("Error submitting data:", error);
      // Handle error as needed (e.g., show an error message)
    }
  }

  const loadUsers = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/user/${id}`);
      console.log("User Data:", result.data);
      setUser(result.data);
    } catch (error) {
      console.error("Error loading user data:", error);
    }
  };
  
  
  return (
    <div>
      <Header />
      <div className="signup-box">
        <form onSubmit={(e)=>onSubmit(e)}>
          <h2>Update User Details</h2>
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={name}
            onChange={(e) => onInputChange(e)}
          />

          <input
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={(e) => onInputChange(e)}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => onInputChange(e)}
          />
          <button type="submit" > Sign Up </button>
        </form>
      </div>
      {/* Navigation buttons after the form */}
      <div className="navigation-buttons">
        <Link to="/back">Back</Link>
        <Link to="/">Home</Link>
      </div>
      <Footer />
    </div>
  );
};

export default Update;