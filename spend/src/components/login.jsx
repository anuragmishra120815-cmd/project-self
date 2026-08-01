import { useState } from "react";

function Login({ onLogin, onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (user && email === user.email && password === user.password) {
      onLogin();
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="login-box">
      <h2>Spend Tracker Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account?{" "}
        <span
          onClick={onRegister}
          style={{ color: "blue", cursor: "pointer", fontWeight: "bold" }}
        >
          Register
        </span>
      </p>
    </div>
  );
}

export default Login;
