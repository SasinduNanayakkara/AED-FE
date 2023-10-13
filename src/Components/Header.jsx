import React, { useState } from 'react';
import Logo from '../Assets/Logo.svg';
import BurgerIcon from '../Assets/BurgerIcon.svg';
import NavigationDrawer from './NavigationDrawer';

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Function to open the navigation drawer
  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  // Function to close the navigation drawer
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="">
      {/* Header section with a logo, burger icon, and navigation drawer */}
      <div className="flex justify-between items-center bg-white px-28 py-4">
        <img src={BurgerIcon} className="h-10" onClick={openDrawer} alt="Open Drawer" />
        <div></div> {/* You might place additional header content here */}
        <img src={Logo} className="h-8 xl:flex justify-between items-center" alt="Logo" />
      </div>
      {/* Horizontal line to separate the header */}
      <div className="border-b border-gray-300"></div>

      {/* Navigation drawer component, controlled by the state variable isDrawerOpen */}
      <NavigationDrawer open={isDrawerOpen} onClose={closeDrawer} />
    </div>
  );
}

export default Header;
