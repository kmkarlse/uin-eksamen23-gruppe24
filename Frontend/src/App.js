import "./CSS/main.css";
import Layout from "./conpoment/Layout/Layout";
import Dashboard from "./conpoment/Dashboard";
import GameShop from "./conpoment/pages/GameShop";
import MyFavorites from "./conpoment/pages/MyFavorites";
import MyGames from "./conpoment/pages/MyGames";
import { Routes, Route } from "react-router-dom";
import GamePage from "./conpoment/pages/GamePage";
import { useState, useEffect } from "react";

//d96a5960ac5a4d588f77fe1b388d2021

function App() {
  const [mygames, setMyGames] = useState([]);
  const [store, setStore] = useState([]);

  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await fetch(
          "https://api.rawg.io/api/games?key=d96a5960ac5a4d588f77fe1b388d2021"
        );
        const data = await response.json();
        setStore(data.results);
      } catch (error) {
        console.error(error);
      }
    }

    fetchGames();
  }, []);

  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await fetch(
          "https://api.rawg.io/api/games?key=d96a5960ac5a4d588f77fe1b388d2021"
        );
        const data = await response.json();
        setMyGames(data.results);
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

  const catagoryFilter = mygames.filter((cat) =>
    cat.genres.some((cat) => cat.slug.includes("action"))
  );

  const [fav, setFav] = useState([]);

  const handleFav = (id) => {
    const favGame = mygames.filter((game) => game.id === id)[0];
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

  console.log(fav);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Dashboard
              fav={fav}
              handleFav={handleFav}
              mygames={mygames}
              catagoryFilter={catagoryFilter}
              store={latestRelease}
            />
          }
        />
        <Route path="GameShop" element={<GameShop store={latestRelease} />} />
        <Route
          path="GameShop/:slug"
          element={<GamePage store={latestRelease} />}
        />
        <Route path="MyFavorites" element={<MyFavorites fav={fav} />} />
        <Route
          path="MyGames"
          element={
            <MyGames catagoryFilter={catagoryFilter} handleFav={handleFav} />
          }
        />
        <Route path=":slug" element={<GamePage mygames={mygames} />} />
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
