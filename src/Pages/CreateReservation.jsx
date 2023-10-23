import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import axios from "axios";
import { baseUrl } from "../App";
import { notification } from "antd";

function CreateReservation() {
  const timeOptions = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
  ];
  const [trainId, setTrainId] = useState("");
  const [trainName, setTrainName] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedStation, setSelectedStation] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedStationsAndTimes, setSelectedStationsAndTimes] = useState([]);
  const [api, contextHolder] = notification.useNotification();

  const handleAddClick = async (e) => {
      try {
        e.preventDefault();
        const resposne = await axios.post(`${baseUrl}/train`, {
          trainNo: trainId,
          name: trainName,
          date: [selectedDay],
          stations: [{
            station: selectedStation,
            time: selectedTime
          }]
        });
        if (resposne) {
          api.info({
            message: "Train Added Successfully.",
            placement: 'topRight'
          });
        }
      }
      catch (error) {
        console.log(error);
        api.error({
          message: "Train Adding Failed",
          placement: 'topRight'
        });
      }
  };
  console.log(selectedTime, selectedStation);

  return (
    <div>
      {contextHolder}
      <Header />
      <div>
        <div className="flex-grow flex items-center justify-center">
          <div className="bg-white border rounded-xl p-10 my-20 flex flex-col">
            <div>
              <p className="flex items-center justify-center text-4xl font-bold mb-10">
                New Reservation
              </p>
            </div>
            <div className="flex justify-center">
              <form className="max-w-form items-center">
                <div>
                  <input
                    type="date"
                    placeholder="Select Date"
                    onChange={(e) => setTrainName(e.target.value)}
                    className="hover:text-[#FF5C00] p-2 rounded-md bg-[#ffffff] w-full font-inter font-normal h-12 placeholder-[#7A7A7A] mb-3 border border-[#E6E6E6]"
                  />
                </div>
                <div className="flex">
                  <select
                    value={selectedStation}
                    onChange={(e) => setSelectedStation(e.target.value)}
                    className="hover:text-[#FF5C00] p-2 rounded-md bg-[#ffffff] w-1/2 mr-4 font-inter font-normal h-12 placeholder-[#7A7A7A] mb-3 border border-[#E6E6E6]"
                  >
                    <option value="" disabled>
                      Select Start Station
                    </option>
                    <option value="AAA">AAA</option>
                    <option value="BBB">BBB</option>
                    <option value="CCC">CCC</option>
                  </select>

                  <select
                    value={selectedStation}
                    onChange={(e) => setSelectedStation(e.target.value)}
                    className="hover:text-[#FF5C00] p-2 rounded-md bg-[#ffffff] w-1/2 font-inter font-normal h-12 placeholder-[#7A7A7A] mb-3 border border-[#E6E6E6]"
                  >
                    <option value="" disabled>
                      Select End Station
                    </option>
                    <option value="AAA">AAA</option>
                    <option value="BBB">BBB</option>
                    <option value="CCC">CCC</option>
                  </select>
                </div>
                <div className="flex justify-center mt-5">
                  <button
                    className="px-5 py-2 bg-black text-white font-semibold hover:bg-[#FF5C00] rounded-3xl mr-2"
                    onClick={(e) => handleAddClick(e)}
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

export default CreateReservation;
