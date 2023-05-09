import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function GameCard({ game, handleFav }) {
  const gameId = game.id;
  const [id, setId] = useState();

  useEffect(() => {
    async function fetchGame() {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games/${gameId}?key=d96a5960ac5a4d588f77fe1b388d2021`
        );
        const data = await response.json();
        setId(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchGame();
  }, [gameId]);

  return (
    <article className="mygames-item">
      <Link
        key={game.id}
        className="gamelink"
        to={game?.game_title.replace(/\s/g, "-").toLowerCase()}
      >
        <img alt={game?.game_title} src={id?.background_image} />
        <h2>{game?.game_title}</h2>
        <div>
          {game.genres.slice(0, 2).map((genre, index) => (
            <p key={index} className="p-item">
              {genre.current}
            </p>
          ))}
          <p className="p-item">Hours Played: {game.hours_played}</p>
        </div>
      </Link>
      <button onClick={() => handleFav(game.id)}>star</button>
    </article>
  );
}
