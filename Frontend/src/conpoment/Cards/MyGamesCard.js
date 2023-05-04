export default function MyGamesCard({ title, img, genres }) {
  return (
    <>
      <article>
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
    </>
  );
}
