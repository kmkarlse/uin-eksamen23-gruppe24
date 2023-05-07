import { Link } from "react-router-dom";
import FavGameCard from "./Cards/FavGameCard";
import GameCard from "./Cards/GameCard";
import GameShopCard from "./Cards/GameShopCard";

export default function Dashboard({ mygames, store, fav, handleFav, buyGame }) {
  return (
    <>
      <div className="section-header">
        <h2>GAMESHOP</h2>
        <Link className="button" to="GameShop">
          Visit Shop
        </Link>
      </div>
      <GameShopCard store={store} buyGame={buyGame} handleFav={handleFav} />
      <section className="dash">
        <section className="mygames">
          <h2>My Games-Library {mygames.slice(0, 4).length} games</h2>
          <article className="mygames-container">
            {mygames.slice(0, 4).map((game) => (
              <GameCard
                key={game.id}
                game={game}
                handleFav={handleFav}
                title={game.name}
                img={game.background_image}
                genres={game.genres}
              />
            ))}
          </article>
        </section>
        <aside>
          <h2>MY FAVORITES</h2>
          <section>
            {fav.map((game) => (
              <Link
                key={game.id}
                className="gamelink"
                to={game?.name.replace(/\s/g, "-").toLowerCase()}
              >
                <FavGameCard
                  key={game.id}
                  title={game.name}
                  img={game.background_image}
                  genres={game.genres}
                />
              </Link>
            ))}
          </section>
        </aside>
      </section>
    </>
  );
}
