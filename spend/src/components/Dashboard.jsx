import { useState, useEffect } from "react";
import Sidebar from "./sidebar";
import AddExpense from "./AddExpense";
import ExpenseList from "./ExpenseList";
import ChatBox from "./ChatBox";

function Dashboard() {
  const [page, setPage] = useState("dashboard");
  const [showSidebar, setShowSidebar] = useState(false);

  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  const [initialSavings, setInitialSavings] = useState(() => {
    const saved = localStorage.getItem("initialSavings");
    return saved ? Number(saved) : 0;
  });

  const [inputSavings, setInputSavings] = useState("");

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem("initialSavings", initialSavings);
  }, [initialSavings]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const totalExpense = expenses.reduce(
    (total, expense) => total + Number(expense.amount),
    0,
  );

  const remainingSavings = initialSavings - totalExpense;

  return (
    <div className="container">
      <button className="menu-btn" onClick={() => setShowSidebar(!showSidebar)}>
        ☰
      </button>

      {showSidebar && (
        <Sidebar setPage={setPage} setShowSidebar={setShowSidebar} />
      )}

      <div className="dashboard">
        {page === "dashboard" && (
          <>
            <h1>📊 Dashboard</h1>

            <input
              type="number"
              placeholder="Enter Initial Savings"
              value={inputSavings}
              onChange={(e) => setInputSavings(e.target.value)}
            />

            <button
              onClick={() => {
                if (inputSavings === "") {
                  alert("Please enter your savings");
                  return;
                }

                setInitialSavings(Number(inputSavings));
                setInputSavings("");
                alert("Savings Saved Successfully!");
              }}
            >
              Save
            </button>

            <div className="cards">
              <div className="card">
                <h3>Total Expense</h3>
                <p>₹{totalExpense}</p>
              </div>

              <div className="card">
                <h3>Remaining Savings</h3>
                <p>₹{remainingSavings}</p>
              </div>

              <div className="card">
                <h3>Total Transactions</h3>
                <p>{expenses.length}</p>
              </div>
            </div>

            <button
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
            >
              Reset Data
            </button>
          </>
        )}

        {page === "expenses" && (
          <>
            <h1>💸 Expenses</h1>
            <AddExpense onAdd={addExpense} />
          </>
        )}

        {page === "history" && (
          <>
            <h1>📜 Expense History</h1>

            {expenses.length === 0 ? (
              <p>No expenses added yet.</p>
            ) : (
              <ExpenseList expenses={expenses} />
            )}
          </>
        )}

        {page === "savings" && (
          <>
            <h1>💰 Savings</h1>

            <div className="cards">
              <div className="card">
                <h3>Initial Savings</h3>
                <p>₹{initialSavings}</p>
              </div>

              <div className="card">
                <h3>Total Expense</h3>
                <p>₹{totalExpense}</p>
              </div>

              <div className="card">
                <h3>Remaining Savings</h3>
                <p>₹{remainingSavings}</p>
              </div>
            </div>

            {remainingSavings >= 0 ? (
              <h3 style={{ color: "green" }}>🎉 Good! You are saving money.</h3>
            ) : (
              <h3 style={{ color: "red" }}>
                ⚠️ Your expenses exceeded your savings.
              </h3>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
