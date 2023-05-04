export default function GameCard({ title, img, genres }) {
  return (
    <article className="mygames-item">
      <img alt={title} src={img} />
      <h2>{title}</h2>
      <div>
        {genres.map((genre, index) => (
          <p key={index} className="p-item">
            {genre}
          </p>
        ))}
      </div>
    </article>
  );
}
