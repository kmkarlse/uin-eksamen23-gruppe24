import FavoritesCard from "./Cards/FavoritesCard";
import { Link } from "react-router-dom";

export default function MyFavorites({ mygames }) {
  return (
    <section className="mygames-site">
      <h2>MY FAVORITES</h2>
      <article className="mygames-container">
        {mygames
          .filter((game) => game.fav)
          .map((game) => (
            <Link
              key={game.id}
              className="gamelink"
              to={game?.title.replace(/\s/g, "-").toLowerCase()}
            >
              <FavoritesCard
                mygames={mygames}
                title={game.title}
                img={game.img}
                genres={game.genres}
              />
            </Link>
          ))}
      </article>
    </section>
  );
}
