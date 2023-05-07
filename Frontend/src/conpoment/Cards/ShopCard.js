export default function ShopCard({ title, img, genres }) {
  return (
    <article className="game-article">
      <img alt={title} src={img} />
      <h2>{title}</h2>
      <div className="text-content">
        {genres.map((genre, index) => (
          <p key={index} className="p-item">
            {genre.name}
          </p>
        ))}
      </div>
    </article>
  );
}
