import React from "react";
import {Routes, Route } from "react-router-dom";
import { useTheme } from "./ThemeContext";
import HomePage from "./HomePage";
import SystemBuilder from "./SystemBuilder";
import Workstations from "./Workstations";
import Gallery from "./Gallery";
import Purchase from "./Purchase";

function App() {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
       <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/builder" element={<SystemBuilder />} />
          <Route path="/workstations" element={<Workstations />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/purchase/:id" element={<Purchase />} />
        </Routes>
      
    </div>
  );
}

export default App;