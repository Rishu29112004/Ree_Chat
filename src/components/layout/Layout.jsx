import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../custom/Navbar";
import Sidebar from "../custom/Sidebar";
import Contacts from "../screens/HomePage/Component/Contacts";

const Layout = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar - Always visible */}
      <Navbar
        onLoginClick={() => setLoginModal(true)}
        onSignupClick={() => setSignupModal(true)}
      />

      {/* Main Body - Grid Layout */}
      <div className="flex flex-1 w-full ">
        {/* Left Sidebar - Hidden on small screens */}
        <aside className="hidden md:block">
          <Sidebar />
        </aside>

        {/* Middle Content Area - Scrollable */}
        <main className="flex-1 ml-0 md:ml-[270px] overflow-y-auto bg-gray-100">
          <Outlet />
        </main>

        {/* Right Sidebar - Hidden on small/medium screens */}
        <aside className="w-[320px] border-l bg-white overflow-y-auto">
          <Contacts />
        </aside>


      </div>
      {loginModal && (
        <PopModal
          Component={<Login />}
          heading="Login Section"
          onCancel={() => setLoginModal(false)}
        />
      )}

      {/* Signup Modal */}
      {signupModal && (
        <PopModal
          Component={<Signup />}
          heading="Signup Section"
          onCancel={() => setSignupModal(false)}
        />
      )}
    </div>
  );
};

export default Layout;
