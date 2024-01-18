import React, { useState } from 'react';
import './SignUp.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    nickName: '',
    age: '',
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'age' && !Number.isNaN(value) && value >= 0) {
      setFormData({ ...formData, [name]: value });
    } else if (name !== 'age') {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic
    // You can add your validation logic here
    console.log(formData); // Use this to check the form data in the console
  };

  return (
    <div>


      <Header />
      <div className="signup-box">
        <form onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <input
            type="text"
            placeholder="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Nickname"
            name="nickName"
            value={formData.nickName}
            onChange={handleChange}
          />
            <input
            type="number"
            placeholder="Age (in years)"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit">Sign Up</button>
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

export default SignUp;
