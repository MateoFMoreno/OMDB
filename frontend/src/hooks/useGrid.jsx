import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/react";

import { addToFavorite, removeFromFavorite, updateUser } from "../state/user";
import { setUsersAll } from "../state/usersAll";
import { result } from "../utils/result";
import { errorToast, successToast } from "../utils/toast";
import { favoritesUtils } from "../utils/favorites";

export const useMediaInfo = (id) => {
    const user = useSelector((state) => state.user);

    const toast = useToast();
    const dispatch = useDispatch();

    const [state, setState] = useState("");
    const [movie, setMovie] = useState({});

    useEffect(async () => {
        const res = await axios.get(`/api/media/search/${id}`);
        setMovie(res.data);
    }, [id, user, state]);

    const handleOnClick = (id, title, state) => {
        const { send, menssageError, menssageSucces } = favoritesUtils(state, title, removeFromFavorite, addToFavorite);

        dispatch(send(id)).then((data) => {
            data.error ? errorToast(toast, menssageError) : successToast(toast, menssageSucces);
        });
    };

    return { movie, user, state, setState, handleOnClick };
};

export const useMedia = (type, name) => {
    const [movies, setMovies] = useState([]);
    const user = useSelector((state) => state.user);

    const toast = useToast();
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(async () => {
        const res = await axios.get(`/api/media/${type}/${name}`);

        if (res.data[0]) {
            setMovies(res.data);

            successToast(toast, `We have found ${result(res)} matches`);
        } else {
            errorToast(toast, `We haven't found any matches for your search.`);
            history.push("/home");
        }
    }, [type, name]);

    const handleOnClick = (id, title, state) => {
        const { send, menssageError, menssageSucces } = favoritesUtils(state, title, removeFromFavorite, addToFavorite);

        dispatch(send(id)).then((data) => {
            data.error ? errorToast(toast, menssageError) : successToast(toast, menssageSucces);
        });
    };

    return { movies, user, handleOnClick };
};

export const useProfile = (type, name) => {
    const user = useSelector((state) => state.user);
    const [favorites, setFavorites] = useState([]);
    const [userSearch, setUserSearch] = useState({});

    const toast = useToast();
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        type === "myProfile"
            ? axios.get("/api/auth/me").then((res) => {
                  setFavorites(res.data[0].favorites);
              })
            : axios
                  .get(`/api/users/${name}`)
                  .then((res) => {
                      setFavorites(res.data.favorites);
                      setUserSearch(res.data);
                  })
                  .catch(() => {
                      errorToast(toast, "User not found");
                      history.push("/users");
                  });
    }, [name, user, type]);

    const handleOnClick = (id, title, state) => {
        const { send, menssageError, menssageSucces } = favoritesUtils(state, title, removeFromFavorite, addToFavorite);

        dispatch(send(id)).then((data) => {
            data.error ? errorToast(toast, menssageError) : successToast(toast, menssageSucces);
        });
    };

    return { favorites, user, userSearch, handleOnClick };
};

export const useSetting = () => {
    const toast = useToast();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e, name, password, validateName, validatePassword) => {
        e.preventDefault();
        let data;

        if (name && password) {
            const nameValidate = validateName();
            const passwordValidate = validatePassword();

            if (nameValidate.error) return errorToast(toast, nameValidate.message);
            if (passwordValidate.error) return errorToast(toast, passwordValidate.message);
            data = { name, password };
        } else if (name) {
            const nameValidate = validateName();

            if (nameValidate.error) return errorToast(toast, nameValidate.message);
            data = { name };
        } else if (password) {
            const passwordValidate = validatePassword();

            if (passwordValidate.error) return errorToast(toast, passwordValidate.message);

            data = { password };
        } else {
            return errorToast(toast, "Please type your changes");
        }

        dispatch(updateUser(data)).then((data) => {
            if (data.error) return errorToast(toast, "Update failed. Username already exists ");

            successToast(toast, "Succes Update");
            history.push("/home");
        });
    };

    return { handleSubmit };
};

export const useUsers = () => {
    const dispatch = useDispatch();
    const usersAll = useSelector((state) => state.usersAll);
    const toast = useToast();
    const history = useHistory();

    useEffect(() => {
        axios.get("/api/users").then((res) => {
            if (res.data.length > 0) {
                dispatch(setUsersAll(res.data));
            } else {
                history.push("/home");
                errorToast(toast, `There aren't any users registered on this website yet`);
            }
        });
    }, []);

    return { usersAll };
};
