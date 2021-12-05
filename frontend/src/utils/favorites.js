export const favoritesUtils = (state, title, removeFromFavorite , addToFavorite ) => {
    const send = state ? removeFromFavorite : addToFavorite;
    const menssageError = state ? `Failed to remove ${title} to favorites.` : `Failed to add ${title} to favorites. already on favorites`;
    const menssageSucces = state ? `${title} succesfully remove to favorites.` : `${title} succesfully added to favorites.`;

    return {menssageError, menssageSucces, send}
};
