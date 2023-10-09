import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Card, Typography } from "@material-tailwind/react";
import ViewMore from "../Assets/ViewMore.svg";
import ReactPaginate from "react-paginate";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

function ViewTravelers() {
  const PAGE_SIZE = 5;
  const TABLE_HEAD = ["Prefix", "First Name", "Second Name", "NIC", "Action"];
  const [isAllClicked, setIsAllClicked] = useState(true);
  const [isUpcomingCliked, setIsUpcomingClicked] = useState(false);
  const [isHistoryClicked, setIsHistoryClicked] = useState(false);

  const TABLE_ROWS = [
    {
      Prefix: "Mr.",
      FirstName: "Jhone",
      SecondName: "Smkth",
      NIC: "9920283793V",
    },
    {
      Prefix: "Mr.",
      FirstName: "Jhone",
      SecondName: "Smkth",
      NIC: "9920283793V",
    },
    {
      Prefix: "Mr.",
      FirstName: "Jhone",
      SecondName: "Smkth",
      NIC: "9920283793V",
    },
    {
      Prefix: "Mr.",
      FirstName: "Jhone",
      SecondName: "Smkth",
      NIC: "9920283793V",
    },
    {
      Prefix: "Mr.",
      FirstName: "Jhone",
      SecondName: "Smkth",
      NIC: "9920283793V",
    },
    {
      Prefix: "Mr.",
      FirstName: "Jhone",
      SecondName: "Smkth",
      NIC: "9920283793V",
    },
    {
      Prefix: "Mr.",
      FirstName: "Jhone",
      SecondName: "Smkth",
      NIC: "9920283793V",
    },
    {
      Prefix: "Mr.",
      FirstName: "Jhone",
      SecondName: "Smkth",
      NIC: "9920283793V",
    },
  ];

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

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleAllClick = () => {
    setIsAllClicked((prevState) => !prevState);
    setIsUpcomingClicked(false);
    setIsHistoryClicked(false);
  };

  const handleUpcomingClick = () => {
    setIsUpcomingClicked((prevState) => !prevState);
    setIsAllClicked(false);
    setIsHistoryClicked(false);
  };

  const handleHistorygClick = () => {
    setIsHistoryClicked((prevState) => !prevState);
    setIsAllClicked(false);
    setIsUpcomingClicked(false);
  };

  return (
    <div>
      <Header></Header>
      <p className="flex items-center justify-center text-4xl font-bold mt-10">
        Details of Traveler
      </p>
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-[#F8F8F8] shadow-md rounded-xl p-10 max-w-md m-10 flex flex-col">
          <div className="flex justify-between mb-4">
            <div>
              <p className="font-semibold">Name:</p>
              <p className="">Miss. Shavidini Ekanayake</p>
            </div>
            <div>
              <p className="font-semibold">NIC:</p>
              <p className="mr-10">996521788V</p>
            </div>
            <div className="mb-2">
              <p className="font-semibold">Phone:</p>
              <p>+94703009912</p>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="px-4 py-1 bg-black text-white font-semibold hover:bg-[#FF5C00] rounded-3xl mr-2"
              onClick={() => {}}
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
        <p className="text-3xl font-bold my-10 pcx">Current Reservations</p>

        <div className="mb-8">
          <button
            className={`font-inter font-semibold rounded-full px-4 py-2 text-sm ${
              isAllClicked
                ? "bg-black text-white hover:bg-[#FF5C00] hover:text-white"
                : "text-black border-black border-2"
            } mr-5`}
            onClick={handleAllClick}
          >
            All
          </button>
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
              {TABLE_ROWS.map(
                ({ Prefix, FirstName, SecondName, NIC, name }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
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
                          {Prefix}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {FirstName}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {SecondName}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          as="a"
                          href="#"
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {NIC}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="flex items-center">
                          <a href="#" className="mr-2" onClick={toggleDropdown}>
                            <img
                              src={ViewMore}
                              alt="ViewMore Icon"
                              className="w-4 h-4"
                            />
                          </a>
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
                              </ul>
                            </div>
                          )}
                        </div>
                      </td>
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

export default ViewTravelers;
