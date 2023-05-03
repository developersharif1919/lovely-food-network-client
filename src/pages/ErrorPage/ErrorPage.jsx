/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './ErrorPage.css';
import errorImg from '../../assets/error.png'

const ErrorPage = ({ error }) => { // Accept error as prop
    return (
        <div className="not-found-container">
          <div className="error-container">
            <div className="error-code">{error}</div> {/* Display the error information */}
            <div className="error-message"><h2 style={{color:'blue',fontSize:'80px',marginBottom:'0px'}}>4<span style={{color:'skyblue'}}>0</span>4</h2></div>
            <div className='errorImg error-message' >
              <img src={errorImg} alt="" />
            </div>
            <div className="error-message" style={{marginBottom:'30px'}}>Oops! The page you're looking for was not found.</div>
            <a href="/" className="back-home-link">Back to Home</a>
          </div>
        </div>
    );
};

export default ErrorPage;