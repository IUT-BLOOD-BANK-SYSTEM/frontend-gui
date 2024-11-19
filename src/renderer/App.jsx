import { RouterProvider, createHashRouter } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Sign-up";
import Doctor from "./pages/Doctor";

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
    path: "/doctor",
    element: <Doctor />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
