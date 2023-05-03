import { Link } from "react-router-dom";

export default function GameShop() {
  const store = [
    {
      title: "Counter-Strike: Global Offensive",
      id: 1,
      released: "2012-09-21",
      genres: ["Action", "RPG"],
      link: "https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/",
      img: "https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg?t=1668125812",
    },
    {
      title: "STAR WARS Jedi: Survivor™",
      id: 2,
      released: "2023-04-28",
      genres: ["Action", "Adventure"],
      link: "https://store.steampowered.com/app/1774580/STAR_WARS_Jedi_Survivor/",
      img: "https://cdn.akamai.steamstatic.com/steam/apps/1774580/header.jpg?t=1681406818",
    },
    {
      title: "Cyberpunk 2077",
      id: 3,
      released: "2020-12-10",
      genres: ["Cyberpunk", "RPG", "Action"],
      link: "https://store.steampowered.com/app/1091500/Cyberpunk_2077/",
      img: "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg?t=1680026109",
    },
    {
      title: "Hogwarts Legacy",
      id: 4,
      released: "2020-02-10",
      genres: ["Action", "Adventure", "RPG"],
      link: "https://store.steampowered.com/app/990080/Hogwarts_Legacy/",
      img: "https://cdn.akamai.steamstatic.com/steam/apps/990080/header.jpg?t=1680647016",
    },
    {
      title: "STAR WARS™: The Old Republic™",
      id: 5,
      released: "2011-12-20",
      genres: ["MMORPG", "Action", "SCI-FI"],
      link: "https://store.steampowered.com/app/1286830/STAR_WARS_The_Old_Republic/",
      img: "https://cdn.akamai.steamstatic.com/steam/apps/1286830/header.jpg?t=1680085446",
    },
  ];

  return (
    <section className="dash">
      <section className="gameshop-site">
        <div className="section-header">
          <h2>GAMESHOP</h2>
          <Link to="GameShop">Visit Shop</Link>
        </div>
        <article className="gameshop-article">
          {store.map((game, index) => (
            <article key={index} className="game-article">
              <img alt={game.title} src={game.img}></img>
              <div className="text-content">
                <h2>{game.title}</h2>
                {game.genres.map((genre) => (
                  <p key={genre}>{genre}</p>
                ))}
                <Link className="button" to={game.link}>
                  Kjøp
                </Link>
              </div>
            </article>
          ))}
        </article>
      </section>
    </section>
  );
}
