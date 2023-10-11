import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function CreateTrain() {
  const timeOptions = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
  ];

  const [selectedStation, setSelectedStation] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedStationsAndTimes, setSelectedStationsAndTimes] = useState([]);

  const handleAddClick = () => {
    if (selectedStation && selectedTime) {
      setSelectedStationsAndTimes([...selectedStationsAndTimes, { station: selectedStation, time: selectedTime }]);
      setSelectedStation("");
      setSelectedTime("");
    }
  };

  return (
    <div>
      <Header />
      <div>
        <div className="flex-grow flex items-center justify-center">
          <div className="bg-white border rounded-xl p-10 my-20 flex flex-col">
            <div>
              <p className="flex items-center justify-center text-4xl font-bold mb-10">
                New Train
              </p>
            </div>
            <div className="flex justify-center">
              <form className="max-w-form items-center">
                <div>
                  <input
                    type="text"
                    placeholder="Train Name"
                    className="hover:text-[#FF5C00] p-2 rounded-md bg-[#ffffff] w-full font-inter font-normal h-12 placeholder-[#7A7A7A] mb-3 border border-[#E6E6E6]"
                  />
                  <select
                    className="hover:text-[#FF5C00] p-2 rounded-md bg-[#ffffff] w-full font-inter font-normal h-12 placeholder-[#7A7A7A] mb-3 border border-[#E6E6E6] mr-2"
                  >
                    <option value="" disabled selected>
                      Select The Day
                    </option>
                    <option value="Sunday">Sunday</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                  </select>
                </div>
                <div className="flex">
                  <select
                    value={selectedStation}
                    onChange={(e) => setSelectedStation(e.target.value)}
                    className="hover:text-[#FF5C00] p-2 rounded-md bg-[#ffffff] w-full font-inter font-normal h-12 placeholder-[#7A7A7A] mb-3 border border-[#E6E6E6]"
                  >
                    <option value="" disabled>
                      Select The Station
                    </option>
                    <option value="AAA">AAA</option>
                    <option value="BBB">BBB</option>
                    <option value="CCC">CCC</option>
                  </select>

                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="hover:text-[#FF5C00] p-2 rounded-md bg-[#ffffff] w-full font-inter font-normal h-12 placeholder-[#7A7A7A] mb-3 border border-[#E6E6E6] ml-2"
                  >
                    <option value="" disabled>
                      Select Time
                    </option>
                    {timeOptions.map((time, index) => (
                      <option key={index} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex justify-center mt-5">
                  <button
                    className="px-5 py-2 bg-black text-white font-semibold hover:bg-[#FF5C00] rounded-3xl mr-2"
                    onClick={handleAddClick}
                  >
                    Add
                  </button>
                  <button
                    className="px-5 py-2 text-black font-semibold hover:bg-[#FF5C00] rounded-3xl border"
                    onClick={() => {}}
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

      {selectedStationsAndTimes.length > 0 && (
        <div className="flex justify-center mt-5">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Selected Stations and Times:</h2>
            <ul>
              {selectedStationsAndTimes.map((item, index) => (
                <li key={index}>
                  {item.station} - {item.time}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateTrain;
