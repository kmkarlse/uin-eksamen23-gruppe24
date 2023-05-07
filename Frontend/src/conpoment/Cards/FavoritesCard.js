export default function FavoritesCard({ title, img, genres }) {
  return (
    <>
      <article className="mygames-item">
        <img alt={title} src={img} />
        <h2>{title}</h2>
        <div>
          {genres.map((genre) => (
            <p key={genre.id} className="p-item">
              {genre.name}
            </p>
          ))}
        </div>
      </article>
    </>
  );
}
