import React from "react";
import { Card, Typography } from "@material-tailwind/react";

function TrainDetailsCard({ Name, dates, station }) {
  const TABLE_HEAD = ["Station", "Time"];
  console.log("dates", station);
  return (
    <>
      <div className=" flex-col px-4 w-full">
        {/* <div className='flex justify-center items-center mt-1'>
                    
                </div> */}
        <h1 className="font-bold text-xl ">{Name}</h1>
        {dates.map((date) => (
          <span className="text-[#8B8B8B] font-semibold">{date} | </span>
        ))}
        <div>
          <table className="w-full min-w-max table-auto text-left my-10">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="border-b bg-white p-4 rounded-md">
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
              {station?.map((station) => (
                <tr>
                  <td>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="p-4 border-b border-blue-gray-50 text-center"
                    >{station.station}</Typography>
                  </td>
                  <td>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="p-4 border-b border-blue-gray-50 text-center"
                    >{station.time}</Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default TrainDetailsCard;
