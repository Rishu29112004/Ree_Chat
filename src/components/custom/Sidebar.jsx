import { UserRoundPen, BrainCog, UsersRound, TvMinimalPlay, Group } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { name: "Profile", icon: UserRoundPen, path: "/" },
  { name: "Meta AI", icon: BrainCog, external: "https://www.meta.ai/" },
  { name: "Friends", icon: UsersRound, path: "/friend" },
  { name: "Video", icon: TvMinimalPlay, path: "/video" },
  { name: "saved", icon: Group, path: "/saved" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-[270px] h-full fixed top-16  bg-white shadow-sm">
      <div className="flex flex-col gap-2 pt-6 px-4 pb-4">
        {menuItems.map((item) =>  {
          const isActive = location.pathname === item.path;

          // ✅ If external link
          if (item.external) {
            return (
              <a
                key={item.name}
                href={item.external}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 text-slate-800"
              >
                <item.icon size={28} />
                <p className="font-semibold font-mono text-base">{item.name}</p>
              </a>
            );
          }
        
        
        
        
        
        
        return(
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
              location.pathname === item.path
                ? "bg-[#0CAF60] text-white shadow-md"
                : "hover:bg-gray-100 text-slate-800"
            }`}
          >
            <item.icon
              className={`${
                location.pathname === item.path ? "text-white" : "text-slate-700"
              }`}
              size={28}
            />
            <p
              className={`font-semibold font-mono text-base ${
                location.pathname === item.path ? "text-white" : "text-slate-800"
              }`}
            >
              {item.name}
            </p>
          </Link>
        )})}
      </div>
    </div>
  );
}
