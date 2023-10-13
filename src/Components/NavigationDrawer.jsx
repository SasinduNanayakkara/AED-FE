import React, { useState } from 'react';
import { FiChevronRight, FiChevronDown, FiX } from 'react-icons/fi';
import './NavigationDrawer.css';

function NavigationDrawer({ open, onClose, userRole }) {
  // State for managing the visibility of sub-sections
  const [showTraveler, setShowTraveler] = useState(false);
  const [showTrain, setShowTrain] = useState(false);

  // Toggle visibility of the "Traveler Managements" sub-section
  const handleTravelerClick = () => {
    setShowTraveler(!showTraveler);
    setShowTrain(false);
  };

  // Toggle visibility of the "Train Managements" sub-section
  const handleTrainClick = () => {
    setShowTrain(!showTrain);
    setShowTraveler(false);
  };

  // Determine the class to apply based on the "open" prop
  const drawerClass = open ? 'navigation-drawer open' : 'navigation-drawer';

  return (
    <div className={drawerClass}>
      <div className="drawer-content">
        <div className="drawer-header">
          <div className="close-icon absolute top-0 right-0 mt-3 mr-10" onClick={onClose}>
            <FiX />
          </div>
        </div>
        <div className="drawer-section">
          {/* "Traveler Managements" section is always visible for users with any role */}
          <div>
            <div className="drawer-header m-5 rounded-md bg-[#FDEEE3] p-3 mb-0 font-semibold" onClick={handleTravelerClick}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {showTraveler ? <FiChevronDown /> : <FiChevronRight />}
                <span>Traveler Managements</span>
              </div>
            </div>
            {showTraveler && (
              <div className=''>
                <div className='mt-2 mb-4'>
                  <a href="/traveler" className='ml-10 p-2 w-full'>View Travelers</a>
                </div>
                <div className="h-[1px] bg-[#D9D9D9] my-1 mx-10"></div>
                <div className='mt-2 mb-4'>
                  <a href="/add-traveler" className='m-10 p-2 w-full'>Add Traveler</a>
                </div>
                <div className="h-[1px] bg-[#D9D9D9] my-1 mx-10"></div>
              </div>
            )}
          </div>
        </div>
        <div className="drawer-section">
          {/* "Train Managements" section is always visible for users with any role */}
          <div>
            <div className="drawer-header m-5 rounded-md bg-[#FDEEE3] p-3 font-semibold" onClick={handleTrainClick}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {showTrain ? <FiChevronDown /> : <FiChevronRight />}
                <span>Train Managements</span>
              </div>
            </div>
            {showTrain && (
              <div className=''>
                <div className='mt-2 mb-4'>
                  <a href="/trainlist" className='ml-10 p-2 w-full'>View Trains</a>
                </div>
                <div className="h-[1px] bg-[#D9D9D9] my-1 mx-10"></div>
                <div className='mt-2 mb-4'>
                  <a href="/createtrain" className='m-10 p-2 w-full'>Add Train</a>
                </div>
                <div className="h-[1px] bg-[#D9D9D9] my-1 mx-10"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationDrawer;
