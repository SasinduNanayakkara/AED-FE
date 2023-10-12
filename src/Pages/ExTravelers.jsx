import React, { useState } from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Card, Typography } from "@material-tailwind/react";
import ViewMore from "../Assets/ViewMore.svg";
import ReactPaginate from 'react-paginate';
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

function ExTravelers() {
    const PAGE_SIZE = 5; 
    const TABLE_HEAD = ["Prefix", "First Name", "Second Name", "NIC", "Action"];

    const TABLE_ROWS = [
        {
            Prefix: "Mr.",
            FirstName: "Jhone",
            SecondName: "Smkth",
            NIC: "9920283793V"
        },
        {
            Prefix: "Mr.",
            FirstName: "Jhone",
            SecondName: "Smkth",
            NIC: "9920283793V"
        },
        {
            Prefix: "Mr.",
            FirstName: "Jhone",
            SecondName: "Smkth",
            NIC: "9920283793V"
        },
        {
            Prefix: "Mr.",
            FirstName: "Jhone",
            SecondName: "Smkth",
            NIC: "9920283793V"
        },
        {
            Prefix: "Mr.",
            FirstName: "Jhone",
            SecondName: "Smkth",
            NIC: "9920283793V"
        },
        {
            Prefix: "Mr.",
            FirstName: "Jhone",
            SecondName: "Smkth",
            NIC: "9920283793V"
        },
        {
            Prefix: "Mr.",
            FirstName: "Jhone",
            SecondName: "Smkth",
            NIC: "9920283793V"
        },
        {
            Prefix: "Mr.",
            FirstName: "Jhone",
            SecondName: "Smkth",
            NIC: "9920283793V"
        }
    ];

    const [active, setActive] = React.useState(1);
    const [showDropdown, setShowDropdown] = useState(false); 

    const getItemProps = (index) =>
    ({
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
            <div className='h-100'>
                <div className='px-28'>
                    <p className='text-4xl font-bold my-10'>Existing Travelers</p>
                    <div className='mb-4 flex items-center'>
                        <input
                            type='text'
                            placeholder='Search Travelers...'
                            className='px-4 py-2 border rounded-3xl w-2/4 hover:text-[#FF5C00]'
                        />
                        <div></div>
                        <div className='ml-auto'>
                            <button
                                className='px-4 py-2 bg-black text-white font-semibold hover:bg-[#FF5C00] rounded'
                                onClick={() => {
                                }}
                            >
                                New Traveler
                            </button>
                        </div>
                    </div>
                    <div>
                        <table className="w-full min-w-max table-auto text-left my-10">
                            <thead>
                                <tr>
                                    {TABLE_HEAD.map((head) => (
                                        <th
                                            key={head}
                                            className="border-b bg-[#F8F8F8] p-4"
                                        >
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
                                {TABLE_ROWS.map(({ Prefix, FirstName, SecondName, NIC, name }, index) => {
                                    const isLast = index === TABLE_ROWS.length - 1;
                                    const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

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
                                                    <a
                                                        href="#"
                                                        className="mr-2"
                                                        onClick={toggleDropdown}
                                                    >
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
                                })}
                            </tbody>
                        </table>
                        {/* Pagination */}
                        <div className="flex items-center gap-4 mb-10 flex justify-center ">
                            <Button
                                variant="text"
                                className={`flex items-center gap-2 rounded-full`}
                                onClick={prev}
                                disabled={active === 1}
                            >
                                <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
                            </Button>
                            <div className="flex items-center gap-2">
                                <IconButton {...getItemProps(1)} className={active === 1 ? 'bg-black text-white w-10 h-10 rounded-3xl shadow-xl' : ''}>1</IconButton>
                                <IconButton {...getItemProps(2)} className={active === 2 ? 'bg-black text-white w-10 h-10 rounded-3xl shadow-xl' : ''}>2</IconButton>
                                <IconButton {...getItemProps(3)} className={active === 3 ? 'bg-black text-white w-10 h-10 rounded-3xl shadow-xl' : ''}>3</IconButton>
                                <IconButton {...getItemProps(4)} className={active === 4 ? 'bg-black text-white w-10 h-10 rounded-3xl shadow-xl' : ''}>4</IconButton>
                                <IconButton {...getItemProps(5)} className={active === 5 ? 'bg-black text-white w-10 h-10 rounded-3xl shadow-xl' : ''}>5</IconButton>
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
            </div>
            <Footer />
        </div>
    );
}

export default ExTravelers;
