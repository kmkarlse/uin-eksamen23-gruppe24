import ShopItemCard from "../Cards/ShopItemCard";

export default function GameShop({ store }) {
  const newestTen = store.slice(0, 10);

  return (
    <section className="mygames-site">
      <h2>GAMESHOP</h2>
      <article className="mygames-container">
        {newestTen?.map((game) => (
          <ShopItemCard game={game} />
        ))}
      </article>
    </section>
  );
}
