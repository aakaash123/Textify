import React from 'react';
import './Homepage.css';
import Main from './Main.js';

const Homepage = () => {
  return (
    <main>
      <div className="view view--1">

          <div className="view-content">
            <h1>Textify</h1>
            <p>
              Textify is a React app that lets you upload images and quickly extracts text from them using advanced OCR technology. Perfect for digitizing documents, notes, and more, Textify provides a simple and efficient way to convert images into editable text in seconds.
            </p>
            <Main />
          </div>

      </div>
      <svg className="overlay" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path className="overlay__path" vectorEffect="non-scaling-stroke" d="M 0 0 h 0 c 0 50 0 50 0 100 H 0 V 0 Z" />
      </svg>
    </main>
  );
};

export default Homepage;
