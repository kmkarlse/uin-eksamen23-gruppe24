import { Link } from "react-router-dom";
//import { ReactComponent as Logo } from "../../Logo.svg";

export default function Nav() {
  return (
    <>
      <Link className="headerfont" to="/">
        GameShop
      </Link>
      <nav>
        <Link to="MyGames">MyGames</Link>
        <Link to="MyFavorites">MyFavorites</Link>
        <Link to="GameShop">GameShop</Link>
      </nav>
    </>
  );
}
