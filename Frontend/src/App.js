import "./CSS/main.css";
import Layout from "./conpoment/Layout/Layout";
import Dashboard from "./conpoment/Dashboard";
import GameShop from "./conpoment/pages/GameShop";
import MyFavorites from "./conpoment/pages/MyFavorites";
import MyGames from "./conpoment/pages/MyGames";
import { Routes, Route } from "react-router-dom";
import GamePage from "./conpoment/pages/GamePage";
import { useState, useEffect } from "react";
import { fetchAllGames } from "./lib/sanity/gameServices";
import GameShopPage from "./conpoment/pages/GameShopPage";
import LogIn from "./conpoment/LogIn";

const GAMES_API =
  "https://api.rawg.io/api/games?key=d96a5960ac5a4d588f77fe1b388d2021";

function App() {
  const [mygames, setMyGames] = useState([]);
  const [gamesCounter, setGamesCounter] = useState(0);
  const [store, setStore] = useState([]);
  const [fav, setFav] = useState([]);

  const getGames = async () => {
    const data = await fetchAllGames();

    setMyGames(data.games);
    setGamesCounter(data.count);
  };

  useEffect(() => {
    getGames();
  }, []);

  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await fetch(GAMES_API);
        const data = await response.json();
        setStore(data.results);
      } catch (error) {
        console.error(error);
      }
    }

    fetchGames();
  }, []);

  //filter etter nyligste utgivelse
  const latestRelease = store.sort(
    (a, b) => new Date(b.released) - new Date(a.released)
  );

  const catagoryFilter = mygames.filter((game) =>
    game.genres.some((genre) => genre.current.includes("adventure"))
  );

  useEffect(() => {
    const favFromSanity = mygames.filter((game) => game.favorite === true);
    setFav(favFromSanity);
  }, [mygames]);

  const handleFav = (id) => {
    const favGame = mygames?.filter((game) => game?.id === id)[0];
    setFav(mygames.filter((game) => game.id !== id));
    setFav([...fav, favGame]);
  };

  useEffect(() => {
    sessionStorage.setItem("favGame", JSON.stringify(fav));
  }, [fav]);

  useEffect(() => {
    const savedFavGame = sessionStorage.getItem("favGame");
    if (savedFavGame) {
      setFav(JSON.parse(savedFavGame));
    }
  }, []);

  return (
    <Routes>
      <Route index element={<LogIn />} />
      <Route element={<Layout />}>
        <Route
          path="/dash"
          element={
            <Dashboard
              path="dashboard"
              fav={fav}
              handleFav={handleFav}
              mygames={mygames}
              catagoryFilter={catagoryFilter}
              store={latestRelease}
              gamesCounter={gamesCounter}
            />
          }
        />
        <Route path="GameShop" element={<GameShop store={latestRelease} />} />
        <Route
          path="GameShop/:slug"
          element={<GameShopPage store={latestRelease} />}
        />
        <Route path="MyFavorites" element={<MyFavorites fav={fav} />} />
        <Route
          path="MyGames"
          element={
            <MyGames
              catagoryFilter={catagoryFilter}
              gamesCounter={gamesCounter}
              handleFav={handleFav}
            />
          }
        />
        <Route path="/:slug" element={<GamePage mygames={mygames} />} />
        <Route path="mygames/:slug" element={<GamePage mygames={mygames} />} />
        <Route
          path="myfavorites/:slug"
          element={<GamePage mygames={mygames} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
