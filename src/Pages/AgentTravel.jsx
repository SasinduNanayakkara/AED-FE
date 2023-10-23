import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Table, Tag } from 'antd';
import { Card, Typography } from "@material-tailwind/react";
import ViewMore from "../Assets/ViewMore.svg";
import ReactPaginate from "react-paginate";
import { IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { baseUrl } from "../App";
import { useNavigate } from "react-router-dom";


import {
  BorderBottomOutlined,
  BorderTopOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
} from '@ant-design/icons';
import { Button, Divider, notification, Space } from 'antd';

function ExistingTravelers() {
  const PAGE_SIZE = 5;
  const TABLE_HEAD = ["First Name", "Last Name", "NIC", "Action"];

  const navigate = useNavigate();
  const [active, setActive] = React.useState(1);
  const [showDropdown, setShowDropdown] = useState(false);
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`${baseUrl}/client`);
        if (res) {
          console.log(res.data);
          setResponse(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  console.log("data:", response);

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'NIC',
      dataIndex: 'nic',
      key: 'nic',
    }
  ];

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

  return (
    <div>
      <Header />
      <div className="h-100">
        <div className="px-28">
          <p className="text-4xl font-bold my-10">Existing Travelers</p>
          <div className="mb-4 flex items-center">
            <input
              type="text"
              placeholder="Search Travelers..."
              className="px-4 py-2 border rounded-3xl w-2/4 hover:text-[#FF5C00]"
            />
            <div></div>
            <div className="ml-auto">
              <button
                className="px-4 py-2 bg-black text-white font-semibold hover:bg-[#FF5C00] rounded"
                onClick={() => {navigate("/createtravel")}}
              >
                New Traveler
              </button>
            </div>
          </div>
          <div>
            <Table dataSource={response} columns={columns} onRow={(record, rowIndex) => {
              console.log(record);
              return{
                onClick: () => navigate("/viewtraveler", {state: {id: record.id, firstName: record.firstName, lastName: record.lastName, nic: record.nic, password: record.password, email: record.email, phone: record.phone, isActive: record.isActive}})
              }
            }} />
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ExistingTravelers;
