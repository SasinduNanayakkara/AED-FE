import React from 'react'
import { Card, Typography } from "@material-tailwind/react";

function TrainDetailsCard({ Name, dates, Station, time }) {
    const TABLE_HEAD = ["Station", "Time"];
    return (
        <>
            <div className=' flex-col px-4 w-full'>
                {/* <div className='flex justify-center items-center mt-1'>
                    
                </div> */}
                <h1 className='font-bold text-xl '>
                    {Name}
                </h1>
                <h5 className='text-[#8B8B8B] font-semibold'>{dates}</h5>
                <div>
                    <table className="w-full min-w-max table-auto text-left my-10">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th
                                        key={head}
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
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default TrainDetailsCard