import { useContext } from "react";
import {Link} from "react-router-dom";
import navClass from "./MainNavigation.module.css";
import FavoriteContext from "../../store/favorite-context";

function MainNavigation() {

  const favContext = useContext(FavoriteContext);

  return (
      <header className={navClass.header}>
      <div className={navClass.logo}>Meetup App</div>
      <nav>
        <ul className={navClass.ul}>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorites</Link>
            <span className={navClass.badge}>{favContext.totalFavorite}</span>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
