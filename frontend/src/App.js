import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home';
import SignUp from './Components/SignUP/SignUp';
import SignIn from './Components/SignIN/SignIn';
import Profile from './Components/Profile/Profile';
import Update from './Components/SignUP/Update';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/updateuser" element={<Update/>} />
        
      </Routes>
    </Router>
  );
};

export default App;
