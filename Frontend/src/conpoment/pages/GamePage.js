import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function GamePage({ mygames }) {
  const { slug } = useParams();
  const game = mygames?.find(
    (rec) => rec?.game_title.replace(/\s/g, "-").toLowerCase() === slug
  );

  const gameId = game?.id;
  const [gameFromApi, setgameFromApi] = useState();
  const [gameStoreDetail, setGameStoreDetail] = useState([]);

  useEffect(() => {
    async function fetchGame() {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games/${gameId}?key=d96a5960ac5a4d588f77fe1b388d2021`
        );
        const data = await response.json();
        setgameFromApi(data);
      } catch (error) {
        console.error(error);
      }
    }

    async function fetchGameStoreDetail() {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games/${gameId}/stores?key=d96a5960ac5a4d588f77fe1b388d2021`
        );
        const data = await response.json();
        setGameStoreDetail(data.results);
      } catch (error) {
        console.error(error);
      }
    }

    fetchGame();
    fetchGameStoreDetail();
  }, [gameId]);

  return (
    <section className="dash-gamepage">
      <article className="gamepage-article">
        <img alt={game?.game_title} src={gameFromApi?.background_image} />
        <h2>{game?.game_title}</h2>
        <div className="game-info">
          <h3>Kategori:</h3>
          {game?.genres?.map((genre, index) => (
            <p key={index}>{genre.current}</p>
          ))}
          {gameFromApi?.tags.map((tag, index) => (
            <p key={index}>{tag.name},</p>
          ))}
          <ul>
            <li>Utgitt: {gameFromApi?.released}</li>
            <li>Rating: {gameFromApi?.rating}</li>
          </ul>
          <p>{gameFromApi?.description_raw}</p>
          <span className="dev-info">
            <h3>Developers</h3>
            {gameFromApi?.developers.map((item, index) => (
              <p key={index}>{item.name}</p>
            ))}
          </span>
          <span className="dev-info">
            <h3>Publisher</h3>
            {gameFromApi?.publishers.map((item, index) => (
              <p key={index}>{item.name}</p>
            ))}
          </span>
          <span className="dev-info">
            <h3>Plattforms</h3>
            {gameFromApi?.platforms.map((item) => (
              <p key={item.platform.id}>{item.platform.name}</p>
            ))}
          </span>
          <span>
            <h3>Stores</h3>
            {gameFromApi?.stores.map((store) => {
              let storeUrl = gameStoreDetail?.find(
                (gameStoreDetail) =>
                  gameStoreDetail?.store_id === store?.store.id
              ).url;

              return (
                <span key={store.store.id}>
                  <Link className="button" to={storeUrl}>
                    {store.store.name}
                  </Link>
                </span>
              );
            })}
          </span>
        </div>
      </article>
    </section>
  );
}
