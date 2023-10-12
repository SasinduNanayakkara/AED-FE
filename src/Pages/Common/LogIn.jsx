import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../Assets/Logo.svg";
import Footer from "../../Components/Footer"

function FirstElement() {
  // const [login, { isLoading }]
  return (
    <div>
      <div className="">
        <div className="flex justify-between items-center bg-white px-28 py-4">
        <div></div>
        <img src={Logo} className="h-8 xl:flex justify-between items-center" alt="Logo" />
      </div>
      <div className="border-b border-gray-300"></div>
      </div>
      
      <div className="w-full h-full min-h-[81vh] flex flex-col justify-center items-center">
        <form className=" max-w-form flex flex-col items-center">
          <h5 className="text-5xl font-extrabold text-center">Welcome back</h5>
          <p className="font-medium mt-4 text-center">Please enter your details to continue</p>
          <div className="w-96 flex flex-col justify-center items-center py-6">
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

          <div className=" flex flex-col items-center gap-8">
            <Link to="/forgot-password">
            <h3 className="underline link hover:text-[#FF5C00]">Forgot Password?</h3>
          </Link>
          <button className="hover:bg-[#FF5C00] hover:text-white bg-[#000000] text-white rounded-3xl h-12 w-96 px-8 py-1 font-inter font-semibold">
            Login
          </button>
          </div>        
        </form>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div>
      <FirstElement />
      <Footer/>
    </div>
  )
}
export default Home;
