
import React, { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext); //instead of typing useContext(FavouritesContext), type useFavourites()

export const FavoritesProvider = ({ children }) => {  //children = any component inside the provider in the component tree
  const [favoriteDriver, setFavoriteDriver] = useState(null);
  const [favoriteConstructor, setFavoriteConstructor] = useState(null);

  
  useEffect(() => {
    const savedDriver = localStorage.getItem("favoriteDriver"); //retrieves the string
    const savedConstructor = localStorage.getItem("favoriteConstructor");

    if (savedDriver) setFavoriteDriver(JSON.parse(savedDriver)); //converts string into js object
    if (savedConstructor) setFavoriteConstructor(JSON.parse(savedConstructor));
  }, []);


  useEffect(() => {
    if (favoriteConstructor) {
      localStorage.setItem("favoriteConstructor", JSON.stringify(favoriteConstructor)); //saves to local storage
      document.documentElement.style.setProperty("--theme-color", favoriteConstructor.themeColor);
    } else {
      localStorage.removeItem("favoriteConstructor");
      document.documentElement.style.setProperty("--theme-color", "#DC0000"); // fallback
    }
  }, [favoriteConstructor]); //runs whenever favouriteConstructor value changes

  useEffect(() => {  //same functionality as above
    if (favoriteDriver) {
      localStorage.setItem("favoriteDriver", JSON.stringify(favoriteDriver));
    } else {
      localStorage.removeItem("favoriteDriver");
    }
  }, [favoriteDriver]);

  const updateFavoriteDriver = (driver) => {
    setFavoriteDriver((prev) =>
      prev?.name === driver.name ? null : driver
    );
  };

  const updateFavoriteConstructor = (constructor) => {
    setFavoriteConstructor((prev) =>
      prev?.name === constructor.name ? null : constructor
    );
  };

  return (
    <FavoritesContext.Provider
      value={{
        favoriteDriver,
        updateFavoriteDriver,
        favoriteConstructor,
        updateFavoriteConstructor,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
