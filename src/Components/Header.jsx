import React from "react";
import Logo from "../Assets/Logo.svg";
import BurgerIcon from "../Assets/BurgerIcon.svg"

function Header() {
  return (
    <div className="pt-5">
      <div className="flex justify-between items-center px-28 bg-white">
        <img src={BurgerIcon} className="h-10"></img>
        <div></div>
        <img src={Logo} className="h-8" alt="Logo" />
      </div>
    </div>
  );
}

export default Header;
