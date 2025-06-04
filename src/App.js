import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./features/home/Home";
import Standings from "./features/standings/Standings";
import Profile from "./features/profiles/Profile";
import Schedule from "./features/race schedule/Schedule";
import Predictions from "./features/predictions/Predictions";
import ArchivesIndex from "./features/archives/ArchivesIndex";
import YearArchivePage from "./features/archives/YearArchivePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { FavoritesProvider } from "./context/FavouriteContext"

function App() {
  return (
    <FavoritesProvider> 
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/standings" element={<Standings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/predictions" element={<Predictions />} />
          <Route path="/archives" element={<ArchivesIndex />} />
          <Route path="/archives/:year" element={<YearArchivePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </FavoritesProvider>
  );
}

export default App;