import { RouterProvider, createHashRouter } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Sign-up";
import Role from "./pages/Role";

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
    path: "/role",
    element: <Role />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
