import React from "react";

function Footer() {
  return (
    <div className="flex flex-col items-center">
      {/* Copyright notice with year and organization name */}
      <p className="p-2 text-[#B3B3B3] text-center">
        Copyright 2023 © SLIIT. All Rights Reserved. Concept designed and developed by ABC
      </p>
      {/* A black bar at the bottom of the footer */}
      <div className="bg-black text-white w-full content-center h-10"></div>
    </div>
  );
}

export default Footer;
