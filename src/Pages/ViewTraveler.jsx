import React, { useRef, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Card, Typography } from "@material-tailwind/react";
import ViewMore from "../Assets/ViewMore.svg";
import { useLocation, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { baseUrl } from "../App";

function ViewTravelers() {
  const location = useLocation();
  const navigate = useNavigate();
  const PAGE_SIZE = 5;
  const TABLE_HEAD = ["Train Name", "Date", "Start station", "End Station"];
  const [isAllClicked, setIsAllClicked] = useState(true);
  const [isUpcomingCliked, setIsUpcomingClicked] = useState(true);
  const [isHistoryClicked, setIsHistoryClicked] = useState(false);
  const [firstName, setFirstName] = useState(location.state.firstName);
  const [lastName, setLastName] = useState(location.state.lastName);
  const [nic, setNic] = useState(location.state.nic);
  const [phone, setPhone] = useState(location.state.phone);
  const [email, setEmail] = useState(location.state.email);
  const [password, setPassword] = useState(location.state.password);
  const [isActive, setIsActive] = useState(location.state.isActive);
  const [user, setUser] = useState(location.state);

  const [tableData, setTableData] = useState([]);

  const currentTableData = useRef([]);
  const pastTableData = useRef([]);

  useEffect(() => {
    const fn = async () => {
      let res = await fetch(baseUrl + "/reservation/current/" + location?.state?.nic);
      let data = await res.json();

      currentTableData.current = [];
      data?.forEach(item => {
        currentTableData.current.push({
            name: item?.train?.name,
            date: item?.date,
            startStation: item?.startStation?.station,
            endStation: item?.endStation?.station,
        })
      })
      
      setTableData(currentTableData.current);

      res = await fetch(baseUrl + "/reservation/past/" + location?.state?.nic);
      data = await res.json();

      pastTableData.current = [];
      data?.forEach(item => {
        pastTableData.current.push({
            name: item?.train?.name,
            date: item?.date,
            startStation: item?.startStation?.station,
            endStation: item?.endStation?.station,
        })
      })
    }

    fn().catch(console.error);
  }, [])
  
  console.log("location", location.state);

  const handleUpdate = async (user) => {
    navigate("/updatetravel", {
      state: { user },
    });
  };

  const [active, setActive] = React.useState(1);
  const [showDropdown, setShowDropdown] = useState(false);

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "black",
    onClick: () => setActive(index),
    className: "rounded-full",
  });

  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  const handleUpcomingClick = () => {
    setIsUpcomingClicked((prevState) => !prevState);
    setIsAllClicked(false);
    setIsHistoryClicked(false);
    setTableData(currentTableData.current);
  };

  const handleHistorygClick = () => {
    setIsHistoryClicked((prevState) => !prevState);
    setIsAllClicked(false);
    setIsUpcomingClicked(false);
    setTableData(pastTableData.current);
  };

  return (
    <div>
      <Header></Header>
      <p className="flex items-center justify-center text-4xl font-bold mt-10">
        Details of Traveler
      </p>
      <div className="flex-grow flex items-center justify-center w-full">
        <div className="bg-[#F8F8F8] shadow-md rounded-xl p-10 max-w-10 m-10 flex flex-col">
          <div className="flex justify-between gap-6 mb-4">
            <div>
              <p className="font-semibold truncate ...">Name:</p>
              <p className="">{firstName + " " +  lastName}</p>
            </div>
            <div>
              <p className="font-semibold">NIC:</p>
              <p className="mr-10">{nic}</p>
            </div>
            <div className="mb-2">
              <p className="font-semibold">Phone:</p>
              <p>{phone}</p>
            </div>
            <div className="mb-2">
              <p className="font-semibold truncate ...">Email:</p>
              <p>{email}</p>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="px-4 py-1 bg-black text-white font-semibold hover:bg-[#FF5C00] rounded-3xl mr-2"
              onClick={() => handleUpdate(user)}
            >
              Edit
            </button>
            <button
              className="px-4 py-1 bg-[#FF5C00] text-white font-semibold hover:bg-[#FF5C00] rounded-3xl border"
              onClick={() => {}}
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      <div className="px-28">
        <div className="my-10 pcx flex flex-row">
          <span className="text-3xl font-bold">Current Reservations</span>
          <div className="ml-auto">
              <button
                className="px-4 py-2 bg-black text-white font-semibold hover:bg-[#FF5C00] rounded"
                onClick={() => {navigate("/createtravel")}}
              >
                New Reservation
              </button>
            </div>
        </div>
        <div className="mb-8">
          <button
            className={`font-inter font-semibold rounded-full px-4 py-2 text-sm ${
              isUpcomingCliked
                ? "bg-black text-white hover:bg-[#FF5C00] hover:text-white"
                : "text-black border-black border-2"
            } mr-5`}
            onClick={handleUpcomingClick}
          >
            Upcoming
          </button>
          <button
            className={`font-inter font-semibold rounded-full px-4 py-2 text-sm ${
              isHistoryClicked
                ? "bg-black text-white hover:bg-[#FF5C00] hover:text-white"
                : "text-black border-black border-2"
            } mr-5`}
            onClick={handleHistorygClick}
          >
            History
          </button>
        </div>

        <div>
          <table className="w-full min-w-max table-auto text-left my-10">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="border-b bg-[#F8F8F8] p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-semibold leading-none"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map(
                ({  name, date, startStation, endStation }, index) => {
                  const isLast = index === tableData.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={name}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {name}
                        </Typography>
                      </td>
                      <td className={date}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {date}
                        </Typography>
                      </td>
                      <td className={startStation}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {startStation}
                        </Typography>
                      </td>
                      <td className={endStation}>
                        <Typography
                          as="a"
                          href="#"
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {endStation}
                        </Typography>
                      </td>
                      <Actions classes={classes} />
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
          {/* Pagination */}
          <div className="flex items-center gap-4 mb-10 justify-center ">
            <Button
              variant="text"
              className={`flex items-center gap-2 rounded-full`}
              onClick={prev}
              disabled={active === 1}
            >
              <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              <IconButton
                {...getItemProps(1)}
                className={
                  active === 1
                    ? "bg-black text-white w-10 h-10 rounded-3xl shadow-xl"
                    : ""
                }
              >
                1
              </IconButton>
              <IconButton
                {...getItemProps(2)}
                className={
                  active === 2
                    ? "bg-black text-white w-10 h-10 rounded-3xl shadow-xl"
                    : ""
                }
              >
                2
              </IconButton>
              <IconButton
                {...getItemProps(3)}
                className={
                  active === 3
                    ? "bg-black text-white w-10 h-10 rounded-3xl shadow-xl"
                    : ""
                }
              >
                3
              </IconButton>
              <IconButton
                {...getItemProps(4)}
                className={
                  active === 4
                    ? "bg-black text-white w-10 h-10 rounded-3xl shadow-xl"
                    : ""
                }
              >
                4
              </IconButton>
              <IconButton
                {...getItemProps(5)}
                className={
                  active === 5
                    ? "bg-black text-white w-10 h-10 rounded-3xl shadow-xl"
                    : ""
                }
              >
                5
              </IconButton>
            </div>
            <Button
              variant="text"
              className={`flex items-center gap-2 rounded-full }`}
              onClick={next}
              disabled={active === 5}
            >
              <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mb-10">
        <button
          className="px-16 py-2 bg-black text-white font-semibold hover:bg-[#FF5C00] rounded-3xl"
          onClick={() => {}}
        >
          Add Reservation
        </button>
      </div>

      <Footer></Footer>
    </div>
  );
}

const Actions = ({ classes }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <td className={classes}>
      <div className="flex items-center">
        <span className="mr-2" onClick={() => setShowDropdown(true)}>
          <img
            src={ViewMore}
            alt="ViewMore Icon"
            className="w-4 h-4"
          />
        </span>
        {/* Dropdown menu */}
        {showDropdown && (
          <div className="absolute right-0 mt-4 w-40 bg-white border rounded shadow-lg">
            <ul>
              <li className="px-4 py-2 cursor-pointer hover:bg-gray-200">
                Edit
              </li>
              <li className="px-4 py-2 cursor-pointer hover:bg-gray-200">
                Delete
              </li>
              <li className="px-4 py-2 cursor-pointer hover:bg-gray-200" onClick={() => setShowDropdown(false)}>
                Cancel
              </li>
            </ul>
          </div>
        )}
      </div>
    </td>
  )
}

export default ViewTravelers;
