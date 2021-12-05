const axios = require("axios");

const getTwentyResults = async (name) => {
    const [res1, res2] = await Promise.all([
        axios.get(`${process.env.API_URL}&s=${name}&page=2`),
        axios.get(`${process.env.API_URL}&s=${name}&page=3`),
    ]);
    return {res1: res1, res2: res2}
};

const getHomeResults = async () => {
    const [resp1, resp2, resp3, resp4] = await Promise.all([
        axios.get(`${process.env.API_URLHOME}tv/popular?${process.env.API_KEYHOME}&language=en-US&page=1`),
        axios.get(`${process.env.API_URLHOME}trending/tv/week?${process.env.API_KEYHOME}`),
        axios.get(`${process.env.API_URLHOME}trending/movie/week?${process.env.API_KEYHOME}`),
        axios.get(
            `${process.env.API_URLHOME}movie/top_rated?${process.env.API_KEYHOME}&language=en-US&page=1`
        ),
    ]);
    return {resp1: resp1.data, resp2: resp2.data , resp3: resp3.data , resp4: resp4.data}
}

module.exports = {getTwentyResults, getHomeResults}