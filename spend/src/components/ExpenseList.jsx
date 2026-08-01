function ExpenseList({ expenses }) {
  return (
    <div>
      <h3>Expense List</h3>

      {expenses.length === 0 ? (
        <p>No expenses added.</p>
      ) : (
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              {expense.title} - ₹{expense.amount}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;
