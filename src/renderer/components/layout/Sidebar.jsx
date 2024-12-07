import { Link } from "react-router-dom";
import {
  House,
  CirclePlus,
  MessageSquareDot,
  History,
  Settings,
  LogOut,
  DatabaseIcon,
  Calendar,
  User,
  HospitalIcon,
  BriefcaseMedicalIcon,
} from "lucide-react";
import { useLocation } from "react-router-dom";

const sharedRoutes = {
  home: { name: "Home", icon: <House />, path: "/dashboard" },
  profile: {
    name: "User Profile",
    icon: <Settings />,
    path: "/dashboard/settings",
  },
  notifications: {
    name: "Notifications",
    icon: <MessageSquareDot />,
    path: "/dashboard/notifications",
  },
  history: { name: "History", icon: <History />, path: "/dashboard/history" },
};

export const navItems = {
  user: [
    sharedRoutes.home,
    { name: "Donate", icon: <CirclePlus />, path: "/dashboard/donation" },
    sharedRoutes.notifications,
    sharedRoutes.history,
    sharedRoutes.profile,
  ],
  doctor: [
    sharedRoutes.home,
    { name: "Request Blood", icon: <CirclePlus />, path: "/dashboard/request" },
    sharedRoutes.notifications,
    sharedRoutes.history,
    sharedRoutes.profile,
  ],
  headNurse: [
    sharedRoutes.home,
    {
      name: "Blood Bank",
      icon: <DatabaseIcon />,
      path: "/dashboard/bloodbank",
    },
    sharedRoutes.notifications,
    {
      name: "Appointments",
      icon: <Calendar />,
      path: "/dashboard/appointments",
    },
    sharedRoutes.history,
    sharedRoutes.profile,
  ],
  admin: [
    sharedRoutes.home,
    { name: "Users", icon: <User />, path: "/dashboard/users" },
    { name: "Doctors", icon: <HospitalIcon />, path: "/dashboard/doctors" },
    {
      name: "Head nurses",
      icon: <BriefcaseMedicalIcon />,
      path: "/dashboard/head-nurses",
    },
  ],
};

export const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const role = localStorage.getItem("storedData") || "user";
  const roleNavItems = navItems[role];

  const renderNavItem = (item, index) => (
    <li
      key={index}
      className={`px-6 py-4 rounded-lg ${
        currentPath === item.path ? "bg-secondary" : "bg-transparent"
      } hover:bg-secondary transition-colors duration-300`}
    >
      <Link
        to={item.path}
        className="flex items-center space-x-2 text-lg font-semibold"
      >
        {item.icon}
        <span>{item.name}</span>
      </Link>
    </li>
  );

  return (
    <aside className="w-[325px] h-screen gap-10 sticky top-0 px-10 py-[60px] flex flex-col justify-between">
      <div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Hi, Name!</h2>
          <p className="font-semibold">
            Tech. support: <br /> +998 (90) 123-45-67
          </p>
        </div>
        <nav>
          <ul className="flex flex-col space-y-3">
            {roleNavItems.map((item, index) => renderNavItem(item, index))}
          </ul>
        </nav>
      </div>
      <Link to="/">
        <button type="button" className="flex space-x-2 text-secondary">
          <LogOut />
          <span>Log Out</span>
        </button>
      </Link>
    </aside>
  );
};
