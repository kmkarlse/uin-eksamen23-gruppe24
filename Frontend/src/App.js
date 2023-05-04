import "./CSS/main.css";
import Layout from "./conpoment/Layout";
import Dashboard from "./conpoment/Dashboard";
import GameShop from "./conpoment/GameShop";
import MyFavorites from "./conpoment/MyFavorites";
import MyGames from "./conpoment/MyGames";
import { Routes, Route } from "react-router-dom";
import GamePage from "./conpoment/GamePage";
import { mygames, store } from "./games";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard mygames={mygames} />} />
        <Route path="GameShop" element={<GameShop store={store} />} />
        <Route path="MyFavorites" element={<MyFavorites mygames={mygames} />} />
        <Route path="MyGames" element={<MyGames mygames={mygames} />} />
        <Route path=":slug" element={<GamePage mygames={mygames} />} />
      </Route>
    </Routes>
  );
}

export default App;
