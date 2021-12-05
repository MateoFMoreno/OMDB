const User = require("../models/User");
const axios = require("axios");

class FavoritesService {
    static async getAllFavorites(id) {
        try {
            const result = await User.find({ _id: id }).select({ password: 0 });

            return { error: false, data: result };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }

    static async addMovieToFavorite(id, movieId, user) {
        try {
            const filter = user[0].favorites.filter((e) => e.imdbID === movieId);
           
            if (filter.length > 0) return { error: true, data: "already on favorites" };

            const movie = await axios.get(`${process.env.API_URL}&i=${movieId}`);
            const movieData = movie.data;

            if (movieData.Response === "False") return { error: true, data: movieData.Error };

            const result = await User.findOneAndUpdate(
                { _id: id },
                {
                    $push: {
                        favorites: {
                            $each: [movieData],
                            $position: 0,
                        },
                    },
                },
                { new: true }
            );

            return { error: false, data: result };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }

    static async deleteMovieFromFavorite(id, movieId) {
        try {
            const result = await User.findOneAndUpdate(
                { _id: id },
                {
                    $pull: {
                        favorites: { imdbID: movieId },
                    },
                },
                { new: true }
            );
            
            return { error: false, data: result };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }
}

module.exports = FavoritesService;
