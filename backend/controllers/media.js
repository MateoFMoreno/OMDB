const MediaService = require("../services/media");


class MediaController {
    static async getAnyByName(req, res) {
        const { error, data } = await MediaService.getAnyByName(req.params.name);

        return error ? res.status(data.status || 500).send({ message: data }) : res.send(data);
    }

    static async getMoviesByName(req, res) {
        const { error, data } = await MediaService.getMoviesByName(req.params.name);

        return error ? res.status(data.status || 500).send({ message: data }) : res.send(data);
    }

    static async getSeriesByName(req, res) {
        const { error, data } = await MediaService.getSeriesByName(req.params.name);

        return error ? res.status(data.status || 500).send({ message: data }) : res.send(data);
    }

    static async getMediaById(req, res) {
        const { error, data } = await MediaService.getMediaById(req.params.id);

        return error ? res.status(data.status || 500).send({ message: data }) : res.send(data);
    }
    
    static async getMoviesByNameAndDate(req, res) {
        const { name, date } = req.params;
        const { error, data } = await MediaService.getMoviesByNameAndDate(name, date);

        return error ? res.status(data.status || 500).send({ message: data }) : res.send(data);
    }

    static async getHomeData(req, res) {
        const { error, data } = await MediaService.getHomeData();

        return error ? res.status(data.status || 500).send({ message: data }) : res.send(data);
    }
}


module.exports = MediaController;
