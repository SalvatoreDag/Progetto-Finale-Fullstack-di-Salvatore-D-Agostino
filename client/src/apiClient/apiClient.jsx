import axios from "axios";

//component that contains all the api

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

//call to get user data
export const getUser = (data) => {
  return api.get("/user", {
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  });
};

//call to login
export const login = (credentials) => {
  return api.post("/login", credentials);
};

//call to registration
export const registration = (credentials) => {
  return api.post("/register", credentials);
};

//call to logout
export const logout = (userData) => {
  return api.post("/logout", userData, {
    headers: {
      Authorization: `Bearer ${userData}`,
    },
  });
};

//call to get expenses
export const expensesByMonth = (data) => {
  return api.get("/expenses", {
    headers: {
      Authorization: `Bearer ${data.accessToken}`,
    },
    params: {
      "filter[month]": data.selectedMonthName,
    },
  });
};

//call to delete an expense
export const destroyExpenses = async (data) => {
  const id = data.id;
  return api.delete(`/expenses/${id}`, {
    headers: {
      Authorization: `Bearer ${data.accessToken}`,
    },
  });
};

//call to update an expense
export const updateExpenses = (data) => {
  const { id, accessToken, ...rest } = data;

  return api.put(`/expenses/${id}`, rest, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

//call to create an expense
export const storeExpenses = (data) => {
  const { accessToken, ...rest } = data;

  return api.post("/expenses", rest, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
