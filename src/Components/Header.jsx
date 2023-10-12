import React, { useState } from 'react';
import Logo from '../Assets/Logo.svg';
import BurgerIcon from '../Assets/BurgerIcon.svg';
import NavigationDrawer from './NavigationDrawer';

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="">
      <div className="flex justify-between items-center bg-white px-28 py-4">
        <img src={BurgerIcon} className="h-10" onClick={openDrawer} alt="Open Drawer" />
        <div></div>
        <img src={Logo} className="h-8 xl:flex justify-between items-center" alt="Logo" />
      </div>
      <div className="border-b border-gray-300"></div>

      <NavigationDrawer open={isDrawerOpen} onClose={closeDrawer} />
    </div>
  );
}

export default Header;
