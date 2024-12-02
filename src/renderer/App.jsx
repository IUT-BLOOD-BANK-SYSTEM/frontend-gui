import { RouterProvider, createHashRouter } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Sign-up";
import Dashboard from "./pages/Dashboard";
import Donation from "./pages/Donation";
import Notifications from "./pages/Notifications";
import History from "./pages/History";
import DashboardLayout from "./pages/DashboardLayout";
import BloodBank from "./pages/Bloodbank";
import ErrorPage from "./pages/Error";
import Appointments from "./pages/Appointments";
import RequestBlood from "./pages/RequestBlood";

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
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "donation",
        element: <Donation />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "bloodbank",
        element: <BloodBank />,
      },
      {
        path: "request",
        element: <RequestBlood />,
      },
      {
        path: "settings",
        element: <h1>Settings</h1>,
      },
      {
        path: "appointments",
        element: <Appointments />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
