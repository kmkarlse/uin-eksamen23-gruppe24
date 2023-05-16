import { Link } from "react-router-dom";
import FavGameCard from "./Cards/FavGameCard";
import GameCard from "./Cards/GameCard";
import GameShopCard from "./Cards/GameShopCard";

export default function Dashboard({
  mygames,
  store,
  fav,
  handleFav,
  buyGame,
  gamesCounter,
}) {
  return (
    <>
      <div className="section-header">
        <h2>GAMESHOP</h2>
        <Link className="button" to="/GameShop">
          Visit Shop
        </Link>
      </div>
      <GameShopCard store={store} buyGame={buyGame} handleFav={handleFav} />
      <section className="dash">
        <section className="mygames">
          <h2>My Games-Library ({gamesCounter} games)</h2>
          <article className="mygames-container">
            {mygames?.slice(0, 4).map((game) => (
              <GameCard key={game.id} game={game} handleFav={handleFav} />
            ))}
          </article>
        </section>
        <aside>
          <h2>MY FAVORITES ({fav?.length} games)</h2>
          <section>
            {fav?.slice(0, 2).map((game) => (
              <Link
                key={game.id}
                className="gamelink"
                to={game?.game_title.replace(/\s/g, "-").toLowerCase()}
              >
                <FavGameCard game={game} title={game.game_title} />
              </Link>
            ))}
          </section>
        </aside>
      </section>
    </>
  );
}
