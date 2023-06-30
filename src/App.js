import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Home from "./components/Home.js";
import Main from "./components/Main.js"

// Pages
import CombatPage from './pages/CombatPage';

function App() {
  return (
    <div>
      <Router>
        <div>
          <main>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/Main" element={<Main />} />
              <Route exact path="/CombatPage" element={<CombatPage />} />
            </Routes>
          </main>
        </div>
    </Router>
    </div>
  );
}

export default App;
