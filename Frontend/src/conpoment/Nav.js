import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <>
            <Link to="/">
                <h1>Gamehub</h1>
            </Link>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>My Games</li>
                    <li>My fav</li>
                    <li>Game shop</li>
                </ul>
            </nav>
        </>
    )
}