import React, { useState } from "react";
import {
  House,
  Building2,
  CircleDollarSign,
  LifeBuoy,
  Settings,
} from "lucide-react";
import Sidebar, { SidebarItem } from "../components/Sidebar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const HomeLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeItem, setActiveItem] = useState("Home");

  const handleItemClick = (itemText, itemPath) => {
    setActiveItem(itemText);

    navigate(itemPath);
  };

  const sidebarItems = [
    { icon: <House size={20} />, text: "Home", path: "." },
    { icon: <Building2 size={20} />, text: "Companies", path: "companies" },
    { icon: <CircleDollarSign size={20} />, text: "Deposit", path: "deposit" },
    { icon: <Settings size={20} />, text: "Settings", path: "settings" },
    { icon: <LifeBuoy size={20} />, text: "Help", path: "help" },
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar>
        {sidebarItems.map((item, index) => (
          <React.Fragment key={item.text}>
            {index === 3 && <hr className="my-3" />}
            <SidebarItem
              icon={item.icon}
              text={item.text}
              active={activeItem === item.text}
              onClick={() => handleItemClick(item.text, item.path)}
            />
          </React.Fragment>
        ))}
      </Sidebar>
      <main className="flex-1 overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayout;
