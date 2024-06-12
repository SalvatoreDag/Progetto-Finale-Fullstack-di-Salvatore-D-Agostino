import React from "react";
import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { ClientQuery } from "../query/ClientQuery";
import { useQuery, useQueryClient } from "@tanstack/react-query";

//registration management component
function Signup() {
  const { registerUser } = ClientQuery();
  const queryClient = useQueryClient();

  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const { data: isSuccess } = useQuery(["isSuccess"], null);

  if (isSuccess) {
    console.log(isSuccess);
    navigate("/auth/signin");
    queryClient.removeQueries(["isSuccess"]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const password_confirmation = confirmPasswordRef.current.value;

    const userData = {
      name,
      email,
      password,
      password_confirmation,
    };

    //register function
    registerUser(userData);

    nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
    confirmPasswordRef.current.value = "";
  };

  const handleTogglePassword = (e) => {
    e.preventDefault();
    setShowPassword((prevState) => !prevState);
  };

  const handleToggleConfirmPassword = (e) => {
    e.preventDefault();
    setShowConfirmPassword((prevState) => !prevState);
  };

  return (
    <>
      <div className="flex flex-col items-center min-h-screen pt-6 justify-start sm:pt-0 md:justify-center lg:-mt-20">
        <div>
          <NavLink to="/">
            <h3 className="text-4xl font-bold text-indigo-800">SpendWise</h3>
          </NavLink>
        </div>
        <div className="w-full px-10 py-8 mt-6 overflow-hidden lg:shadow-md sm:max-w-md rounded-xl">
          <form onSubmit={handleSubmit} method="POST">
            <div className="mt-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name:
              </label>
              <input
                required
                type="text"
                name="name"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                ref={nameRef}
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email:
              </label>
              <input
                required
                type="email"
                name="email"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                ref={emailRef}
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password:
              </label>
              <div className="flex gap-3 items-center relative">
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  ref={passwordRef}
                />
                <button
                  className="absolute right-0 top-1/2 -translate-y-1/2 h-8 w-8 text-gray-600"
                  onClick={handleTogglePassword}
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible className="w-5 h-5" />
                  ) : (
                    <AiOutlineEye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password_confirmation"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password:
              </label>
              <div className="flex gap-3 items-center relative">
                <input
                  required
                  type={showConfirmPassword ? "text" : "password"}
                  name="password_confirmation"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  ref={confirmPasswordRef}
                />
                <button
                  className="absolute right-0 top-1/2 -translate-y-1/2 h-8 w-8 text-gray-600"
                  onClick={handleToggleConfirmPassword}
                >
                  {showConfirmPassword ? (
                    <AiOutlineEyeInvisible className="w-5 h-5" />
                  ) : (
                    <AiOutlineEye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-end mt-4">
              <NavLink
                className="text-sm text-gray-600 underline hover:text-gray-900"
                to="/auth/signin"
              >
                Already registered?
              </NavLink>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest  text-white uppercase bg-indigo-500 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
