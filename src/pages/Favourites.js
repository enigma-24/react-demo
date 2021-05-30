import { useContext } from 'react';

import FavouritesContext from '../store/favourites-context';
import MeetupList from '../components/meetups/MeetupList';

const FavouritesPage = () => {
  const favContext = useContext(FavouritesContext);

  let content;

  if (favContext.totalFavourites === 0)
    content = <p>You have no favourites! Start by adding some!</p>;
  else content = <MeetupList meetups={favContext.favourites} />;

  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
};

export default FavouritesPage;
