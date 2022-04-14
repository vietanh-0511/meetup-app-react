import {createContext, useState} from "react";

const FavoriteContext = createContext({
    favorites: [],
    totalFavorite: 0,
    addFavorite: (favoriteMeetup) => { },
    removeFavorite: (meetupId) => { },
    itemIsFavorite: (meetupId) =>{},
});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addfavoriteHandler(favoriteMeetup) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }

    function removefavoriteHandler(meetupId) { 
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        })
    }
    
    function itemIsFavoriteHandler(meetupId) { 
        return userFavorites.some(meetup => meetup.id === meetupId);
    }
    
    const context = {
        favorites: userFavorites,
        totalFavorite: userFavorites.length,
        addFavorite: addfavoriteHandler,
        removeFavorite: removefavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler,
    };

    return <FavoriteContext.Provider value={context}>     
        {props.children}
    </FavoriteContext.Provider>
}

export default FavoriteContext;