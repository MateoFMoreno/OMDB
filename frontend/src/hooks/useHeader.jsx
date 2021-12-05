import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { errorToast } from "../utils/toast";
import { sendLogoutRequest } from "../state/user";
import { useToast } from "@chakra-ui/react";

export const useHeader = () => {
    const [search, setSearch] = useState("");
    const [type, setType] = useState("any");

    const dispatch = useDispatch();
    const history = useHistory();
    const toast = useToast();
    
    const handleOnClick = () => {
        dispatch(sendLogoutRequest()).then(() => {
            history.push("/login");
        });
    };

    const handleSearchOnClick = (e) => {
        e.preventDefault();

        setSearch("");
        setType("any");

        if (type === "users") {
            search !== "" ? history.push(`/users/${search}`) : history.push("/users");
        } else {
            search !== "" ? history.push(`/search/${type}/${search}`) : errorToast(toast, "Please type your search");
        }
    };

    return { setSearch, type, setType, handleOnClick, handleSearchOnClick };
};
