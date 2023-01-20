import React from 'react'
import './About.css';
function About() {
    return (
        <div className="about-me">
          <h1 className="about-me__title">About</h1>
          <div className="about-me__content">
            {/* <img src="path/to/profile-pic.jpg" alt="Profile Picture" className="about-me__image" /> */}
            <p className="about-me__text">
            Welcome to SELLIKKO, where individuals and businesses can easily buy and sell a wide variety of products and services. This platform offers a simple and convenient way for users to list their items for sale, and for buyers to find exactly what they're looking for.
            

            </p>
          </div>
        </div>
      );
}

export default About