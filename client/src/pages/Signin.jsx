import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { ClientQuery } from "../query/ClientQuery";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import Loading from "../components/loading/Loading";

//login management component
function Signin() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const preFilledEmail = queryParams.get('email') || '';
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  console.log(isSubmitting);

  const { loginUser } = ClientQuery();
  const queryClient = useQueryClient();
  const { data: isSuccess } = useQuery(["isSuccess"], null);
  const [remember, setRemember] = useState(false);

  if (isSuccess) {
    navigate("/dashboard");
    queryClient.removeQueries(["isSuccess"], null);
  }

  const rememberToggle = () => {
    setRemember(true);
  };

  const onSubmit = async (data) => {
    //login function
    await loginUser({ ...data, remember });
  };

  const handleToggle = (e) => {
    e.preventDefault();
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <div className="flex flex-col items-center min-h-screen pt-6 justify-start md:justify-center sm:pt-0  lg:-mt-20">
        {isSubmitting ? <Loading /> : (null)}
        <div>
          <NavLink to="/">
            <h3 className="text-4xl text-center font-bold text-indigo-800">
              SpendWise
            </h3>
          </NavLink>
          <NavLink
            className="text-sm text-center text-gray-600 hover:text-gray-900"
            to="/auth/signup"
          >
            Don't have any account yet?{" "}
            <span className="underline">Sign Up</span>
          </NavLink>
        </div>
        <div className="w-full px-10 py-8 mt-6 overflow-hidden lg:shadow-md sm:max-w-md rounded-xl">
          <form
            onSubmit={handleSubmit(onSubmit)}
            action="api/login"
            method="POST"
          >
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
                {...register("email")}
                disabled={isSubmitting}
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
                  {...register("password")}
                  disabled={isSubmitting}
                />
                <button
                  className="absolute right-0 top-1/2  -translate-y-1/2 h-8 w-8 text-gray-600 "
                  onClick={handleToggle}
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible className="w-5 h-5" />
                  ) : (
                    <AiOutlineEye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-1">
                <input
                  type="checkbox"
                  id="rememberMeCheckbox"
                  onChange={rememberToggle}
                  disabled={isSubmitting}
                />
                <label htmlFor="rememberMeCheckbox">Remember me</label>
              </div>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase bg-indigo-500 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
                disabled={isSubmitting}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;
