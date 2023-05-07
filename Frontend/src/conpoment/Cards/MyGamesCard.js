import { Link } from "react-router-dom";

export default function MyGamesCard({ title, img, genres, handleFav, game }) {
  return (
    <>
      <article className="mygames-item">
        <Link
          key={game.id}
          className="gamelink"
          to={game?.name.replace(/\s/g, "-").toLowerCase()}
        >
          <img alt={title} src={img} />
          <h2>{title}</h2>
          <div>
            {genres.slice(0, 2).map((genre, index) => (
              <p key={index} className="p-item">
                {genre.name}
              </p>
            ))}
          </div>
        </Link>
        <button onClick={() => handleFav(game.id)}>star</button>
      </article>
    </>
  );
}
