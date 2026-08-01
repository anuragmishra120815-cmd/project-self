function Sidebar({ setPage, setShowSidebar }) {
  const changePage = (page) => {
    setPage(page);
    setShowSidebar(false);
  };

  return (
    <div className="sidebar">
      <h2>💰 Spend</h2>

      <ul>
        <li onClick={() => changePage("dashboard")}>🏠 Dashboard</li>
        <li onClick={() => changePage("expenses")}>💸 Expenses</li>
        <li onClick={() => changePage("history")}>📜 History</li>
        <li onClick={() => changePage("savings")}>💰 Savings</li>
      </ul>
    </div>
  );
}

export default Sidebar;
