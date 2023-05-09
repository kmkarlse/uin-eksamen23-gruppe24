import MyGamesCard from "../Cards/MyGamesCard";

export default function MyGames({ catagoryFilter, handleFav }) {
  return (
    <section className="mygames-site">
      <h2>My Games-Library {catagoryFilter.length} games</h2>
      <article className="mygames-container">
        {catagoryFilter.slice(0, 20).map((game) => (
          <MyGamesCard
            key={game.id}
            handleFav={handleFav}
            game={game}
            catagoryFilter={catagoryFilter}
          />
        ))}
      </article>
    </section>
  );
}
