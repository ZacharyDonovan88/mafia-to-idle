import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Main() {
  return (
    <div>
      <div>
        <div className="mainTitle">
          <h2>Mafia to Idle</h2>
        </div>
        <div className="container-list mainList">
          <div className="mainLinks">
            <Link to="/CombatPage">
              <h3>Combat</h3>
            </Link>
          </div>
          <div className="mainLinks">
            <Link to="/training">
              <h3>Training</h3>
            </Link>
          </div>
          <div className="mainLinks">
            <Link to="/skills">
              <h3>Skills</h3>
            </Link>
          </div>
          <div className="mainLinks">
            <Link to="/group">
              <h3>Group</h3>
            </Link>
          </div>
          <div className="mainLinks">
            <Link to="/shops">
              <h3>Shops</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
