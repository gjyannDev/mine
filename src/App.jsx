import React, { useState, useRef } from 'react';
import sampleVideo from './assets/mine_cover.mp4';

function App() {
  const [started, setStarted] = useState(false);
  const videoRef = useRef(null);

  const handleStart = () => {
    setStarted(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 200); // give time for DOM render
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&family=Sacramento&display=swap');

        body {
          margin: 0;
          padding: 0;
          font-family: 'Playfair Display', serif;
          background: linear-gradient(to bottom right, #fef7f1, #f9e0e7);
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 100vh;
          text-align: center;
          overflow-x: hidden;
        }

        h1 {
          font-family: 'Sacramento', cursive;
          font-size: 4rem;
          color: #8B3A3A;
          margin-top: 40px;
          animation: floatIn 2s ease-out forwards;
          opacity: 0;
        }

        h3 {
          font-size: 1.3rem;
          color: #a0522d;
          margin-top: 15px;
          font-style: italic;
          animation: fadeIn 3s ease-out forwards;
          opacity: 0;
        }

        .video-wrapper {
          background: #fff8f0;
          border: 2px dashed #d8a48f;
          border-radius: 15px;
          padding: 10px;
          margin: 30px auto;
          box-shadow: 0 0 20px rgba(139, 58, 58, 0.1);
          width: 90%;
          max-width: 720px;
          animation: fadeIn 2s ease-out 1s forwards;
          opacity: 0;
        }

        .video-container {
          position: relative;
          width: 100%;
          padding-top: 60%;
          overflow: hidden;
          border-radius: 10px;
        }

        .video-container video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .intro-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(255, 247, 240, 0.95);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 10;
          animation: fadeIn 1s ease-out forwards;
        }

        .intro-overlay h2 {
          font-family: 'Sacramento', cursive;
          font-size: 3rem;
          color: #8B3A3A;
          margin-bottom: 20px;
        }

        .start-button {
          padding: 15px 35px;
          font-size: 1.2rem;
          background-color: #f9d6da;
          border: 2px solid #d97b93;
          color: #8B3A3A;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Playfair Display', serif;
        }

        .start-button:hover {
          background-color: #ffe1e7;
          box-shadow: 0 0 10px rgba(216, 123, 147, 0.5);
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        @keyframes floatIn {
          0% {
            transform: translateY(-30px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>

      {!started && (
        <div className="intro-overlay">
          <h2>This one's for you ❤️</h2>
          <button className="start-button" onClick={handleStart}>
            Play My Cover
          </button>
        </div>
      )}

      {started && (
        <>
          <h1>Mine</h1>

          <div className="video-wrapper">
            <div className="video-container">
              <video
                ref={videoRef}
                src={sampleVideo}
                controls
                playsInline
                preload="auto"
              />
            </div>
          </div>

          <h3>"You are the best thing that's ever been mine"</h3>
        </>
      )}
    </>
  );
}

export default App;
