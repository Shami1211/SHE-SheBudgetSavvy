import React, { useState, useEffect } from 'react';
import '../CSS/Home.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import maidenImage from '../IMG/Maiden.png';
import motherImage from '../IMG/Mother.png';
import stagesImage from '../IMG/Stages.jpg'; // Import the Stages.avif image

const Home = () => {
  
  

  return (
    <div>
      <Header />

      {/* Display the Stages.avif image */}
      <img src={stagesImage} alt="Stages" className="stages-image" />

      <div className="home-container">
        <main className="main-content">
          <div className="intro-section">
            <h2>Welcome to SheBudgetSavvy</h2>
            <p>Welcome to SheBudgetSavvy, your go-to platform for empowered financial tracking tailored for every stage of a woman's journey...</p>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
