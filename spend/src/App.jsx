import { useState } from "react";
import Login from "./components/login";
import Register from "./components/register";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  const [page, setPage] = useState("login");

  if (page === "dashboard") {
    return <Dashboard />;
  }

  if (page === "register") {
    return <Register onBack={() => setPage("login")} />;
  }

  return (
    <Login
      onLogin={() => setPage("dashboard")}
      onRegister={() => setPage("register")}
    />
  );
}

export default App;
