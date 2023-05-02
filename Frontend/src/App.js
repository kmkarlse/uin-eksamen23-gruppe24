import "./CSS/main.css"
import Layout from "./conpoment/Layout";
import Dashboard from "./conpoment/Dashboard"
import GameShop from "./conpoment/GameShop"
import MyFavorites from "./conpoment/MyFavorites"
import MyGames from "./conpoment/MyGames"
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Dashboard />}/>
      <Route path="GameShop" element={<GameShop /> } />
      <Route path="MyFavorites" element={<MyFavorites /> } />
      <Route path="MyGames" element={<MyGames />} />
      </Route>
    </Routes>
  );
}

export default App;
