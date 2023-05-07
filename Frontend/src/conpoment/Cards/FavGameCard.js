export default function FavGameCard({ title, img, genres }) {
  return (
    <article className="favorite-item">
      <h2>{title}</h2>
      <div>
        {genres.map((genre, index) => (
          <p key={index} className="p-item">
            {genre.name}
          </p>
        ))}
      </div>
      <img alt={title} src={img}></img>
    </article>
  );
}
