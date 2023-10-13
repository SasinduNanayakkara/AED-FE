import React, { useState } from "react";
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import TrainListCard from "../Components/TrainListCard";
import TrainDetails from "../Components/TrainDetailsCard";
import { useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../App";

function TrainList() {
    const [trainData, setTrainData] = useState([
        {
            id: 1,
            name: "Train 1",
            dates: ["Sun", "Sat"],
            stations: [
                { name: "Anuradhapura", time: "00.00AM" },
                { name: "Eppawala", time: "01.00AM" }
            ]
        },
        {
            id: 2,
            name: "Train 2",
            dates: ["Mon", "Tue"],
            stations: [
                { name: "Anuradhapura", time: "00.30AM" },
                { name: "Eppawala", time: "01.30AM" }
            ]
        },
    ]);

    const [selectedTrainId, setSelectedTrainId] = useState(null);
    const [selectedTrainName, setSelectedTrainName] = useState(null);
    const [selectDates, setSelectDates] = useState([]);
    const [selectStation, setSelectStation] = useState([{
        station: "",
        time: ""
    }]);
    const [response, setResponse] = useState([]);

    // Fetch train data from an API when the component mounts
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get(`${baseUrl}/train`);
                if (res) {
                    setResponse(res.data);
                    console.log(res.data);
                }
            }
            catch (error) {
                console.log(error);
            }
        }
        getData();
    }, []);

    // Handle a click on a train to display its details
    const handleTrainClick = (id, name, dates, station) => {
        setSelectedTrainId(id);
        setSelectedTrainName(name);
        setSelectDates(dates);
        setSelectStation(station);
    };
    console.log("sss", selectStation[0].station);
    return (
        <div>
            <Header />
            <div className='flex justify-center'>
                <p className='text-4xl font-bold my-10'>Train List</p>
            </div>
            <div className="flex flex-row px-28">
                <div className="w-1/3">
                    <div className="w-full p-4 rounded-xl" style={{ backgroundColor: '#F7F7F7' }}>
                        <div className="w-full flex justify-center mb-5">
                            <input
                                type='text'
                                placeholder='Search Train...'
                                className='px-4 py-2 border rounded-3xl hover:text-[#FF5C00] w-full'
                            />
                        </div>
                        <div className="flex flex-col overflow-y-scroll max-h-screen">
                            {response.map((train) => (
                                <div key={train.id}>
                                    <TrainListCard
                                        Name={train.name}
                                        dates={train.date}
                                        onClick={() => {
                                            handleTrainClick(train.trainNo, train.name, train.date, train.stations);
                                        }}
                                    />
                                    <div className="h-[1px] bg-[#D9D9D9] my-1 mx-2"></div>
                                </div>
                            ))}
                        </div>
                        <div className="w-full flex justify-center my-3">
                            <button
                                type="submit"
                                className="bg-black hover.bg-[#FF5C00] text-white font-bold py-2 px-4 rounded-3xl w-full"
                            >
                                New Train
                            </button>
                        </div>
                    </div>
                </div>
                <div className="h-screen w-[1px] mt-5 bg-[#D9D9D9] ml-5"></div>
                <div className="w-2/3">
                    <div className="w-full p-2 rounded-xl ml-5" style={{ backgroundColor: '#F7F7F7' }}>
                        <TrainDetails
                            Name={selectedTrainName}
                            dates={selectDates}
                            station={selectStation}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default TrainList;
