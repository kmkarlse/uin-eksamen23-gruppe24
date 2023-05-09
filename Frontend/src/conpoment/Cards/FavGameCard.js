import { useEffect, useState } from "react";

export default function FavGameCard({ title, game }) {
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
    <article className="favorite-item">
      <h2>{title}</h2>
      <div>
        {game.genres.map((genre, index) => (
          <p key={index} className="p-item">
            {genre.current}
          </p>
        ))}
      </div>
      <img alt={title} src={id?.background_image}></img>
    </article>
  );
}
