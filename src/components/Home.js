import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Home() {
  const [isStartClicked, setIsStartClicked] = useState(false);
  const [isNewClicked, setIsNewClicked] = useState(false);
  const navigate = useNavigate();

  const handleStartClick = () => {
    setIsStartClicked(true);
    navigate("/main"); // Navigate to the main page
  };

  const handleNewClick = () => {
    setIsNewClicked(true);
    navigate("/new"); // Navigate to the new page
  };

  return (
    <div>
      {/* title */}
      <div className="homeTitle">
        <h1>Mafia to Idle</h1>
      </div>

      {/* buttons */}
      <div className="container">
        <div className="homeButtons">
          <button
            className={isStartClicked ? "clickedButton" : "homeButton"}
            onClick={handleStartClick}
          >
            {isStartClicked ? "Start!" : "Start"}
          </button>

          <div>
            <button
              className={isNewClicked ? "clickedButtonNew" : "homeButtonNew"}
              onClick={handleNewClick}
            >
              {isNewClicked ? "New!" : "New"}
            </button>
          </div>
        </div>
      </div>

      {/* Saves */}
      <div>
        <h2>Character Saves</h2>
        <div className="container-saves">
          <div className="saveBox"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
