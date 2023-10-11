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
                New Travelers
              </p>
            </div>
            <div className="flex justify-center">
              <form className="max-w-form items-center">
                <div className="flex">
                  <select
                    className="hover:text-[#FF5C00] p-2 rounded-md bg-[#ffffff] w-1/2 font-inter font-normal h-12 placeholder-[#7A7A7A] mb-3 border border-[#E6E6E6] mr-2"
                  >
                    <option value="" disabled selected>Select Prefix</option>
                    <option value="Miss">Miss</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                  </select>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="hover:text-[#FF5C00] p-2 rounded-md bg-[#ffffff] w-full font-inter font-normal h-12 placeholder-[#7A7A7A] mb-3 border border-[#E6E6E6]"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="hover:text-[#FF5C00] p-2 rounded-md bg-[#ffffff] w-full font-inter font-normal h-12 placeholder-[#7A7A7A] mb-3 border border-[#E6E6E6] mr-2"
                  // Set the width to w-full to make it take up the full card size
                  />
                </div>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="hover:text-[#FF5C00] p-2 rounded-md bg-[#ffffff] w-1/2 font-inter font-normal h-12 placeholder-[#7A7A7A] mb-3 border border-[#E6E6E6] mr-2"
                  />
                  <input
                    type="text"
                    placeholder="NIC"
                    className="hover:text-[#FF5C00] p-2 rounded-md bg-[#ffffff] w-1/2 font-inter font-normal h-12 placeholder-[#7A7A7A] mb-3 border border-[#E6E6E6]"
                  />
                </div>
                <div className="flex justify-center mt-5">
                  <button
                    className="px-5 py-2 bg-black text-white font-semibold hover:bg-[#FF5C00] rounded-3xl mr-2"
                    onClick={() => { }}
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
