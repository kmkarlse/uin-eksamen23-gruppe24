import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <>
            <Link className="headerfont" to="/">Gamehub</Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="MyGames">MyGames</Link>
                <Link to="MyFavorites">MyFavorites</Link>
                <Link to="GameShop">GameShop</Link>
            </nav>
        </>
    )
}