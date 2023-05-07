import { useParams } from "react-router-dom";

export default function GamePage({ mygames }) {
  const { slug } = useParams();
  const game = mygames?.find(
    (rec) => rec?.name.replace(/\s/g, "-").toLowerCase() === slug
  );

  return (
    <section className="dash-gamepage">
      <article className="gamepage-article">
        <img alt={game?.name} src={game?.background_image} />
        <div>
          <h2>{game?.name}</h2>

          <div>
            Kategori:
            {game?.genres?.map((genre, index) => (
              <p key={index}>{genre.name}</p>
            ))}
          </div>
          <p>Utgitt: {game?.released}</p>
        </div>
      </article>
    </section>
  );
}
