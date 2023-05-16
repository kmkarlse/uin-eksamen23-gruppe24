import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function StoreItemCard({ game, handleFav }) {
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
    <article className="game-article">
      <Link key={game.id} to={game?.name.replace(/\s/g, "-").toLowerCase()}>
        <img alt={game?.name} src={game?.background_image}></img>
      </Link>
      <div className="text-content">
        <h2>{game?.name}</h2>
        <div>
          {game?.genres.slice(0, 2).map((genre) => (
            <p key={genre.id}>{genre?.name}</p>
          ))}
        </div>
        <button onClick={() => handleFav(game?.id)}>star</button>
        <Link to={gameStoreDetail?.url} className="button">
          Kjøp
        </Link>
      </div>
    </article>
  );
}
