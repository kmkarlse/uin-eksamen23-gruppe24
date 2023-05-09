import StoreItemCard from "../Cards/StoreItemCard";

export default function GameShopCard({ store, handleFav }) {
  return (
    <article className="gameshop-article">
      {store?.slice(0, 3).map((game, index) => (
        <StoreItemCard key={index} game={game} handleFav={handleFav} />
      ))}
    </article>
  );
}
