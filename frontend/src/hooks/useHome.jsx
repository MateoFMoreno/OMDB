import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export const useHome = () => {
    const user = useSelector((state) => state.user);

    const [popularTV, setPopularTV] = useState([]);
    const [trendingTV, setTrendingTV] = useState([]);
    const [trendingMovie, setTrendingMovie] = useState([]);
    const [topRated, setTopRated] = useState([]);

    useEffect(async () => {
        const res = await axios.get(`/api/media/home`);
        const [data1, data2, data3, data4] = res.data;
        setPopularTV(data1);
        setTrendingTV(data2);
        setTrendingMovie(data3);
        setTopRated(data4);
    }, []);

    return { topRated, popularTV, trendingTV, trendingMovie, user };
};
