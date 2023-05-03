export default function FavGameCard({ mygames }) {
  return (
    <article className="favorite-container">
      {mygames
        .filter((game) => game.fav)
        .map((game, index) => (
          <article key={index} className="favorite-item">
            <h2>{game.title}</h2>
            <div>
              {game.genres.map((genre, index) => (
                <p key={index} className="p-item">
                  {genre}
                </p>
              ))}
            </div>
            <img alt={game.title} src={game.img}></img>
          </article>
        ))}
    </article>
  );
}
