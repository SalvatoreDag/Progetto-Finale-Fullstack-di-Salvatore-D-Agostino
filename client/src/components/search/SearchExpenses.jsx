import React from "react";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

function SearchExpenses() {
  const { accessToken, userExpensesSearch } = useAuth();
  const [title, setTitle] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const data = {
      accessToken,
      title,
    };
    userExpensesSearch(data);
    setTitle('');
  };

  const handleSearchInputChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
    <form
      className="mx-auto w-3/5  lg:ml-72 lg:w-1/4"
      onSubmit={handleFormSubmit}
    >
      <label
        hatmlfor="default-search"
        className="mb-2 text-sm font-medium  sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-3 pl-10 text-sm bg-gray-200 text-gray-900 border rounded-3xl "
          placeholder="Search Expenses..."
          required
          value={title}
          onChange={handleSearchInputChange}
        />
      </div>
    </form>
    </>
  );
}

export default SearchExpenses;
