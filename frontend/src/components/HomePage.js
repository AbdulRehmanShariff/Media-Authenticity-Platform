import React from "react";
import { Link } from "react-router-dom";

const serviceData = [
  {
    path: "/image",
    title: "Image Detector",
    icon: "🖼️",
    description: "Analyze images with our advanced Xception model.",
  },
  {
    path: "/video",
    title: "Video Detector",
    icon: "🎥",
    description: "Process video frames using a powerful EfficientNet model.",
  },
  {
    path: "/audio",
    title: "Audio Detector",
    icon: "🎤",
    description: "Detect synthetic voices with our Conv1D/LSTM model.",
  },
  {
    path: "/misinformation",
    title: "Misinformation Checker",
    icon: "📰",
    description: "Fact-check text using the Google Gemini API.",
  },
  {
    path: "/chatbot",
    title: "Project Chatbot",
    icon: "🤖",
    description: "Ask the AI assistant about the project's technology.",
  },
];

function HomePage() {
  return (
    <div>
      <h1 className="home-title">Unified Detection Platform</h1>
      <p className="home-subtitle">
        Select a service below to begin your analysis.
      </p>
      <div className="card-grid">
        {serviceData.map((service, index) => (
          <Link key={index} to={service.path} className="service-card">
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default HomePage;
