import FavoritesCard from "../Cards/FavoritesCard";
import { Link } from "react-router-dom";

export default function MyFavorites({ fav }) {
  return (
    <section className="mygames-site">
      <h2>MY FAVORITES</h2>
      <article className="mygames-container">
        {fav.map((game) => (
          <Link
            key={game.id}
            className="gamelink"
            to={game?.game_title.replace(/\s/g, "-").toLowerCase()}
          >
            <FavoritesCard fav={fav} game={game} />
          </Link>
        ))}
      </article>
    </section>
  );
}
