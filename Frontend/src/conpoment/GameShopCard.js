import { Link } from "react-router-dom";

export default function GameShopCard({ store }) {
  return (
    <article className="gameshop-article">
      {store.slice(0, 3).map((game, index) => (
        <article key={index} className="game-article">
          <img alt={game.title} src={game.img}></img>
          <div className="text-content">
            <h2>{game.title}</h2>
            {game.genres.map((genre) => (
              <p key={genre}>{genre}</p>
            ))}
            <Link className="button" to={game.link}>
              Kjøp
            </Link>
          </div>
        </article>
      ))}
    </article>
  );
}
