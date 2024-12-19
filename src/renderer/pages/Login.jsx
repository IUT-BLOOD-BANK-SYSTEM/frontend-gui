import React from "react";
import { Link } from "react-router-dom";
import logImg1 from "../assets/login_image.png";
import Heading from "../components/reusable/Heading";
import SubmitButton from "../components/reusable/SubmitButton";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const [loading, setLoading] = React.useState(false);
  const formRef = React.useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    const payload = {
      type: "login",
      payload: {
        email: data.email,
        password: data.password,
      },
    };

    window.electron.sendTCPMessage(payload);
    window.electron.onTCPMessage((response) => {
      if (response.type !== "login_response") return;
      if (response.status === "success") {
        localStorage.setItem(
          "user",
          JSON.stringify({...response.payload})
        );
        formRef.current.reset();
        navigate("/dashboard");
      } else {
        toast.error(`Login failed: ${response.message}`);
      }
    });
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-primary grid place-content-center mx-5">
      <div className="flex w-full items-center gap-x-36">
        <div className="flex flex-1">
          <img src={logImg1} alt="img1" />
        </div>
        <div className="flex flex-col flex-1 gap-6">
          <Heading />

          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1 mb-5">
              <label htmlFor="email" className="text-sm font-semibold">
                Email*
              </label>
              <input
                id="email"
                type="text"
                name="email"
                required
                className="border text-black border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="passsword" className="text-sm font-semibold">
                Password*
              </label>
              <input
                id="password"
                type="password"
                name="password"
                required
                className="border text-black border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-center mt-5 text-center">
              <SubmitButton
                text={`${loading ? "submitting..." : "Login"}`}
                disabled={loading}
              />
            </div>
          </form>

          <div className="flex flex-col items-center gap-2 mt-5">
            <div className="flex gap-2">
              <p>Don't have an account?</p>
              <p className="">
                <Link
                  to="/sign-up"
                  className="text-blue-500 font-semibold hover:opacity-75 text-center mt-5 underline"
                >
                  Sign Up
                </Link>
              </p>
            </div>
            <p>
              <a
                href="#"
                className="text-blue-500 font-semibold hover:opacity-75 text-center mt-5 underline"
              >
                Forgot Password
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
