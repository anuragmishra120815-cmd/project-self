{
  page === "savings" && (
    <>
      <h1>💰 Savings</h1>

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

      {remainingSavings > 0 ? (
        <p style={{ color: "green" }}>🎉 Good! You are saving money.</p>
      ) : (
        <p style={{ color: "red" }}>⚠️ Your expenses exceeded your savings.</p>
      )}
    </>
  );
}
