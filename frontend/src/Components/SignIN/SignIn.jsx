import React, { useState } from 'react';
import './SignIn.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic
    // You can add your validation logic here, e.g., checking the password strength, matching passwords, etc.
    console.log(formData); // Use this to check the form data in the console
  };

  return (
    <div>
      <Header />
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
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
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <button type="submit">Login</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
