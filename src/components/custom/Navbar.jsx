import React, { useEffect, useState } from "react";
import {
  Search,
  Bell,
  House,
  Group,
  TvMinimalPlay,
  UsersRoundIcon,
  Menu,
  UserRoundPen,
  X,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MobileSidebar from "./MobileSidebar";
import PopModal from "./PopModal";
import Login from "../screens/Authentication/Login";
import Signup from "../screens/Authentication/Signup";
import { ProfilePageData } from "../screens/ProfileDetails/ProfilePageData";

const Navbar = () => {
  const location = useLocation();
  const navigate=useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setSuggestions([]);
      return;
    }
    const q = searchTerm.trim().toLowerCase(); // Roh=> rohi ,roh, roh ,roh
    const filtered = ProfilePageData
      .filter((f) => f.name.toLowerCase().includes(q)) //' rohit.incudes(rohit)
      .slice(0, 6);
    setSuggestions(filtered);
  }, [searchTerm]);

  const handleSuggestionClick = (friend) => {
    setSearchTerm("");
    setSuggestions([]);
    navigate(`/friend/${friend.id}`);
  };

  return (
    <>
      <header className="bg-white shadow-lg h-16 sticky top-0 z-50">
        <div className="max-w-[1920px] mx-auto flex items-center justify-between px-4 md:px-8 h-full">
          {/* Left */}
          <div className="flex items-center gap-3 md:gap-5 flex-1 md:flex-none md:w-[33%] relative">
            <Link
              to="/"
              className="text-xl md:text-3xl font-mono font-bold text-slate-800 select-none"
            >
              REE<span className="text-[#0CAF60]">CHAT</span>
            </Link>

            {/* SEARCH BAR */}
            <div className="hidden lg:flex flex-col relative">
              <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 w-48">
                <Search size={18} className="text-gray-500" />
                <input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  type="text"
                  placeholder="Search people..."
                  className="bg-transparent outline-none text-sm pl-2 w-full text-gray-700"
                />
              </div>

              {/* Suggestion Dropdown */}
              {suggestions.length > 0 && (
                <div className="absolute top-11 right-0 w-55 bg-white border rounded-md border-gray-100 shadow-black/50 shadow-md z-50">
                  {suggestions.map((s) => (
                    <div
                      key={s.id}
                      onClick={() => handleSuggestionClick(s)}
                      className="flex hover:bg-green-500 items-center gap-2 px-3 py-2 cursor-pointer rounded-md"
                    >
                      <img
                        src={s.profileImg}
                        alt={s.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-sm text-slate-800">{s.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Center nav */}
          <nav className="hidden md:flex flex-1 justify-around lg:gap-8">
            <Link to="/" className="group relative">
              <House
                className={`hover:text-[#0CAF60] transition-colors ${
                  location.pathname === "/"
                    ? "text-[#0CAF60]"
                    : "text-slate-800"
                }`}
                size={28}
              />
              {location.pathname === "/" && (
                <div className="absolute -bottom-4 left-0 right-0 h-1 bg-[#0CAF60] rounded-t-lg" />
              )}
            </Link>

            <Link to="/friend" className="group relative">
              <UsersRoundIcon
                className={`hover:text-[#0CAF60] transition-colors ${
                  location.pathname === "/friend"
                    ? "text-[#0CAF60]"
                    : "text-slate-800"
                }`}
                size={28}
              />
              {location.pathname === "/friend" && (
                <div className="absolute -bottom-4 left-0 right-0 h-1 bg-[#0CAF60] rounded-t-lg" />
              )}
            </Link>

            <Link to="/video" className="group relative">
              <TvMinimalPlay
                className={`hover:text-[#0CAF60] transition-colors ${
                  location.pathname === "/video"
                    ? "text-[#0CAF60]"
                    : "text-slate-800"
                }`}
                size={28}
              />
              {location.pathname === "/video" && (
                <div className="absolute -bottom-4 left-0 right-0 h-1 bg-[#0CAF60] rounded-t-lg" />
              )}
            </Link>

            <Link to="/saved" className="group relative">
              <Group
                className={`hover:text-[#0CAF60] transition-colors ${
                  location.pathname === "/saved"
                    ? "text-[#0CAF60]"
                    : "text-slate-800"
                }`}
                size={28}
              />
              {location.pathname === "/saved" && (
                <div className="absolute -bottom-4 left-0 right-0 h-1 bg-[#0CAF60] rounded-t-lg" />
              )}
            </Link>
          </nav>

          {/* Right */}
          <div className="flex items-center justify-end gap-3 md:gap-5 md:w-[33%]">
            <button className="hidden md:block p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Bell size={24} className="text-slate-800" />
            </button>

            <button
              onClick={() => setLoginModal(true)}
              className="hidden md:block p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <UserRoundPen size={24} className="text-slate-800" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <MobileSidebar
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          location={location}
        />
      )}

      {/* Login Modal */}
      {loginModal && (
        <PopModal
          Component={
            <Login
              onSignupClick={() => {
                setLoginModal(false);
                setSignupModal(true);
              }}
            />
          }
          onCancel={() => setLoginModal(false)}
          heading="Login Section"
        />
      )}

      {/* Signup Modal */}
      {signupModal && (
        <PopModal
          Component={
            <Signup
              onLoginClick={() => {
                setSignupModal(false);
                setLoginModal(true);
              }}
            />
          }
          onCancel={() => setSignupModal(false)}
          heading="Sign-up Section"
        />
      )}
    </>
  );
};

export default Navbar;
