import { useState } from "react";
import { Link } from "react-router-dom";
//import { ReactComponent as Logo } from "../../Logo.svg";

export default function Nav() {
  const [drop, setDrop] = useState(false);

  return (
    <>
      <Link className="headerfont" to="/dash">
        GameShop
      </Link>
      <nav>
        <button onClick={() => setDrop(!drop)}>menu</button>
        {drop && (
          <div className="menu">
            <Link to="MyGames">MyGames</Link>
            <Link to="MyFavorites">MyFavorites</Link>
            <Link to="GameShop">GameShop</Link>
          </div>
        )}
      </nav>
    </>
  );
}
