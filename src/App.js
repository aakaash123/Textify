import React from "react";
import './App.css';
import Homepage from './Components/Homepage.js';

const App = () => {
    return (
        <div>
              <svg className="svg-filters" width="0" height="0" viewBox="0 0 0 0" xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ position: 'absolute', visibility: 'hidden' }}>
                <defs>
                  <filter id="watercolor">
                    <feTurbulence seed="1" result="noise" type="fractalNoise" baseFrequency="0.0015" numOctaves="4" />
                    <feColorMatrix type="saturate" values="0" />
                    <feColorMatrix
                      type="matrix"
                      values="20 0 0 0 -4
                              0 20 0 0 -4
                              0 0 20 0 -4
                              0 0 0 1 1">
                      <animate
                        attributeName="values"
                        values="20 0 0 0 -14
                                0 20 0 0 -14
                                0 0 20 0 -14
                                0 0 0 1 1;
                                20 0 0 0 -4
                                0 20 0 0 -4
                                0 0 20 0 -4
                                0 0 0 1 1"
                        dur="10s"
                        repeatCount="1" />
                    </feColorMatrix>
                    <feColorMatrix result="fill" type="luminanceToAlpha" />
                    <feConvolveMatrix
                      in="SourceGraphic"
                      kernelMatrix="3 0 0
                                    0 0 0
                                    0 0 -2" />
                    <feColorMatrix type="saturate" values="0" />
                    <feColorMatrix
                      type="matrix"
                      result="line"
                      values="9 0 0 0 -1
                              0 9 0 0 -1
                              0 0 9 0 -1
                              0 0 0 1 1" />
                    <feColorMatrix in="noise" type="saturate" values="0" />
                    <feColorMatrix
                      type="matrix"
                      values="20 0 0 0 -4
                              0 20 0 0 -4
                              0 0 20 0 -4
                              0 0 0 1 1">
                      <animate
                        attributeName="values"
                        values="20 0 0 0 -14
                                0 20 0 0 -14
                                0 0 20 0 -14
                                0 0 0 1 1;
                                20 0 0 0 -4
                                0 20 0 0 -4
                                0 0 20 0 -4
                                0 0 0 1 1"
                        dur="30s"
                        repeatCount="1" />
                    </feColorMatrix>
                    <feColorMatrix result="fill2" type="luminanceToAlpha" />
                    <feFlood result="flood" floodColor="#fff" />
                    <feComposite in="line" in2="fill" operator="in" />
                    <feComposite result="fill3" in="fill2" operator="and" />
                    <feComposite in2="flood" operator="and" />
                    <feColorMatrix
                      type="matrix"
                      values="-1 0 0 0 1
                              0 -1 0 0 1
                              0 0 -1 0 1
                              0 0 0 1 0" />
                    <feColorMatrix result="fill4" type="luminanceToAlpha" />
                    <feComposite in="SourceGraphic" in2="fill4" operator="in" />
                    <feComposite in2="SourceAlpha" operator="in" />
                  </filter>
                </defs>
              </svg>

              <img
                src="https://images.unsplash.com/photo-1582201943021-e8e5cb6dedc2?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTk4NTAzNDF8&ixlib=rb-4.0.3&q=85"
                alt="watercolor"
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'url(#watercolor)' }}
              />
              <Homepage />
            </div>
    );
};

export default App;
