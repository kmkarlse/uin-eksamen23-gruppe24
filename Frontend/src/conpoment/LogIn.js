import { useState } from "react";
import { fetchUser } from "../lib/sanity/gameServices";

export default function LogIn() {
  const [username, setUsername] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const user = await fetchUser(username);

      if (user.length > 0) {
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "/dash";
      } else {
        console.error("feil passord eller brukernav");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
