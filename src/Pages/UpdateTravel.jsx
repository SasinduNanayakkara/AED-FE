import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function CreateTraveler() {
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
                    placeholder="Shavidini"
                    className="hover:text-[#FF5C00] p-2 rounded-md bg-[#ffffff] w-full font-inter font-normal h-12 placeholder-[#7A7A7A] mb-3 border border-[#E6E6E6]"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Ekanayake"
                    className="hover:text-[#FF5C00] p-2 rounded-md bg-[#ffffff] w-full font-inter font-normal h-12 placeholder-[#7A7A7A] mb-3 border border-[#E6E6E6] mr-2"
                  // Set the width to w-full to make it take up the full card size
                  />
                </div>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="+94703009913"
                    className="hover:text-[#FF5C00] p-2 rounded-md bg-[#ffffff] w-1/2 font-inter font-normal h-12 placeholder-[#7A7A7A] mb-3 border border-[#E6E6E6] mr-2"
                  />
                  <input
                    type="text"
                    placeholder="199876546588"
                    className="hover:text-[#FF5C00] p-2 rounded-md bg-[#ffffff] w-1/2 font-inter font-normal h-12 placeholder-[#7A7A7A] mb-3 border border-[#E6E6E6]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="shavidilunika10s@gmail.com"
                    // onChange={(e) => setEmail(e.target.value)}
                    className="hover:text-[#FF5C00] p-2 rounded-md bg-[#ffffff] w-full font-inter font-normal h-12 placeholder-[#7A7A7A] mb-3 border border-[#E6E6E6] mr-2"
                    // Set the width to w-full to make it take up the full card size
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    // onChange={(e) => setPassword(e.target.value)}
                    className="hover:text-[#FF5C00] p-2 rounded-md bg-[#ffffff] w-full font-inter font-normal h-12 placeholder-[#7A7A7A] mb-3 border border-[#E6E6E6] mr-2"
                    // Set the width to w-full to make it take up the full card size
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    // onChange={(e) => setConfirmPassword(e.target.value)}
                    className="hover:text-[#FF5C00] p-2 rounded-md bg-[#ffffff] w-full font-inter font-normal h-12 placeholder-[#7A7A7A] mb-3 border border-[#E6E6E6] mr-2"
                    // Set the width to w-full to make it take up the full card size
                  />
                </div>
                <div className="flex justify-center mt-5">
                  <button
                    className="px-5 py-2 bg-black text-white font-semibold hover:bg-[#FF5C00] rounded-3xl mr-2"
                    onClick={() => { }}
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
