import { useParams } from "react-router-dom";

export default function GameShopPage({ store }) {
  const { slug } = useParams();
  const game = store?.find(
    (rec) => rec?.name.replace(/\s/g, "-").toLowerCase() === slug
  );

  return (
    <section className="dash-gamepage">
      <article className="gamepage-article">
        <img alt={game?.game_title} src={game?.background_image} />
        <div>
          <h2>{game?.game_title}</h2>

          <div>
            Kategori:
            {game?.genres?.map((genre, index) => (
              <p key={index}>{genre.current}</p>
            ))}
          </div>
          <p>Utgitt: {game?.released}</p>
        </div>
      </article>
    </section>
  );
}
