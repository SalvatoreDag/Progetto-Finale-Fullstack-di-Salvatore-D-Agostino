import React, { useState } from "react";
import { ClientQuery } from "../../query/ClientQuery";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { AiOutlineClose } from "react-icons/ai";

//update expenses component
function UpdateData({ currentData, setShowUpdateData, updateSearchResults }) {
  const { id, currentTitle, currentAmount, currentDate, currentDescription } =
    currentData;

  const accessToken =
    sessionStorage.getItem("accessToken") || localStorage.getItem("token");
  const { updateUserExpenses } = ClientQuery();

  const [title, setTitle] = useState(currentTitle);
  const [amount, setAmount] = useState(currentAmount);
  const [date, setDate] = useState(currentDate);
  const [description, setDescription] = useState(currentDescription);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      id,
      accessToken,
      title,
      amount,
      date,
      description,
    };

    //update expenses function
    updateUserExpenses(data);
    updateSearchResults((prevSearchResults) => {
      return prevSearchResults.map((expense) =>
        expense.id === id ? { ...expense, ...data } : expense
      );
    });

    setShowUpdateData(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center">
      <div className="bg-white p-10 w-full max-w-sm mx-auto rounded-xl">
        <button
          onClick={() => {
            setShowUpdateData(false);
          }}
         
        >
          <AiOutlineClose />
        </button>
        <div className="flex justify-center items-center">
          <form onSubmit={handleSubmit} className="w-full max-w-sm">
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-700 font-bold mb-2"
              >
                Title:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="amount"
                className="block text-gray-700 font-bold mb-2"
              >
                Amount:
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="date"
                className="block text-gray-700 font-bold mb-2"
              >
                Date:
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Description:
              </label>
              <textarea
                id="description"
                name="description"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none hover:bg-indigo-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateData;
