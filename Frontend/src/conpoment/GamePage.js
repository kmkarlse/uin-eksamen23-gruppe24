import { useParams } from "react-router-dom";

export default function GamePage({ mygames }) {
  const { slug } = useParams();
  const game = mygames.find(
    (item) => item.title.replace(/\s/g, "_").toLowerCase() === slug
  );

  return (
    <section>
      <h1>{game.title}</h1>
    </section>
  );
}
