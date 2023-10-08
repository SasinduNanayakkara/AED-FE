import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../Assets/Logo.svg";
import BurgerIcon from "../../Assets/BurgerIcon.svg";

function Home() {
  // const [login, { isLoading }]
  return (
    <div className="">
      <div className="flex justify-between items-center bg-white  px-28 py-4">
        <img src={BurgerIcon} className="h-10" alt="Burger Icon" />
        <div></div>
        <img src={Logo} className="h-8" alt="Logo" />
      </div>
      <div className="border-b border-gray-300 px-10"></div>

      <div className="w-full min-h-[70vh] flex flex-col justify-center items-center">
        <form className="w-full max-w-form flex flex-col items-center">
          <h5 className="text-5xl font-extrabold">Welcome back</h5>
          <p className="font-medium mt-4">Please enter your details to continue</p>
          <div className="w-[60vh] flex flex-col justify-center items-center py-6">
            <input
              type="text"
              placeholder="Email"
              className="hover:text-[#FF5C00] mt-4 p-2 rounded-md bg-[#ffffff] w-full font-inter font-normal h-12 placeholder-[#7A7A7A] mb-3 border border-[#E6E6E6]"
            />

            <input
              type="password"
              placeholder="Password"
              className="hover:text-[#FF5C00] mt-4 p-2 rounded-md bg-[#ffffff] w-full font-inter font-normal h-12 placeholder-[#7A7A7A] mb-3 border border-[#E6E6E6]"
            />
          </div>

          <div className="w-[60vh] flex flex-col items-center gap-8">
            <Link to="/forgot-password">
            <h3 className="underline link hover:text-[#FF5C00]">Forgot Password?</h3>
          </Link>
          <button className="hover:bg-[#FF5C00] hover:text-white bg-[#000000] text-white rounded-3xl h-12 w-full px-8 py-1 font-inter font-semibold">
            Login
          </button>
          </div>        
        </form>
      </div>
    </div>
  );
}

export default Home;
