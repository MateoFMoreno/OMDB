import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useCardMedia = (imdbID) => {
    const [state, setState] = useState("");
    const user = useSelector((state) => state.user);

    useEffect(() => {
        if (user.name) {
            const res = user.favorites.filter((e) => e.imdbID === imdbID);
            setState(res.length > 0 ? true : false);
        }
    }, [state, user]);

    return { state };
};
