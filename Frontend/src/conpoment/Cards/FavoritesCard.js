export default function FavoritesCard({ title, img, genres }) {
  return (
    <>
      <article>
        <img alt={title} src={img}></img>
        <h2>{title}</h2>
        <div>
          {genres.map((genre) => (
            <p className="p-item">{genre}</p>
          ))}
        </div>
      </article>
    </>
  );
}
