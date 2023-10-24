import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import axios from "axios";
import { Table, Tag, Modal, Button } from 'antd';
import { baseUrl } from "../App";
import { notification } from "antd";
import { useLocation } from "react-router-dom";

function UpdateReservation() {
 const columns = [
  {
    title: 'Train Name',
    dataIndex: 'trainName',
    key: 'name',
  },
  {
    title: 'Start Station',
    dataIndex: 'startStation',
    key: 'startStation',
  },
  {
    title: 'Start Station Time',
    dataIndex: 'startStationTime',
    key: 'startStationTime',
  },
  {
    title: 'End Station',
    dataIndex: 'endStation',
    key: 'endStation',
  },
  {
    title: 'End Station Time',
    dataIndex: 'endStationTime',
    key: 'endStationTime',
  }
  
 ];
 const location = useLocation();
 console.log("data", location.state);
//  const [nic, setNic] = useState(location.state.nic);
  const [stationsList, setStationsList] = useState([]);
  const [startStation, setStartStation] = useState("");
  const [endStation, setEndStation] = useState("");
  const [date, setDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [trainData, setTrainData] = useState([]);
  const [tableRecord, setTableRecord] = useState({});
  const [open, setOpen] = useState(false);
  const [getTrainData, setGetTrainData] = useState([{
    trainName: "",
    startStation: "",
    startStationTime: "",
    endStation: "",
    endStationTime: "",
  }]);

  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 30);
  const thirtyDaysLater = currentDate.toISOString().split("T")[0];

  useEffect(() => {
    const getTrainList = async () => {
      try {
        const response = await axios.get(`${baseUrl}/train/stationlist`);
        if(response) {
          console.log(response.data);
          setStationsList(response.data.stations);
        }
      }
      catch(error) {
        console.log(error);
      }
    }
    getTrainList();
  },[]);

//   console.log("train data", nic);

  const getFilteredTrains = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/train/filter`, {
        date: date,
        startStation: startStation,
        endStation: endStation
      });
      if (response) {
        console.log("ddd", response.data);
        // setTrainData(response.data);
        const newArray = response.data?.map((station) => {
          return {
            trainName: station.name,
            startStation: station.startStation.station,
            startStationTime: station.startStation.time,
            endStation: station.endStation.station,
            endStationTime: station.endStation.time,
            trainNumber: station.trainNo
          }
        });
        setTrainData(newArray);
      }
    }
    catch(error) {
      console.log(error);
    }
  };

  console.log(date, startStation, endStation);

  const modal = (record) => {
    Modal.confirm({
      title: 'Confirm',
      content: 'Confirm your reservation',
      footer: (_, { OkBtn, CancelBtn }) => (
        <>
          <Button danger onClick={() => handleCancel()}>Cancel</Button>
          <Button onClick={() => CreateReservation(record)} name="OK" shape="round" style={{background: "black", color: "white"}}>Confirm</Button>
        </>
      ),
    });
  }

  const CreateReservation = async (record) => {
    console.log("ok");
    handleCancel();
    try {
      const resposne = await axios.post(`${baseUrl}/reservation`, {
        // nic: nic,
        trainNumber: record.trainNumber,
        date: date,
        startStation: {
          station: record.startStation,
          time: record.startStationTime
        },
        endStation: {
          station: record.endStation,
          time: record.endStationTime
        }
      });
      if (resposne) {
        console.log(resposne.data);
      }
    }
    catch(error) {
      console.log(error);
    }
  }
  const showModal = (record) => {
    setOpen(true);
  };
  const handleOk = () => {
    CreateReservation();
    setOpen(false);

  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div>
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
                    min={new Date().toISOString().split("T")[0]}
                    //max is the date 30 days after today
                    max={thirtyDaysLater}
                    onChange={(e) => setDate(e.target.value)}
                    className=" p-2 rounded-md bg-[#ffffff] w-full font-inter font-normal h-12 placeholder-[#7A7A7A] mb-3 border border-[#E6E6E6]"
                  />
                </div>
                <div className="flex">
                  <select
                    value={startStation}
                    onChange={(e) => setStartStation(e.target.value)}
                    className=" p-2 rounded-md bg-[#ffffff] w-1/2 mr-4 font-inter font-normal h-12 placeholder-[#7A7A7A] mb-3 border border-[#E6E6E6]"
                  >
                    <option value="" disabled>
                      Select Start Station
                    </option>
                    {stationsList?.map((station) => (
                      <option value={station}>{station}</option>
                    ))}
                  </select>

                  <select
                    value={endStation}
                    onChange={(e) => setEndStation(e.target.value)}
                    className=" p-2 rounded-md bg-[#ffffff] w-1/2 font-inter font-normal h-12 placeholder-[#7A7A7A] mb-3 border border-[#E6E6E6]"
                  >
                    <option value="" disabled>
                      Select End Station
                    </option>
                    {stationsList?.map((station) => (
                      <option value={station}>{station}</option>
                    ))}
                    
                  </select>
                </div>
                <div className="flex justify-center mt-5">
                  {isLoading ?? (
                  <button
                    className="px-5 py-2 bg-black text-white font-semibold hover:bg-[#FF5C00] rounded-3xl mr-2"
                    // onClick={}
                  >
                    Add
                  </button>
                  )}
                  {isLoading !== true && (
                  <button
                    className="px-5 py-2 text-black font-semibold hover:bg-[#FF5C00] rounded-3xl border"
                    onClick={(e) => getFilteredTrains(e)}
                  >
                    Search Train
                  </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
          <div>
          <Table dataSource={trainData} columns={columns} onRow={(record, rowIndex) => {
            console.log("record", record);
            return{
              onClick: () => {
                setTableRecord(record);
                CreateReservation(record);
                // showModal();
              }
            }
          }} />
          
        </div>

        
      </div>
      <Footer />
      {/* <Modal
        open={open}
        title="Confirm Reservation"
        onOk={CreateReservation(tableRecord)}
        onCancel={handleCancel}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <Button>Custom Button</Button>
            <CancelBtn />
            <OkBtn />
          </>
        )}
      ></Modal> */}
      {/* {selectedStationsAndTimes.length > 0 && (
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
      )} */}
    </div>
  );
}

export default UpdateReservation;
