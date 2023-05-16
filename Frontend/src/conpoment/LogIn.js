import { useState } from "react";
import { fetchUser } from "../lib/sanity/gameServices";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const [username, setUsername] = useState("");
  //https://reactrouter.com/en/main/hooks/use-navigate
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const user = await fetchUser(username);

      if (user.length > 0) {
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/dash");
      } else {
        console.error("feil passord eller brukernav");
      }
    } catch (error) {
      console.log(error);
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
