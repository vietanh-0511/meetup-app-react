import { useContext } from "react";

import FavoriteContext from "../store/favorite-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoriteMeetUpPage() {
  const favContext = useContext(FavoriteContext);

    let content;

    if (favContext.totalFavorite === 0) {
        content = <p>You have no favorites.</p>;
    }
    else {
        content = <MeetupList meetups={favContext.favorites} />;
    }
    
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoriteMeetUpPage;
