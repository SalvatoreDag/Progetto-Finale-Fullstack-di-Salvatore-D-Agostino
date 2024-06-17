import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  login,
  registration,
  logout,
  destroyExpenses,
  updateExpenses,
  storeExpenses,
} from "../utilis/api";

//component for managing api
export const ClientQuery = () => {
  const queryClient = useQueryClient();

  const registerMutation = useMutation(registration, {
    onSuccess: (response) => {
      queryClient.setQueryData(["message"], response.data.message);
      queryClient.setQueryData(["isSuccess"], true);
    },
    onError: (error) => {
      queryClient.setQueryData(["message"], error.response.data.message);
    },
  });

  const registerUser = async (userData) => {
    try {
      const response = await registerMutation.mutateAsync(userData);
    } catch (error) {
    }
  };

  const loginMutation = useMutation(login, {
    onSuccess: (response) => {
      const token = response.data.token;
      queryClient.setQueryData(["message"], response.data.message);
      queryClient.setQueryData(["accessToken"], token);
      const userName = response.data.user.name;
      queryClient.setQueryData(["userName"], userName);
      queryClient.setQueryData(["isLoggedIn"], true);

      if (response.data.remember == true) {
        localStorage.setItem("token", token);
      } else {
        sessionStorage.setItem("accessToken", token);
      }
      queryClient.setQueryData(["isSuccess"], true);
    },
    onError: (error) => {
      queryClient.setQueryData(["message"], error.response.data.message);
    },
  });

  const loginUser = async (userData) => {
    try {
      const response = await loginMutation.mutateAsync(userData);
    } catch (error) {
    }
  };

  const logoutMutation = useMutation(logout, {
    onSuccess: (response) => {
      
      queryClient.setQueryData(["message"], response.data.message);
      queryClient.clear()
      sessionStorage.removeItem("accessToken");
      localStorage.removeItem("token");
    },
    onError: (error) => {
      queryClient.setQueryData(["message"], error.response.data.message);
    },
  });

  const logoutUser = async (accessToken) => {
    try {
      const response = await logoutMutation.mutateAsync(accessToken);

    } catch (error) {
      console.error("errore durante il logout");
    }
  };

  const updateUserExpensesMutation = useMutation(updateExpenses, {
    onSuccess: (response) => {
      queryClient.setQueryData(["message"], response.data.message);
      queryClient.invalidateQueries(["expensesByMonth"]);
    },
    onError: (error) => {
      console.error(error.response.data.message);
    },
  });

  const updateUserExpenses = async (data) => {
    try {
      const response = await updateUserExpensesMutation.mutateAsync(data);
    } catch (error) {
    }
  };

  const destroyUserExpensesMuation = useMutation(destroyExpenses, {
    onSuccess: (response) => {
      queryClient.setQueryData(["message"], response.data.message);
      queryClient.invalidateQueries(["expensesByMonth"]);
    },
    onError: (error) => {
      queryClient.setQueryData(["message"], error.response.data.message);

    },
  });

  const destroyUserExpenses = async (data) => {
    try {
      const response = await destroyUserExpensesMuation.mutateAsync(data);
    } catch (error) {
      console.error("errore", error);
    }
  };

  const storeUserExpensesMutation = useMutation(storeExpenses, {
    onSuccess: (response) => {
      queryClient.setQueryData(["message"], response.data.message);

      queryClient.invalidateQueries(["expensesByMonth"]);
    },
    onError: (error) => {
      queryClient.setQueryData(["message"], error.response.data.message);
    },
  });

  const storeUserExpenses = async (data) => {
    try {
      const response = await storeUserExpensesMutation.mutateAsync(data);
    } catch (error) {
      console.error("error");
    }
  };

  return {
    registerUser,
    loginUser,
    logoutUser,
    updateUserExpenses,
    destroyUserExpenses,
    storeUserExpenses,
    updateUserExpensesMutation,
  };
};

export default ClientQuery;
