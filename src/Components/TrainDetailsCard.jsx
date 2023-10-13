import React from 'react';
import { Card, Typography } from "@material-tailwind/react";

function TrainDetailsCard({ Name, dates, stations }) {
    const TABLE_HEAD = ["Station", "Time"];

    return (
        <div className='flex-col px-4 w-full relative'>
            <h1 className='font-bold text-xl'>{Name}</h1>

            <h5 className='text-[#8B8B8B] font-semibold'>
                Dates: {dates.join(', ')}
            </h5>

            <div>
                <table className="w-full min-w-max table-auto text-left my-10">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head, index) => (
                                <th
                                    key={index}
                                    className="border-b bg-white p-4 rounded-md"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-semibold leading-none flex justify-center"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {stations?.map((station, index) => (
                            <tr key={index}>
                                <td className="border-b p-4 text-center align-middle">{station.name}</td>
                                <td className="border-b p-4 text-center align-middle">{station.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="absolute top-0 right-0 mt-2 mr-2">
                    <button
                        className="px-4 py-1 bg-black text-white font-semibold hover:bg-[#FF5C00] rounded-3xl mr-2"
                        onClick={() => {  }}
                    >
                        Edit
                    </button>
                    <button
                        className="px-4 py-1 bg-[#FF5C00] text-white font-semibold hover:border-black hover:bg-[#D9D9D9] hover:text-black rounded-3xl border-2"
                        onClick={() => {  }}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TrainDetailsCard;
