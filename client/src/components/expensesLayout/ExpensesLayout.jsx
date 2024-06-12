import React from "react";
import { useState } from "react";
import UpdateData from "../updateData/UpdateData";
import { BiPencil } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import SearchForm from "../searchForm/SearchForm";

//component showing expenses
function ExpensesLayout({
  expensesData,
  total,
  onSearch,
  searchResults,
  onDelete,
  updateSearchResults,
}) {
  const [selectedExpenseId, setSelectedExpenseId] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDescription, setSelectedDescription] = useState(null);
  const [showUpdateData, setShowUpdateData] = useState(false);

  //data to pass to the update component
  const handleUpdateForm = (id, title, amount, date, description) => {
    setShowUpdateData(true);
    setSelectedExpenseId(id);
    setSelectedTitle(title);
    setSelectedAmount(amount);
    setSelectedDate(date);
    setSelectedDescription(description);
  };

  return (
    <div className="lg:h-screen">
      <SearchForm onSearch={onSearch} searchResults={searchResults} />

      <div className="mx-auto w-max  overflow-auto md:shadow-xl md:p-4 md:rounded-2xl lg:max-h-[66%]">
        {searchResults.length > 0
          ? searchResults.map((expense) => (
            <div className="flex items-center my-4 " key={expense.id}>
            <div className="flex flex-col w-52">
              <p className="font-bold">{expense.title}</p>
              <p className=" text-xs">{expense.description}</p>
            </div>
            <div className="flex gap-5">
              <div>
                <p className="font-bold text-right">{expense.amount} €</p>
                <p>{expense.date}</p>
              </div>
              <div className="flex flex-col-reverse justify-center">
                <button
                  className="font-bold c"
                  onClick={() => onDelete(expense.id)}
                >
                  <BiTrash />
                </button>
                <button
                  className="h-5 hover:text-indigo-400"
                  onClick={() =>
                    handleUpdateForm(
                      expense.id,
                      expense.title,
                      expense.amount,
                      expense.date,
                      expense.description
                    )
                  }
                >
                  <BiPencil />
                </button>

                {showUpdateData && (
                      <UpdateData
                        currentData={{
                          id: selectedExpenseId,
                          currentTitle: selectedTitle,
                          currentAmount: selectedAmount,
                          currentDate: selectedDate,
                          currentDescription: selectedDescription,
                        }}
                        setShowUpdateData={setShowUpdateData}
                        updateSearchResults={updateSearchResults}
                      />
                )}
              </div>
            </div>
          </div>
            ))
          : // If there are no search results, it shows all expenses for the selected month
            expensesData.map((expense) => (
              <div className="flex  items-center my-4 " key={expense.id}>
              <div className="flex flex-col w-52">
                <p className="font-bold">{expense.title}</p>
                <p className=" text-xs">{expense.description}</p>
              </div>
              <div className="flex gap-5">
                <div>
                  <p className="font-bold text-right">{expense.amount} €</p>
                  <p>{expense.date}</p>
                </div>
                <div className="flex flex-col-reverse justify-center">
                  <button
                    className="font-bold c"
                    onClick={() => onDelete(expense.id)}
                  >
                    <BiTrash />
                  </button>
                  <button
                    className="h-5 hover:text-indigo-400"
                    onClick={() =>
                      handleUpdateForm(
                        expense.id,
                        expense.title,
                        expense.amount,
                        expense.date,
                        expense.description
                      )
                    }
                  >
                    <BiPencil />
                  </button>

                  {showUpdateData && (
                        <UpdateData
                          currentData={{
                            id: selectedExpenseId,
                            currentTitle: selectedTitle,
                            currentAmount: selectedAmount,
                            currentDate: selectedDate,
                            currentDescription: selectedDescription,
                          }}
                          setShowUpdateData={setShowUpdateData}
                          updateSearchResults={updateSearchResults}
                        />
                  )}
                </div>
              </div>
            </div>
            ))}
      </div>
    </div>
  );
}

export default ExpensesLayout;
