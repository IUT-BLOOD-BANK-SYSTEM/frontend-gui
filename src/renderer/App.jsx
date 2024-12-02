import { RouterProvider, createHashRouter } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Sign-up";
import Dashboard from "./pages/Dashboard";
import RequestBlood from "./pages/RequestBlood";
import Donation from "./pages/Donation";
import DoctorNotifications from "./components/Notifications/DoctorNotifications";
import History from "./pages/History";
import DashboardLayout from "./pages/DashboardLayout";
import BloodBank from "./pages/Bloodbank";
import ErrorPage from "./pages/Error";
import Appointments from "./pages/Appointments";

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
        path: "notifications",
        element: <DoctorNotifications />,
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
      {
        path: "donation",
        element: <Donation />,
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
