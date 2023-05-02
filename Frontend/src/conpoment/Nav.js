import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <>
            <Link to="/">Gamehub</Link>
            <nav>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="GameShop">MyGames</Link>
                    <Link to="MyFavorites">MyFavorites</Link>
                    <Link to="MyGames">GameShop</Link>
                </ul>
            </nav>
        </>
    )
}