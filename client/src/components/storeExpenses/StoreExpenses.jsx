import React from "react";
import { useRef } from "react";
import { ClientQuery } from "../../query/ClientQuery";
import { AiOutlineClose } from "react-icons/ai"

//component to create new expenses
function StoreExpenses({ expensesData, setIsOpen }) {
  const { storeUserExpenses } = ClientQuery();

  const titleRef = useRef("");
  const amountRef = useRef("");
  const dateRef = useRef("");
  const descriptionRef = useRef("");

  const accessToken =
    sessionStorage.getItem("accessToken") || localStorage.getItem("token");

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const amount = amountRef.current.value;
    const date = dateRef.current.value;
    const description = descriptionRef.current.value;

    const data = {
      accessToken,
      title,
      amount,
      date,
      description,
    };

    //store expenses function
    storeUserExpenses(data);
    setIsOpen(false);
    titleRef.current.value = "";
    amountRef.current.value = "";
    dateRef.current.value = "";
    descriptionRef.current.value = "";
  };

  return (
    <>
      <div
        className={`${
          expensesData
            ? "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            : ""
        }`}
      >
        <div
          className={`${
            expensesData
              ? "bg-white p-10 w-full max-w-sm mx-auto rounded-xl"
              : ""
          }`}
        >
          <form onSubmit={handleSubmit} className={`w-full max-w-sm mx-auto ${!expensesData ? 'md:shadow-xl md:rounded-xl md:p-5'  : ''} `}>
            {expensesData ? (
              <button
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <AiOutlineClose />
              </button>
            ) : null}
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
                ref={titleRef}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
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
                ref={amountRef}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
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
                ref={dateRef}
                required
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
                ref={descriptionRef}
                required
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
    </>
  );
}

export default StoreExpenses;
