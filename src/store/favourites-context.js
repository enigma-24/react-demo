import { createContext, useState } from 'react';

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (favouriteMeetup) => {}, //This function does nothing, it is added for autocompletion in IDE
  removeFavourite: (meetupId) => {}, //This function does nothing, it is added for autocompletion in IDE
  itemIsFavourite: (meetupId) => {}, //This function does nothing, it is added for autocompletion in IDE
});

export const FavouitesContextProvider = (props) => {
  const [userFavourites, setUserFavourites] = useState([]);

  function addFavouriteHandler(favouriteMeetup) {
    setUserFavourites((prevUserFavourite) => {
      return prevUserFavourite.concat(favouriteMeetup);
    });
  }

  function removeFavouriteHandler(meetupId) {
    setUserFavourites((prevUserFavourite) => {
      return prevUserFavourite.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsFavouriteHandler(meetupId) {
    return userFavourites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemIsFavourite: itemIsFavouriteHandler,
  };

  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContext;