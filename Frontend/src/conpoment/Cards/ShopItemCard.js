import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ShopItemCard({ game }) {
  const setId = game.id;

  const [game_pk] = useState(setId);

  const [gameStoreDetail, setGameStoreDetail] = useState();

  useEffect(() => {
    async function fetchGameStoreDetail() {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games/${game_pk}/stores?key=d96a5960ac5a4d588f77fe1b388d2021`
        );
        const data = await response.json();
        const steamDetails = data.results.find((store) => store.store_id === 1);
        setGameStoreDetail(steamDetails);
      } catch (error) {
        console.error(error);
      }
    }

    fetchGameStoreDetail();
  }, [game_pk]);

  return (
    <>
      <article className="mygames-item">
        <Link key={game.id} to={game?.name.replace(/\s/g, "-").toLowerCase()}>
          <img alt={game.name} src={game.background_image} />
          <h2>{game.name}</h2>
          <p>Released: {game.released}</p>
          <div>
            {game.genres.slice(0, 2).map((genre) => (
              <p key={genre.id} className="p-item">
                {genre.name}
              </p>
            ))}
          </div>
        </Link>
        <Link className="button" to={gameStoreDetail?.url}>
          kjøp
        </Link>
      </article>
    </>
  );
}
