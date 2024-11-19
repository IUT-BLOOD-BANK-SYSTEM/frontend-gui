import { RouterProvider, createHashRouter } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Sign-up";
import HeadNurse from "./pages/HeadNurse";

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
    path: "/headnurse",
    element: <HeadNurse />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
