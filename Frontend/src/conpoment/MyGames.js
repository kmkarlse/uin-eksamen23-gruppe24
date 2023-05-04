import { Link } from "react-router-dom";
import MyGamesCard from "./Cards/MyGamesCard";

export default function MyGames({ mygames }) {
  return (
    <section className="mygames-site">
      <h2>My Games-Library {mygames.length} games</h2>
      <article className="mygames-container">
        {mygames.map((game) => (
          <Link
            key={game.id}
            className="gamelink"
            to={game?.title.replace(/\s/g, "-").toLowerCase()}
          >
            <MyGamesCard
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
