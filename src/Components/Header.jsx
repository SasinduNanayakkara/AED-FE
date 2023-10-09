import React from "react";
import Logo from "../Assets/Logo.svg";
import BurgerIcon from "../Assets/BurgerIcon.svg"

function Header() {
  return (
    <div className="">
      <div className="flex justify-between items-center bg-white px-28 py-4">
        <img src={BurgerIcon} className="h-10"></img>
        <div></div>
        <img src={Logo} className="h-8 xl:flex justify-between items-center" alt="Logo" />
      </div>
      <div className="border-b border-gray-300"></div>
    </div>
  );
}

export default Header;
