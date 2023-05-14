import { Link } from "react-router-dom";
//import { ReactComponent as Logo } from "../../Logo.svg";

export default function Nav() {
  return (
    <>
      <Link className="headerfont" to="/dash">
        GameShop
      </Link>
      <nav className="dropdown">
        <button className="dropbtn">Menu</button>
        <div className="dropdown-content">
          <Link to="MyGames">MyGames</Link>
          <Link to="MyFavorites">MyFavorites</Link>
          <Link to="GameShop">GameShop</Link>
        </div>
      </nav>
    </>
  );
}
