import React, { useRef } from "react";

//search management components
function SearchForm({ onSearch, searchResults }) {
    const searchRef = useRef("");
  
    const handleSearchChange = () => {
      onSearch(searchRef.current.value);
    };
  
    const handleSearchSubmit = (event) => {
      event.preventDefault();
      onSearch(searchRef.current.value);
    };
  
    const handleReset = () => {
      searchRef.current.value = "";
      onSearch(""); // Call the search function with the empty field to reset the results
    };
  
    return (
      <form onSubmit={handleSearchSubmit}>
        <div className="relative mx-auto w-1/2 md:w-1/3 lg:w-4/6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg> 
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-3 pl-10 text-sm bg-gray-200 text-gray-900 border rounded-3xl"
            placeholder="Search Expenses..."
            required
            ref={searchRef}
            onChange={handleSearchChange}
          />
          {/* {searchResults.length > 0 &&
            <button
            type="button"
            onClick={handleReset}
            
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>} */}
        </div>
      </form>
    );
  }
  

export default SearchForm;
