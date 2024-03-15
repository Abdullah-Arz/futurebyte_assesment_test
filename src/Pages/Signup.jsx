import React, { useState } from "react";
import Header from "../Components/Header";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const navigate = useNavigate()

  const facebook = require("../Assets/Images/Facebook.png");
  const apple = require("../Assets/Images/apple.png");
  const google = require("../Assets/Images/google.png");

  const submitData = (e) => {
    e.preventDefault();
  };

  const handleNavigate = () => {
    navigate('/')
  }

  return (
    <>
      <Header />

      <div className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mb-10">
        <div className="flex items-center justify-center mt-20">
          <div className="gap-5 flex flex-col items-start justify-center">
            <p className="text-4xl font-bold 2xl:text-6xl xl:text-6xl lg:text-6xl md:text-5xl sm:text-4xl">
              Sign Up to
            </p>
            <p className="text-3xl font-semibold 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl">
              Lorem Ipsum is simply
            </p>
            <p className="text-xl mt-8">
              If you don’t have an account register
            </p>
            <p className="text-xl -mt-3">
              You can{" "}
              <span className="text-[#4d47c3] font-bold cursor-pointer" onClick={handleNavigate}>
                Login here !
              </span>
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <form
            className="w-10/12 2xl:w-8/12 xl:w-8/12 lg:w-8/12 md:w-8/12 sm:w-10/12 px-0 2xl:px-14 xl:px-14 lg:px-14 md:px-7 sm:px-3"
            onSubmit={(e) => submitData(e)}
          >
            <h1 className="text-xl lg:text-3xl md:text-3xl sm:text-2xl font-semibold mt-10 mb-10 2xl:mt-32 xl:mt-32 lg:mt-32 md:mt-20 sm:mt-10">
              Sign Up
            </h1>

            <div className="flex items-center bg-[#FFF7ED] border-2 border-[#FAB777] py-4 px-3 rounded-lg mb-7">
              <input
                className="outline-none bg-[#FFF7ED] w-full border-[#fddcb4] required text-[#FAB777] focus:text-[#FAB777] placeholder:text-[#FAB777]"
                required
                name="email"
                type="email"
                placeholder="Enter Email"
              />
            </div>

            <div className="flex items-center bg-[#FFF7ED] border-2 border-[#FAB777] py-4 px-3 rounded-lg mb-7">
              <input
                className="outline-none bg-[#FFF7ED] w-full border-[#fddcb4] required text-[#FAB777] focus:text-[#FAB777] placeholder:text-[#FAB777]"
                required
                name="username"
                type="text"
                placeholder="Create User name"
              />
            </div>

            <div className="flex items-center bg-[#FFF7ED] border-2 border-[#FAB777] py-4 px-3 rounded-lg mb-7">
            <input
                className="outline-none bg-[#FFF7ED] w-full border-[#fddcb4] required text-[#FAB777] focus:text-[#FAB777] placeholder:text-[#FAB777]"
                required
                name="number"
                type="number"
                placeholder="Contact number"
              />
            </div>

            <div className="flex items-center bg-[#FFF7ED] border-2 border-[#FAB777] py-4 px-3 rounded-lg mb-7">
              <input
                className="pl-2 w-full outline-none border-[#FAB777] bg-[#FFF7ED] required text-[#FAB777] focus:text-[#FAB777]  placeholder:text-[#FAB777]"
                required
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />

              <span
                className="cursor-pointer ml-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEye className="text-lg text-slate-400 pointer-events-none" />
                ) : (
                  <FaEyeSlash className="text-lg text-slate-400 pointer-events-none" />
                )}
              </span>
            </div>

            <div className="flex items-center bg-[#FFF7ED] border-2 border-[#FAB777] py-4 px-3 rounded-lg mb-7">
              <input
                className="pl-2 w-full outline-none border-[#FAB777] bg-[#FFF7ED] required text-[#FAB777] focus:text-[#FAB777]  placeholder:text-[#FAB777]"
                required
                name="confirm_password"
                type={showPassword1 ? "text" : "password"}
                placeholder="Confirm Password"
              />

              <span
                className="cursor-pointer ml-2"
                onClick={() => setShowPassword1(!showPassword1)}
              >
                {showPassword1 ? (
                  <FaEye className="text-lg text-slate-400 pointer-events-none" />
                ) : (
                  <FaEyeSlash className="text-lg text-slate-400 pointer-events-none" />
                )}
              </span>
            </div>
            

            <div>
              <button
              onClick={handleNavigate}
                type="submit"
                className="block w-full h-14	justify-between bg-[#F4711E] mt-12 py-2 rounded-md text-white font-medium mb-2 "
              >
                Register
              </button>
            </div>

            <p className="text-center mt-8 text-[#B5B5B5] font-semibold text-lg">
              or continue with
            </p>
            <div className="flex justify-center items-center mt-10 w-full">
              <div className="flex justify-evenly items-center w-6/12">
                <img src={facebook} className="w-10 h-10" />
                <img src={apple} className="w-10 h-10" />
                <img src={google} className="w-10 h-10" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
