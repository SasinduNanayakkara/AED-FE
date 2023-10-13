import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import axios from "axios";
import { baseUrl } from "../App";

function CreateTraveler() {
   // State variables to hold form input data
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [nic, setNic] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

   // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(password, confirmpassword);
      // Check if the entered passwords match
    if (password !== confirmpassword) {
      alert("Password does not match");
      return;
    }

    try {
       // Send a POST request to the server to create a new traveler
      const response = await axios.post(`${baseUrl}/client`,{
        firstname,
        lastname,
        email,
        phone: phonenumber,
        password,
        inActive: true,
        nic
      });
      if (response) {
        alert("Traveler Added Successfully");
      }

    } catch (error) {
      console.log(error);
      alert("Traveler Adding Failed");
    }
  }

   // NIC validation function (currently commented out)
  function validation(nicNumber) {
    var result = false;
    if (nicNumber.length === 10 && !isNaN(nicNumber.substr(0, 9)) && isNaN(nicNumber.substr(9, 1).toLowerCase()) && ['x', 'v'].includes(nicNumber.substr(9, 1).toLowerCase())) {
        setNic(nicNumber);
        return true;
    } else if (nicNumber.length === 12 && !isNaN(nicNumber)) {
        setNic(nicNumber);
        return true;
    } else {
        alert("Invalid NIC Number");
        return false;
    }
}

  return (
    <div>
      <Header />
      <div>
        <div className="flex-grow flex items-center justify-center">
          <div className="bg-white border rounded-xl p-10 my-20 flex flex-col">
            <div>
              <p className="flex items-center justify-center text-4xl font-bold mb-10">
                New Traveler
              </p>
            </div>
            <div className="flex justify-center">
              <form className="max-w-form items-center">
                <div className="flex">
                  {/* <select
                    className="hover:text-[#FF5C00] p-2 rounded-md bg-[#ffffff] w-1/2 font-inter font-normal h-12 placeholder-[#7A7A7A] mb-3 border border-[#E6E6E6] mr-2"
                  >
                    <option value="" disabled selected>Select Prefix</option>
                    <option value="Miss">Miss</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                  </select> */}
                  <input
                    type="text"
                    placeholder="First Name"
                    onChange={(e) => setFirstname(e.target.value)}
                    className="hover:text-[#FF5C00] p-2 rounded-md bg-[#ffffff] w-full font-inter font-normal h-12 placeholder-[#7A7A7A] mb-3 border border-[#E6E6E6]"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    onChange={(e) => setLastname(e.target.value)}
                    className="hover:text-[#FF5C00] p-2 rounded-md bg-[#ffffff] w-full font-inter font-normal h-12 placeholder-[#7A7A7A] mb-3 border border-[#E6E6E6] mr-2"
                  // Set the width to w-full to make it take up the full card size
                  />
                </div>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    onChange={(e) => setPhonenumber(e.target.value)}
                    className="hover:text-[#FF5C00] p-2 rounded-md bg-[#ffffff] w-1/2 font-inter font-normal h-12 placeholder-[#7A7A7A] mb-3 border border-[#E6E6E6] mr-2"
                  />
                  <input
                    type="text"
                    placeholder="NIC"
                    onChange={(e) => setNic(e.target.value)}
                    className="hover:text-[#FF5C00] p-2 rounded-md bg-[#ffffff] w-1/2 font-inter font-normal h-12 placeholder-[#7A7A7A] mb-3 border border-[#E6E6E6]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="hover:text-[#FF5C00] p-2 rounded-md bg-[#ffffff] w-full font-inter font-normal h-12 placeholder-[#7A7A7A] mb-3 border border-[#E6E6E6] mr-2"
                    // Set the width to w-full to make it take up the full card size
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="hover:text-[#FF5C00] p-2 rounded-md bg-[#ffffff] w-full font-inter font-normal h-12 placeholder-[#7A7A7A] mb-3 border border-[#E6E6E6] mr-2"
                    // Set the width to w-full to make it take up the full card size
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="hover:text-[#FF5C00] p-2 rounded-md bg-[#ffffff] w-full font-inter font-normal h-12 placeholder-[#7A7A7A] mb-3 border border-[#E6E6E6] mr-2"
                    // Set the width to w-full to make it take up the full card size
                  />
                </div>
                <div className="flex justify-center mt-5">
                  <button
                    className="px-5 py-2 bg-black text-white font-semibold hover:bg-[#FF5C00] rounded-3xl mr-2"
                    onClick={(e) => handleSubmit(e)}
                  >
                    Add
                  </button>
                  <button
                    className="px-5 py-2 text-black font-semibold hover:bg-[#FF5C00] rounded-3xl border"
                    onClick={() => { }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CreateTraveler;
