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

  const [monthlyBudget, setMonthlyBudget] = useState(() => {
    const saved = localStorage.getItem("monthlyBudget");
    return saved ? Number(saved) : 0;
  });

  const [savingGoal, setSavingGoal] = useState(() => {
    const saved = localStorage.getItem("savingGoal");
    return saved ? Number(saved) : 0;
  });

  const [inputSavings, setInputSavings] = useState("");
  const [budgetInput, setBudgetInput] = useState("");
  const [goalInput, setGoalInput] = useState("");

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem("initialSavings", initialSavings);
  }, [initialSavings]);

  useEffect(() => {
    localStorage.setItem("monthlyBudget", monthlyBudget);
  }, [monthlyBudget]);

  useEffect(() => {
    localStorage.setItem("savingGoal", savingGoal);
  }, [savingGoal]);

  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const totalExpense = expenses.reduce(
    (total, expense) => total + Number(expense.amount),
    0,
  );

  const remainingSavings = initialSavings - totalExpense;

  const currentMonth = new Date().toISOString().slice(0, 7);

  const monthlyExpense = expenses
    .filter((expense) => (expense.date || "").startsWith(currentMonth))
    .reduce((total, expense) => total + Number(expense.amount), 0);

  const categoryTotals = expenses.reduce((totals, expense) => {
    const category = expense.category || "Other";
    totals[category] = (totals[category] || 0) + Number(expense.amount);
    return totals;
  }, {});

  const sortedCategories = Object.entries(categoryTotals).sort(
    (a, b) => b[1] - a[1],
  );

  const budgetUsed =
    monthlyBudget > 0 ? Math.min((monthlyExpense / monthlyBudget) * 100, 100) : 0;

  const goalProgress =
    savingGoal > 0
      ? Math.max(0, Math.min((initialSavings / savingGoal) * 100, 100))
      : 0;

  const saveValue = (setter, storageSetter, input, message) => {
    if (input === "" || Number(input) < 0) {
      alert("Please enter a valid amount");
      return;
    }

    storageSetter(Number(input));
    setter("");
    alert(message);
  };

  const exportCSV = () => {
    if (expenses.length === 0) {
      alert("No expenses to export");
      return;
    }

    const rows = [
      ["Expense", "Amount", "Category", "Date"],
      ...expenses.map((expense) => [
        expense.title,
        expense.amount,
        expense.category || "Other",
        expense.date || "",
      ]),
    ];

    const csv = rows
      .map((row) =>
        row
          .map((value) => `"${String(value).replace(/"/g, '""')}"`)
          .join(","),
      )
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "spend-expenses.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

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

            <div className="settings-grid">
              <div className="setting-card">
                <h3>💰 Initial Savings</h3>
                <div className="setting-row">
                  <input
                    type="number"
                    min="0"
                    placeholder="Enter savings"
                    value={inputSavings}
                    onChange={(e) => setInputSavings(e.target.value)}
                  />
                  <button
                    onClick={() =>
                      saveValue(
                        setInputSavings,
                        setInitialSavings,
                        inputSavings,
                        "Savings saved successfully!",
                      )
                    }
                  >
                    Save
                  </button>
                </div>
              </div>

              <div className="setting-card">
                <h3>🎯 Monthly Budget</h3>
                <div className="setting-row">
                  <input
                    type="number"
                    min="0"
                    placeholder="Set budget"
                    value={budgetInput}
                    onChange={(e) => setBudgetInput(e.target.value)}
                  />
                  <button
                    onClick={() =>
                      saveValue(
                        setBudgetInput,
                        setMonthlyBudget,
                        budgetInput,
                        "Monthly budget saved!",
                      )
                    }
                  >
                    Save
                  </button>
                </div>
              </div>

              <div className="setting-card">
                <h3>🏆 Saving Goal</h3>
                <div className="setting-row">
                  <input
                    type="number"
                    min="0"
                    placeholder="Goal amount"
                    value={goalInput}
                    onChange={(e) => setGoalInput(e.target.value)}
                  />
                  <button
                    onClick={() =>
                      saveValue(
                        setGoalInput,
                        setSavingGoal,
                        goalInput,
                        "Saving goal saved!",
                      )
                    }
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>

            <div className="cards">
              <div className="card">
                <h3>Total Expense</h3>
                <p>₹{totalExpense.toLocaleString("en-IN")}</p>
              </div>

              <div className="card">
                <h3>Remaining Savings</h3>
                <p>₹{remainingSavings.toLocaleString("en-IN")}</p>
              </div>

              <div className="card">
                <h3>This Month</h3>
                <p>₹{monthlyExpense.toLocaleString("en-IN")}</p>
              </div>

              <div className="card">
                <h3>Total Transactions</h3>
                <p>{expenses.length}</p>
              </div>
            </div>

            <div className="analytics-grid">
              <div className="analytics-card">
                <div className="section-title">
                  <h2>📈 Monthly Budget</h2>
                  <span>
                    {monthlyBudget
                      ? `₹${monthlyExpense.toLocaleString("en-IN")} / ₹${monthlyBudget.toLocaleString("en-IN")}`
                      : "Set a budget above"}
                  </span>
                </div>

                <div className="progress-track">
                  <div
                    className={`progress-fill ${monthlyExpense > monthlyBudget && monthlyBudget > 0 ? "danger" : ""}`}
                    style={{ width: `${budgetUsed}%` }}
                  />
                </div>

                {monthlyBudget > 0 && (
                  <p className="progress-text">
                    {monthlyExpense > monthlyBudget
                      ? `⚠️ Budget exceeded by ₹${(monthlyExpense - monthlyBudget).toLocaleString("en-IN")}`
                      : `₹${(monthlyBudget - monthlyExpense).toLocaleString("en-IN")} remaining this month`}
                  </p>
                )}
              </div>

              <div className="analytics-card">
                <div className="section-title">
                  <h2>🏆 Saving Goal</h2>
                  <span>
                    {savingGoal
                      ? `₹${initialSavings.toLocaleString("en-IN")} / ₹${savingGoal.toLocaleString("en-IN")}`
                      : "Set a goal above"}
                  </span>
                </div>

                <div className="progress-track">
                  <div
                    className="progress-fill goal"
                    style={{ width: `${goalProgress}%` }}
                  />
                </div>

                {savingGoal > 0 && (
                  <p className="progress-text">
                    {initialSavings >= savingGoal
                      ? "🎉 Saving goal reached!"
                      : `₹${(savingGoal - initialSavings).toLocaleString("en-IN")} left to reach your goal`}
                  </p>
                )}
              </div>
            </div>

            <div className="analytics-grid">
              <div className="analytics-card">
                <div className="section-title">
                  <h2>🧾 Spending by Category</h2>
                  <span>{sortedCategories.length} categories</span>
                </div>

                {sortedCategories.length === 0 ? (
                  <p>No expenses yet. Add your first expense to see analytics.</p>
                ) : (
                  <div className="category-list">
                    {sortedCategories.map(([category, amount]) => {
                      const percentage =
                        totalExpense > 0 ? (amount / totalExpense) * 100 : 0;

                      return (
                        <div className="category-item" key={category}>
                          <div className="category-line">
                            <span>{category}</span>
                            <strong>
                              ₹{amount.toLocaleString("en-IN")}
                            </strong>
                          </div>
                          <div className="progress-track small">
                            <div
                              className="progress-fill"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="analytics-card">
                <div className="section-title">
                  <h2>⚡ Quick Actions</h2>
                </div>
                <p className="quick-text">
                  Track every expense, review your categories and keep your
                  monthly spending inside your budget.
                </p>
                <button onClick={() => setPage("expenses")}>
                  ➕ Add Expense
                </button>
                <button className="secondary-btn" onClick={exportCSV}>
                  📥 Export CSV
                </button>
                <button
                  className="danger-btn"
                  onClick={() => {
                    if (
                      window.confirm(
                        "Reset all savings, budget, goal and expenses?",
                      )
                    ) {
                      localStorage.clear();
                      window.location.reload();
                    }
                  }}
                >
                  Reset Data
                </button>
              </div>
            </div>

            {expenses.length > 0 && (
              <div className="analytics-card recent-card">
                <div className="section-title">
                  <h2>🕒 Recent Expenses</h2>
                  <button onClick={() => setPage("history")}>View All</button>
                </div>

                <div className="recent-list">
                  {[...expenses].reverse().slice(0, 5).map((expense, index) => (
                    <div className="recent-item" key={index}>
                      <div>
                        <strong>{expense.title}</strong>
                        <span>
                          {expense.category || "Other"} • {expense.date || "—"}
                        </span>
                      </div>
                      <strong>₹{Number(expense.amount).toLocaleString("en-IN")}</strong>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <ChatBox
              totalExpense={totalExpense}
              remainingSavings={remainingSavings}
              transactionCount={expenses.length}
              expenses={expenses}
              monthlyBudget={monthlyBudget}
              monthlyExpense={monthlyExpense}
              savingGoal={savingGoal}
            />
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
            <ExpenseList expenses={expenses} />
          </>
        )}

        {page === "savings" && (
          <>
            <h1>💰 Savings & Goals</h1>

            <div className="cards">
              <div className="card">
                <h3>Initial Savings</h3>
                <p>₹{initialSavings.toLocaleString("en-IN")}</p>
              </div>

              <div className="card">
                <h3>Total Expense</h3>
                <p>₹{totalExpense.toLocaleString("en-IN")}</p>
              </div>

              <div className="card">
                <h3>Remaining Savings</h3>
                <p>₹{remainingSavings.toLocaleString("en-IN")}</p>
              </div>
            </div>

            <div className="analytics-card">
              <h2>🏆 Saving Goal</h2>
              <p>
                {savingGoal > 0
                  ? `Progress: ${goalProgress.toFixed(0)}%`
                  : "Set a saving goal from the dashboard."}
              </p>
              <div className="progress-track">
                <div
                  className="progress-fill goal"
                  style={{ width: `${goalProgress}%` }}
                />
              </div>
            </div>

            {remainingSavings >= 0 ? (
              <h3 style={{ color: "green" }}>
                🎉 Your current expenses are within your savings.
              </h3>
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
