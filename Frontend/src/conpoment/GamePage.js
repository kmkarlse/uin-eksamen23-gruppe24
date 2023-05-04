import { useParams } from "react-router-dom";
import { mygames } from "../games";

export default function GamePage() {
  const { slug } = useParams();
  const game = mygames?.find(
    (rec) => rec?.title.replace(/\s/g, "-").toLowerCase() === slug
  );

  return (
    <section className="dash-gamepage">
      <article className="gamepage-article">
        <img alt={game.title} src={game.img} />
        <div>
          <h2>{game.title}</h2>

          <div>
            Kategori:
            {game.genres.map((genre, index) => (
              <p key={index}>{genre}</p>
            ))}
          </div>
          <p>Utgitt: {game.released}</p>
          <a className="button" href={game.link}>
            Kjøp
          </a>
        </div>
      </article>
    </section>
  );
}
