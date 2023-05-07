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
            to={game?.name.replace(/\s/g, "-").toLowerCase()}
          >
            <FavoritesCard
              fav={fav}
              title={game.name}
              img={game.background_image}
              genres={game.genres}
            />
          </Link>
        ))}
      </article>
    </section>
  );
}
