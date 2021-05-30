import { useContext } from 'react';

import Card from '../ui/Card';
import FavouritesContext from '../../store/favourites-context';
import classes from './MeetupItem.module.css';

const MeetupItem = (props) => {
  const favContext = useContext(FavouritesContext);

  const isItemFavourite = favContext.itemIsFavourite(props.id);

  const toggleFavouriteStatusHandler = () => {
    if (isItemFavourite) {
      favContext.removeFavourite(props.id);
    } else {
      favContext.addFavourite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouriteStatusHandler}>{isItemFavourite ? 'Remove from Favourites' : 'Add to Favourites'}</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
