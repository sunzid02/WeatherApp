import React from 'react';
import './App.css';
import Weather from './components/Weather'; // Import the Weather component

const App: React.FC = () => {
  return (
    <div className="container">
      <Weather /> {/* Render the Weather component here */}
    </div>
  );
};

export default App;
