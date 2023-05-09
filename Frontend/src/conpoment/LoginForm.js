import { useState } from "react";
import axios from "axios";

export default function LoginForm({ setAuthenticated }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/login", {
        email,
        username,
        password,
      });

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        setAuthenticated(true); // set authenticated state to true
        window.location = "/dashboard";
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <input
        type="username"
        placeholder="Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        required
      />
      <input
        type="passord"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}
