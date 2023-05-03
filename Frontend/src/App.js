import "./CSS/main.css";
import Layout from "./conpoment/Layout";
import Dashboard from "./conpoment/Dashboard";
import GameShop from "./conpoment/GameShop";
import MyFavorites from "./conpoment/MyFavorites";
import MyGames from "./conpoment/MyGames";
import { Routes, Route } from "react-router-dom";
import GamePage from "./conpoment/GamePage";

function App({ mygames }) {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="GameShop" element={<GameShop />} />
        <Route path="MyFavorites" element={<MyFavorites />} />
        <Route path="MyGames" element={<MyGames />}>
          <Route path=":slug" element={<GamePage mygames={mygames} />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
