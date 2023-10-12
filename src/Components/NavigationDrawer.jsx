import React, { useState } from 'react';
import './NavigationDrawer.css';

function NavigationDrawer({ open, onClose }) {
  const [showTraveler, setShowTraveler] = useState(false);
  const [showTrain, setShowTrain] = useState(false);

  const handleTravelerClick = () => {
    setShowTraveler(!showTraveler);
    setShowTrain(false);
  };

  const handleTrainClick = () => {
    setShowTrain(!showTrain);
    setShowTraveler(false);
  };

  const drawerClass = open ? 'navigation-drawer open' : 'navigation-drawer';

  return (
    <div className={drawerClass}>
      <div className="drawer-content">
        <div className="drawer-section">
          <div className="drawer-header m-5 rounded-md bg-black p-3 " onClick={handleTravelerClick}>
            Traveler Managements
          </div>
          {showTraveler && (
            <div>
              <a href="/traveler">View Travelers</a>
              <a href="/add-traveler">Add Traveler</a>
            </div>
          )}
        </div>
        <div className="drawer-section">
          <div className="drawer-header" onClick={handleTrainClick}>
            Train Managements
          </div>
          {showTrain && (
            <div>
              <a href="/train">View Trains</a>
              <a href="/add-train">Add Train</a>
            </div>
          )}
        </div>
      </div>
      <button onClick={onClose} className="close-button">
        Close
      </button>
    </div>
  );
}

export default NavigationDrawer;
