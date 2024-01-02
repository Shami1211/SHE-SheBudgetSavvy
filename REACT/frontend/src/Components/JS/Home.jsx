import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Home.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import stagesImage from '../IMG/Stages.jpg';

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <img src={stagesImage} alt="Stages" className="stages-image" />
        <div className="home-container">
          <main className="main-content">
            <div className="intro-section">
              <h2>Welcome to SheBudgetSavvy</h2>
              <p>Welcome to SheBudgetSavvy...</p>
              <Link to="/signup">
                <button className="home-btn">SignUp</button>
              </Link>
              <Link to="/signin">
                <button className="home-btn">SignIn</button>
              </Link>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
