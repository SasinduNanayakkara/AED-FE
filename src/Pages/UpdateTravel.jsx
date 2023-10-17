import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../App";

function CreateTraveler() {
  const location = useLocation();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nic, setNic] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [id, setId] = useState("");

  useEffect(() => {
    setFirstName(location.state.firstName);
    setLastName(location.state.lastName);
    setNic(location.state.nic);
    setPhone(location.state.phone);
    setEmail(location.state.email);
    setPassword(location.state.password);
    setIsActive(location.state.isActive);
    setId(location.state.id);
  }, []);


  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log(id, firstName, lastName, nic, password, email, isActive);
        try {
          const request = await axios.put(`${baseUrl}/client/${id}`, {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            password: password,
            isActive: isActive,
            nic: nic,
          });
          if (request) {
            alert("Traveler Updated Successfully");
            navigate("/extravelers");
          }
        }
        catch (error) {
          console.log(error);
          alert("Traveler Update Failed");
        }
  }
  console.log(location.state);
  return (
    <div>
      <Header />
      <div>
        <div className="flex-grow flex items-center justify-center">
          <div className="bg-white border rounded-xl p-10 my-20 flex flex-col">
            <div>
              <p className="flex items-center justify-center text-4xl font-bold mb-10">
                Edit Traveler Details
              </p>
            </div>
            <div className="flex justify-center">
              <form className="max-w-form items-center">
                <div className="flex">
                 
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="hover:text-[#FF5C00] p-2 rounded-md bg-[#ffffff] w-full font-inter font-normal h-12 placeholder-[#7A7A7A] mb-3 border border-[#E6E6E6]"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="hover:text-[#FF5C00] p-2 rounded-md bg-[#ffffff] w-full font-inter font-normal h-12 placeholder-[#7A7A7A] mb-3 border border-[#E6E6E6] mr-2"
                  // Set the width to w-full to make it take up the full card size
                  />
                </div>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="hover:text-[#FF5C00] p-2 rounded-md bg-[#ffffff] w-1/2 font-inter font-normal h-12 placeholder-[#7A7A7A] mb-3 border border-[#E6E6E6] mr-2"
                  />
                  <input
                    type="text"
                    placeholder="NIC"
                    value={nic}
                    onChange={(e) => setNic(e.target.value)}
                    className="hover:text-[#FF5C00] p-2 rounded-md bg-[#ffffff] w-1/2 font-inter font-normal h-12 placeholder-[#7A7A7A] mb-3 border border-[#E6E6E6]"
                  />
                </div>
                <div className="flex justify-center mt-5">
                  <button
                    className="px-5 py-2 bg-black text-white font-semibold hover:bg-[#FF5C00] rounded-3xl mr-2"
                    onClick={(e) => handleUpdate(e)}
                  >
                    Edit
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
      <Footer/>
    </div>
  );
}

export default CreateTraveler;
