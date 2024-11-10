import { ChevronFirst, ChevronLast, LogOut, User } from "lucide-react";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const SidebarContext = createContext();

const Sidebar = ({ children }) => {
  const [expanded, setExpanded] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/"); // Navigate to the landing page
  };

  return (
    <aside className="sticky top-0 h-screen">
      <nav
        className={`h-full flex flex-col bg-white border-r shadow-sm transition-all duration-300 ease-in-out ${
          expanded ? "w-64" : "w-16"
        }`}
      >
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              expanded ? "w-8" : "w-0"
            }`}
            src="/bird.png"
            alt=""
          />
          <button
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-200"
            onClick={() => setExpanded((curr) => !curr)}
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <User
            size={35}
            className="self-center rounded-lg bg-gray-300 min-w-[35px]"
          />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all duration-300 ease-in-out ${
              expanded ? "w-40 ml-3" : "w-0"
            }`}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <button
              title="Logout"
              className="p-1.5 rounded-full hover:bg-gray-200"
              onClick={handleLogout}
            >
              <LogOut />
            </button>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export function SidebarItem({ icon, text, active, onClick }) {
  const { expanded } = useContext(SidebarContext);
  return (
    <li
      onClick={onClick}
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        active
          ? "bg-gradient-to-tr from-blue-200 to-blue-100 text-blue-600"
          : "hover:bg-blue-50 text-gray"
      }`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          expanded ? "w-40 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-blue-100 text-blue-600 text-sm
          invisible opacity-20 -translate-x-3 transition-all duration-300
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}

export default Sidebar;
