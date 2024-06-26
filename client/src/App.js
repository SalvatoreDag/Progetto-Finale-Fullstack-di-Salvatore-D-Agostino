import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import { Navigate } from "react-router-dom";
import Loading from "./components/loading/Loading";
import { getUser } from "./apiClient/apiClient";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Popup from "../src/components/popup/Popup";

function App() {
  const queryClient = useQueryClient();
  const token =
    sessionStorage.getItem("accessToken") || localStorage.getItem("token");

  //called to retrieve the data after a reload or after closing the window
  const { isLoading, isPaused } = useQuery(
    ["userData"],
    () => getUser({ token }),
    {
      enabled: !!token,
      staleTime: 5000,
      onSuccess: (userData) => {
        const username = userData.data.name;
        queryClient.setQueryData(["isLoggedIn"], true);
        queryClient.setQueryData(["userName"], username);
      },
      onError: (error) => {
        queryClient.setQueryData(["message"], error.response.data.message);
      },
    }
  );
  const { data: isLoggedIn } = useQuery(["isLoggedIn"], null);

  const { data: message } = useQuery(["message"], null);

  if (isPaused) {
    return (
      <div className="w-max mx-auto p-10 rounded-2xl border">
      <h3 className="text-center my-5 lg:text-lg font-semibold">
        Lost connection. The request will resume as soon as the connection is
        re-established
      </h3>
      </div>
    );
  }

  if (isLoading && token) {
    return <Loading />;
  }

  const pages = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/dashboard",
          element: isLoggedIn ? <Dashboard /> : <Navigate to="/auth/signin" />,
        },
        {
          path: "/auth/signup",
          element: <Signup />,
        },
        {
          path: "/auth/signin",
          element: !isLoggedIn ? <Signin /> : <Navigate to="/dashboard" />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={pages} />
      <Popup message={message} />
    </>
  );
}

export default App;
