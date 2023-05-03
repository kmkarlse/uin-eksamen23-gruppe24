export default function MyFavorites() {
  const mygames = [
    {
      title: "Grand Theft Auto V",
      id: 6,
      released: "2015-04-14",
      genres: ["Action", "RPG"],
      link: "https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/",
      img: "https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg?t=1678296348",
      fav: true,
    },
    {
      title: "Destiny 2",
      id: 7,
      released: "2019-10-19",
      genres: ["FPS", "MMORPG"],
      link: "https://store.steampowered.com/app/1085660/Destiny_2/",
      img: "https://cdn.akamai.steamstatic.com/steam/apps/1085660/header_alt_assets_1.jpg?t=1680800510",
      fav: false,
    },
    {
      title: "EA SPORTS™ FIFA 23",
      id: 8,
      released: "2020-01-01",
      genres: ["Sport", "Fotball"],
      link: "https://store.steampowered.com/app/1811260/EA_SPORTS_FIFA_23/",
      img: "https://cdn.akamai.steamstatic.com/steam/apps/1811260/header.jpg?t=1679504733",
      fav: false,
    },
    {
      title: "Red Dead Redemption 2",
      id: 9,
      released: "2019-12-05",
      genres: ["RPG", "Action", "Fantasy"],
      link: "https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/",
      img: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg?t=1671485009",
      fav: true,
    },
    {
      title: "7 Days to Die",
      id: 10,
      released: "2013-12-13",
      genres: ["Horror", "RPG"],
      link: "https://store.steampowered.com/app/251570/7_Days_to_Die/",
      img: "https://cdn.akamai.steamstatic.com/steam/apps/251570/header.jpg?t=1650477344",
      fav: false,
    },
    {
      title: "The Sims™ 4",
      id: 11,
      released: "2014-09-02",
      genres: ["Simulation", "Adventure"],
      link: "https://store.steampowered.com/app/1222670/The_Sims_4/",
      img: "https://cdn.akamai.steamstatic.com/steam/apps/1222670/header.jpg?t=1679000582",
      fav: true,
    },
    {
      title: "The Witcher® 3: Wild Hunt",
      id: 12,
      released: "2015-05-18",
      genres: ["Adventure", "Action", "Fantasy"],
      link: "https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/",
      img: "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg?t=1675178392",
      fav: true,
    },
    {
      title: "The Elder Scrolls V: Skyrim Special Edition",
      id: 13,
      released: "2016-10-28",
      genres: ["Adventure", "Action", "Fantasy"],
      link: "https://store.steampowered.com/app/489830/The_Elder_Scrolls_V_Skyrim_Special_Edition/",
      img: "https://cdn.akamai.steamstatic.com/steam/apps/489830/header.jpg?t=1650909796",
      fav: true,
    },
    {
      title: "NARAKA: BLADEPOINT",
      id: 14,
      released: "2021-08-12",
      genres: ["Action", "PvP"],
      link: "https://store.steampowered.com/app/1203220/NARAKA_BLADEPOINT/",
      img: "https://cdn.akamai.steamstatic.com/steam/apps/1203220/header.jpg?t=1679589810",
      fav: false,
    },
    {
      title: "Resident Evil 4",
      id: 15,
      released: "2023-04-24",
      genres: ["RPG", "Strategy", "Horror"],
      link: "https://store.steampowered.com/app/2050650/Resident_Evil_4/",
      img: "https://cdn.akamai.steamstatic.com/steam/apps/2050650/header.jpg?t=1680840402",
      fav: true,
    },
  ];
  return (
    <section className="fav-site">
      <div className="section-header">
        <h2>MY FAVORITES</h2>
      </div>
      <article className="favorite-article">
        {mygames
          .filter((game) => game.fav)
          .map((game) => (
            <article className="fav-item">
              <img alt={game.title} src={game.img}></img>
              <h2>{game.title}</h2>
              <div className="text-content">
                {game.genres.map((genre) => (
                  <p className="p-item">{genre}</p>
                ))}
              </div>
            </article>
          ))}
      </article>
    </section>
  );
}
