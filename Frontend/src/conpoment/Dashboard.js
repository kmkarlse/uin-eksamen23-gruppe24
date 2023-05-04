import { Link } from "react-router-dom";
import GameCard from "./GameCard";
import FavGameCard from "./FavGameCard";
import GameShopCard from "./GameShopCard";
import { store, mygames } from "../games";

export default function Dashboard() {
  return (
    <>
      <section className="dash">
        <section className="gameshop">
          <div className="section-header">
            <h2>GAMESHOP</h2>
            <Link className="button" to="GameShop">
              Visit Shop
            </Link>
          </div>
          <GameShopCard store={store} />
        </section>
        <section className="mygames">
          <h2>My Games-Library {mygames.length} games</h2>
          <article className="mygames-container">
            {mygames.map((game) => (
              <Link
                key={game.id}
                className="gamelink"
                to={game?.title.replace(/\s/g, "-").toLowerCase()}
              >
                <GameCard
                  mygames={mygames}
                  title={game.title}
                  img={game.img}
                  genres={game.genres}
                />
              </Link>
            ))}
          </article>
        </section>
        <aside>
          <h2>MY FAVORITES</h2>
          {mygames
            .filter((game) => game.fav)
            .map((game) => (
              <Link
                key={game.id}
                className="gamelink"
                to={game?.title.replace(/\s/g, "-").toLowerCase()}
              >
                <FavGameCard
                  mygames={mygames}
                  title={game.title}
                  img={game.img}
                  genres={game.genres}
                />
              </Link>
            ))}
        </aside>
      </section>
    </>
  );
}
