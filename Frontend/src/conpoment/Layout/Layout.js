import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <article>
          RAWG is used on this site:
          <Link to="https://rawg.io/apidocs" className="button">
            RAWG apiDoc
          </Link>
        </article>
      </footer>
    </>
  );
}
