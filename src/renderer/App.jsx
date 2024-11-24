import { RouterProvider, createHashRouter } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Sign-up";
import Dashboard from "./pages/Dashboard";
import Donation from "./pages/Donation";
import Notifications from "./pages/Notifications";
import History from "./pages/History";

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
    element: <Dashboard />,
    children: [
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
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
