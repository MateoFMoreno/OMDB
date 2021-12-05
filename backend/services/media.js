const axios = require("axios");
const { getTwentyResults, getHomeResults } = require("../utils/getMedia");

class MediaService {
    static async getAnyByName(name) {
        try {
            const resp = await axios.get(`${process.env.API_URL}&s=${name}&page=1`).then((result) => result);

            if (parseInt(resp.data.totalResults) > 30) {
                const { res1, res2 } = await getTwentyResults(name);

                return { error: false, data: [resp.data.Search, res1.data.Search, res2.data.Search] };
            }

            return { error: false, data: [resp.data.Search] };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }

    static async getMoviesByName(name) {
        try {
            const resp = await axios.get(`${process.env.API_URL}&s=${name}&type=movie&page=1`).then((result) => result);

            if (parseInt(resp.data.totalResults) > 30) {
                const { res1, res2 } = await getTwentyResults(name);

                return { error: false, data: [resp.data.Search, res1.data.Search, res2.data.Search] };
            } else if (parseInt(resp.data.totalResults) > 20) {
                const res1 = await axios.get(`${process.env.API_URL}&s=${name}&type=movie&page=2`).then((result) => result);

                return { error: false, data: [resp.data.Search, res1.data.Search] };
            }

            return { error: false, data: [resp.data.Search] };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }

    static async getSeriesByName(name) {
        try {
            const resp = await axios.get(`${process.env.API_URL}&s=${name}&type=series&page=1`).then((result) => result);

            if (parseInt(resp.data.totalResults) > 30) {
                const { res1, res2 } = await getTwentyResults(name);

                return { error: false, data: [resp.data.Search, res1.data.Search, res2.data.Search] };
            } else if (parseInt(resp.data.totalResults) > 20) {
                const res1 = await axios.get(`${process.env.API_URL}&s=${name}&type=series&page=2`).then((result) => result);

                return { error: false, data: [resp.data.Search, res1.data.Search] };
            }
            return { error: false, data: [resp.data.Search] };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }

    static async getMediaById(id) {
        try {
            const resp = await axios.get(`${process.env.API_URL}&i=${id}`);

            return { error: false, data: resp.data };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }

    static async getMediaByNameAndDate(name, date) {
        try {
            const resp = await axios.get(`${process.env.API_URL}&t=${name}&y=${date}`);

            return { error: false, data: resp.data };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }

    static async getHomeData() {
        try {
            const { resp1, resp2, resp3, resp4 } = await getHomeResults();

            return { error: false, data: [resp1.results, resp2.results, resp3.results, resp4.results] };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }
}

module.exports = MediaService;
