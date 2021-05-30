import { useContext } from 'react';

import FavouritesContext from '../../store/favourites-context';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const favContext = useContext(FavouritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Meetups</Link>
          </li>
          <li>
            <Link to='/new-meetup'>Add NewMeetup</Link>
          </li>
          <li>
            <Link to='/favourites'>
              My Favourites{' '}
              <span className={classes.badge}>
                {favContext.totalFavourites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
