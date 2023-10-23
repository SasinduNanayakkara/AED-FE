import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../Assets/Logo.svg";
import Footer from "../../Components/Footer"
import LoginForm from "./LoginForm";

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
      <h5 className="text-5xl font-extrabold text-center">Welcome</h5>
          <p className="font-medium mt-4 text-center mb-5">Please enter your details to continue</p>
        <LoginForm/>
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
