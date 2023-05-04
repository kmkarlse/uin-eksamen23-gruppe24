import { Link } from "react-router-dom";
import { store } from "../games";

export default function GameShop() {
  return (
    <section className="dash">
      <section className="gameshop-site">
        <div className="section-header">
          <h2>GAMESHOP</h2>
        </div>
        <article className="gameshop-article">
          {store.map((game) => (
            <article key={game.id} className="game-article">
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
      </section>
    </section>
  );
}
