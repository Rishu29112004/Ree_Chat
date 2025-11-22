import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../custom/Navbar";

const ProfileLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default ProfileLayout;
