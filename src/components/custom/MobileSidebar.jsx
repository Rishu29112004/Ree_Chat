import React from 'react'
import { Search, Bell, House, Group, TvMinimalPlay, UsersRoundIcon, UserRoundPen } from "lucide-react";
import { Link } from "react-router-dom";

const MobileSidebar = (props) => {
  return (
    <div className="md:hidden fixed inset-0 top-16 bg-black/50 z-40" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="bg-white  w-64 h-full shadow-lg p-4" onClick={(e) => e.stopPropagation()}>
                    

                        {/* Mobile Navigation */}
                        <nav className="flex flex-col gap-2">
                            <Link 
                                to="/" 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`flex items-center gap-3 p-3 rounded-lg ${
                                    location.pathname === "/" ? "bg-[#0CAF60] text-white" : "hover:bg-gray-100"
                                }`}
                            >
                                <House size={24} />
                                <span className="font-mono font-semibold">Home</span>
                            </Link>
                            <Link 
                                to="/friend" 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`flex items-center gap-3 p-3 rounded-lg ${
                                    location.pathname === "/friend" ? "bg-[#0CAF60] text-white" : "hover:bg-gray-100"
                                }`}
                            >
                                <UsersRoundIcon size={24} />
                                <span className="font-mono font-semibold">Friends</span>
                            </Link>
                            <Link 
                                to="/video" 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`flex items-center gap-3 p-3 rounded-lg ${
                                    location.pathname === "/video" ? "bg-[#0CAF60] text-white" : "hover:bg-gray-100"
                                }`}
                            >
                                <TvMinimalPlay size={24} />
                                <span className="font-mono font-semibold">Videos</span>
                            </Link>
                            <Link 
                                to="/saved" 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`flex items-center gap-3 p-3 rounded-lg ${
                                    location.pathname === "/saved" ? "bg-[#0CAF60] text-white" : "hover:bg-gray-100"
                                }`}
                            >
                                <Group size={24} />
                                <span className="font-mono font-semibold">Saved</span>
                            </Link>
                        </nav>

                        <hr className="my-4 border-gray-300" />

                        {/* Mobile Actions */}
                        <div className="flex flex-col gap-2">
                            <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100">
                                <Bell size={24} />
                                <span className="font-mono font-semibold">Notifications</span>
                            </button>
                            <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100">
                                <UserRoundPen size={24} />
                                <span className="font-mono font-semibold">Profile</span>
                            </button>
                        </div>
                    </div>
                </div>
  )
}

export default MobileSidebar