function ExpenseList({ expenses }) {
  return (
    <div className="expense-history">
      <h3>Expense History</h3>

      {expenses.length === 0 ? (
        <p>No expenses added.</p>
      ) : (
        <div className="expense-table">
          <div className="expense-row expense-head">
            <span>Name</span>
            <span>Category</span>
            <span>Date</span>
            <span>Amount</span>
          </div>

          {[...expenses].reverse().map((expense, index) => (
            <div className="expense-row" key={index}>
              <span>{expense.title}</span>
              <span>{expense.category || "Other"}</span>
              <span>{expense.date || "—"}</span>
              <strong>₹{Number(expense.amount).toLocaleString("en-IN")}</strong>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ExpenseList;
