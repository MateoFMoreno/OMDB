const FavoritesService = require("../services/favorites");

class FavoritesController{
    static async getAllFavorites(req, res){
        const {error, data} = await FavoritesService.getAllFavorites(req.params.id)

        return error ? res.status(data.status || 500).send({ message: data }) : res.send(data)
    }

    static async addMovieToFavorite(req, res){

        const {id, movieId} = req.params;

        const {error, data} = await FavoritesService.addMovieToFavorite(id, movieId, req.user)

        return error ? res.status(data.status || 500).send({ message: data }) : res.send(data)
    }
    
    static async deleteMovieFromFavorite(req, res){
        const {id, movieId} = req.params;

        const {error, data} = await FavoritesService.deleteMovieFromFavorite(id, movieId)

        return error ? res.status(data.status || 500).send({ message: data }) : res.send(data)
    }

}


module.exports = FavoritesController;