import { useState } from "react";
import Logo from "../assets/img/Logo.png";

const Login = () => {
  const [login, setlogin] = useState("login");
  const setsingup = () => {
    setlogin("signup");
  };
  const setsign = () => {
    setlogin("login");
  };
  const forget = () => {
    setlogin("forget");
  };
  return (
    <>
      {login == "login" ? (
        <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-100">
          <img className="img-responsive my-8 h-6" src={Logo} alt="Logo" />

          <div className="w-5/12 border-2 bg-white rounded-xl px-8 py-8 flex flex-col justify-center">
            <div>
              <h1 className="text-2xl mb-8 font-semibold text-blue-900">
                Admin Sign In
              </h1>
              <label className="font-medium">Email ID</label>
              <input
                type="text"
                placeholder="Email ID"
                className="w-full h-12 mt-2 mb-4 px-4 bg-gray-100 border border-gray-200 rounded"
              />
              <label className="font-medium">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full h-12 mt-2 mb-8 px-4 bg-gray-100 border border-gray-200 rounded"
              />
              <div className="mx-2">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  value="rememberMe"
                  className="scale-150"
                />
                &nbsp;&nbsp;&nbsp;
                <label className="text-gray-400 text-lg">Remember Me</label>
                <p
                  className="text-gray-400 text-lg float-right"
                  onClick={forget}
                >
                  Forgot Password ?
                </p>
              </div>
            </div>

            <button className="w-full h-12 my-4 bg-blue-900 text-white rounded">
              Sign In
            </button>
            <p onClick={setsingup} className="text-center">
              Not a Member ?
            </p>
          </div>
        </div>
      ) : login == "signup" ? (
        <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-100">
          <img className="img-responsive my-8 h-6" src={Logo} alt="Logo" />

          <div className="w-5/12 border-2 bg-white rounded-xl px-8 py-8 flex flex-col justify-center">
            <div>
              <h1 className="text-2xl mb-8 font-semibold text-blue-900">
                Admin Sign Up
              </h1>
              <label className="font-medium">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full h-12 mt-2 mb-4 px-4 bg-gray-100 border border-gray-200 rounded"
              />
              <label className="font-medium">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full h-12 mt-2 mb-4 px-4 bg-gray-100 border border-gray-200 rounded"
              />
              <label className="font-medium">Email ID</label>
              <input
                type="email"
                placeholder="Email ID"
                className="w-full h-12 mt-2 mb-4 px-4 bg-gray-100 border border-gray-200 rounded"
              />
              <label className="font-medium">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full h-12 mt-2 mb-8 px-4 bg-gray-100 border border-gray-200 rounded"
              />
              <div className="mx-2">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  value="rememberMe"
                  className="scale-150"
                />
                &nbsp;&nbsp;&nbsp;
                <label className="text-gray-400 text-lg">Remember Me</label>
              </div>
            </div>

            <button className="w-full h-12 my-4 bg-blue-900 text-white rounded">
              Sign Up
            </button>
            <p onClick={setsign} className="text-center">
              Already have a Account ?
            </p>
          </div>
        </div>
      ) : (
        <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-100">
          <img className="img-responsive my-8 h-6" src={Logo} alt="Logo" />

          <div className="w-5/12 border-2 bg-white rounded-xl px-8 py-8 flex flex-col justify-center">
            <div>
              <h1 className="text-2xl mb-8 font-semibold text-blue-900">
                Forgot Password
              </h1>
             
              <label className="font-medium">Email ID</label>
              <input
                type="email"
                placeholder="Email ID"
                className="w-full h-12 mt-2 mb-4 px-4 bg-gray-100 border border-gray-200 rounded"
              />
            </div>

            <button className="w-full h-12 my-4 bg-blue-900 text-white rounded">
             Submit
            </button>
            <p onClick={setsingup} className="text-center">
              Not a Member ?
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
