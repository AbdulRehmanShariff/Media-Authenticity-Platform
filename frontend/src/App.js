import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ImageDetector from "./components/ImageDetector";
import VideoDetector from "./components/VideoDetector";
import AudioDetector from "./components/AudioDetector";
import MisinformationChecker from "./components/MisinformationChecker";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/image" element={<ImageDetector />} />
            <Route path="/video" element={<VideoDetector />} />
            <Route path="/audio" element={<AudioDetector />} />
            <Route path="/misinformation" element={<MisinformationChecker />} />
            <Route path="/chatbot" element={<Chatbot />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
