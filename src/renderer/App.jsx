import { RouterProvider, createHashRouter } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Sign-up";
import Dashboard from "./pages/Dashboard";
import Request from "./components/RequestBlood/Request";
import Donation from "./pages/Donation";
import DoctorNotifications from "./components/Notifications/DoctorNotifications";
import History from "./pages/History";
import DashboardLayout from "./pages/DashboardLayout";

const router = createHashRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "request",
        element: <Request />,
      },
      {
        path: "notifications",
        element: <DoctorNotifications />,
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "settings",
        element: <h1>Settings</h1>,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
