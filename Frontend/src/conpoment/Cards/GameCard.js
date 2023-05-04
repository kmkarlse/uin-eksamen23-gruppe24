export default function GameCard({ title, img, genres }) {
  return (
    <article className="mygames-item">
      <img alt={title} src={img} />
      <div>
        <h2>{title}</h2>
        {genres.map((genre, index) => (
          <p key={index} className="p-item">
            {genre}
          </p>
        ))}
      </div>
    </article>
  );
}
