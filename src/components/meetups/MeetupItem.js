import { useContext } from 'react';

import classes from './MeetupItem.module.css';
import Card from '../ui/Card'
import FavoriteContext from '../../store/favorite-context';

function MeetupItem(props) {

  const favContext = useContext(FavoriteContext);
  const itemIsFavorite = favContext.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favContext.removeFavorite(props.id);
    }
    else {
      favContext.addFavorite({
        id: props.id,
        title: props.title,
        image: props.image,
        description: props.description,
        address: props.address,
      });
    }
}

    return (
      <li className={classes.item}>
        <Card>
          <div className={classes.image}>
            <img src={props.image} alt="placeholder" />
          </div>
          <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
          </div>
          <div className={classes.actions}>
            <button onClick={toggleFavoriteStatusHandler}>
              {itemIsFavorite ? "Remove from Favorite" : "Add Favorite"}
            </button>
          </div>
        </Card>
      </li>
    );
}

export default MeetupItem;
