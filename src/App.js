import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import './App.css'
import Main from './Components/Main.js';

const App = () => {
  const [init, setInit] = useState(false);
  const [show, setShow] = useState(true); // Initially show is true

    useEffect(() => {
      // Set a timeout to hide the content after 5000 milliseconds
      const timer = setTimeout(() => {
        setShow(false); // This will hide the content after 5 seconds
      }, 5000);

      // Cleanup function to clear the timer if the component unmounts
      return () => clearTimeout(timer);
    }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#0d47a1",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        {/* Dynamic Background Content */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "url(path_to_your_image_or_background_content)",
            backgroundSize: "cover",
            zIndex: 1, // Set z-index higher than particles
          }}
        />
        {/* Additional Content on Upper Layer */}
        <div
          style={{
            position: "absolute",
            top: 20, // Adjust top position as needed
            left: 20, // Adjust left position as needed
            zIndex: 2, // Set z-index higher than background and particles
          }}
        >
          <div>
                {show && <div class="hero">
                  <h1 class="text-reveal">
                    <span>TEXT REVEAL</span>
                    <span aria-hidden="true">Textify</span>
                  </h1>
                </div>}
                <Main />
          </div>
        </div>
        {/* Particle Effect */}
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }} // Ensure particles are displayed below the background content
        />
      </div>
    );
  }

  return <></>;
};

export default App;
