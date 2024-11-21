import { RouterProvider, createHashRouter } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Sign-up";
import Dashboard from "./pages/Dashboard";

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
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
