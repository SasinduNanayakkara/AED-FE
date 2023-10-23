import React, { useEffect, useRef, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Card, Typography, alert } from "@material-tailwind/react";
import ViewMore from "../Assets/ViewMore.svg";
import ReactPaginate from "react-paginate";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { baseUrl } from "../App";
import { useNavigate } from "react-router-dom";
import { Table, notification } from "antd";

function ExTravelers() {
  const PAGE_SIZE = 5;
  const TABLE_HEAD = ["First Name", "Last Name", "NIC", "Action"];

  const navigate = useNavigate();
  const [active, setActive] = React.useState(1);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isUpcomingCliked, setIsUpcomingClicked] = useState(true);
  const [isHistoryClicked, setIsHistoryClicked] = useState(false);
  const [isAllClicked, setIsAllClicked] = useState(true);
  const [api, contextHolder] = notification.useNotification();

  const responseData = useRef([]);

  const [response, setResponse] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`${baseUrl}/client`);
        if (res) {
          console.log(res.data);
          responseData.current = res.data;

          setIsUpcomingClicked((prevState) => !prevState);
          setIsAllClicked(false);
          setIsHistoryClicked(false);
          setResponse(responseData.current.filter((v) => v.isActive));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  console.log("data:", response);

  const handleUpdate = async (
    id,
    firstName,
    lastName,
    nic,
    password,
    email,
    phone,
    isActive
  ) => {
    navigate("/updatetravel", {
      state: { id, firstName, lastName, nic, password, email, phone, isActive },
    });
  };

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

  const handleActivatedClick = () => {
    setIsUpcomingClicked((prevState) => !prevState);
    setIsAllClicked(false);
    setIsHistoryClicked(false);
    setResponse(responseData.current.filter((v) => v.isActive));
  };

  const handleDeactivatedClick = () => {
    setIsHistoryClicked((prevState) => !prevState);
    setIsAllClicked(false);
    setIsUpcomingClicked(false);
    setResponse(responseData.current.filter((v) => !v.isActive));
    // setTableData(pastTableData.current);
  };

  const handleAllClicked = () => {
    setIsUpcomingClicked(false);
    setIsHistoryClicked(false);
    setIsAllClicked((prevState) => !prevState);
    setResponse(responseData.current);
  };

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "NIC",
      dataIndex: "nic",
      key: "nic",
    },
  ];

  return (
    <div>
      {contextHolder}
      <Header />
      <div className="h-100">
        <div className="px-28">
          <p className="text-4xl font-bold my-10">Existing Travelers</p>
          <div className="flex flex-row justify-between">
            <div className="mb-8">
              <button
                className={`font-inter font-semibold rounded-full px-4 py-2 text-sm hidden ${
                  isAllClicked
                    ? "bg-black text-white hover:bg-[#FF5C00] hover:text-white"
                    : "text-black border-black border-2"
                } mr-5`}
                onClick={handleAllClicked}
              >
                All
              </button>
              <button
                className={`font-inter font-semibold rounded-full px-4 py-2 text-sm ${
                  isUpcomingCliked
                    ? "bg-black text-white hover:bg-[#FF5C00] hover:text-white"
                    : "text-black border-black border-2"
                } mr-5`}
                onClick={handleActivatedClick}
              >
                Activated
              </button>
              <button
                className={`font-inter font-semibold rounded-full px-4 py-2 text-sm ${
                  isHistoryClicked
                    ? "bg-black text-white hover:bg-[#FF5C00] hover:text-white"
                    : "text-black border-black border-2"
                } mr-5`}
                onClick={handleDeactivatedClick}
              >
                Deactivated
              </button>
            </div>
            <div className="flex-grow"></div>
            <div className="mb-4 flex">
              <input
                type="text"
                placeholder="Search Travelers..."
                className="px-4 py-2 border rounded-3xl w-2/4 hover:text-[#FF5C00]"
                size={100}
              />
            </div>
          </div>
          <div>
            <Table
              dataSource={response}
              columns={columns}
              onRow={(record, rowIndex) => {
                console.log(record);
                return {
                  onClick: async () => {
                    try {
                      const path = !record.isActive ? "activate" : "deactivate";
                      const res = await axios.get(`${baseUrl}/client/${path}/${record.nic}`);

                      if(res.status == 200) {
                        api.info({
                          message: "User updated.",
                          placement: "topRight"
                        })

                        setTimeout(() => {
                          navigate(0);
                        }, 2000)
                        return
                      }

                      api.error({
                        message: "User update failed.",
                        placement: "topRight"
                      })
                    }catch(e) {
                      console.error(e);
                    }
                  }
                }
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ExTravelers;
