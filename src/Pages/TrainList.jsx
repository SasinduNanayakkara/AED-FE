import React, { useState } from "react";
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import TrainListCard from "../Components/TrainListCard";
import TrainDetails from "../Components/TrainDetailsCard";

function TrainList() {
    const [trainData, setTrainData] = useState([
        {
            id: 1,
            name: "Train 1",
            dates: ["Sun", "Sat"],
            station: "Anuradhapura, Eppawala",
            time: "00.00AM"
        },
        {
            id: 2,
            name: "Train 2",
            dates: ["Mon", "Tue"],
            station: "Anuradhapura, Eppawala",
            time: "00.00AM"
        },
    ]);

    const [selectedTrainId, setSelectedTrainId] = useState(null);
    const [selectedTrainName, setSelectedTrainName] = useState(null);
    const [selectDates, setSelectDates] = useState([]);
    const [selectStation, setSelectStation] = useState(null);
    const [selectTime, setSelectTime] = useState(null);

    const handleTrainClick = (id, name, dates, station, time) => {
        setSelectedTrainId(id);
        setSelectedTrainName(name);
        setSelectDates(dates);
        setSelectStation(station);
        setSelectTime(time);
    };

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
                            {trainData.map((train) => (
                                <div key={train.id}>
                                    <TrainListCard
                                        Name={train.name}
                                        dates={train.dates}
                                        onClick={() => {
                                            handleTrainClick(train.id, train.name, train.dates, train.station, train.time);
                                        }}
                                    />
                                    <div className="h-[1px] bg-[#D9D9D9] my-1 mx-2"></div>
                                </div>
                            ))}
                        </div>
                        <div className="w-full flex justify-center my-3">
                            <button
                                type="submit"
                                className="bg-black hover.bg-[#FF5C00] text-white font.bold py-2 px-4 rounded-3xl w-full"
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
                            time={selectTime}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default TrainList;
