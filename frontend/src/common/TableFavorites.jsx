import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Tr, Td, Avatar, Button } from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { handleOnClick } from "../hooks/useGrid";

export default function TableFavorites({ user, Title, Type, Year, Poster, imdbID, handleOnClick }) {
    const [state, setState] = useState(true);

    useEffect(() => {
        if (user.name) {
            const res = user.favorites.filter((e) => e.imdbID === imdbID);
            setState(res.length > 0 ? true : false);
        }
    });

    return (
        <Tr>
            <Td>
                <Avatar src={Poster} />
            </Td>
            <Td>{Title}</Td>
            <Td>{Type}</Td>
            <Td w={1}>
                <Link to={`/search/${imdbID}`}>INFO</Link>
            </Td>
            <Td w={1}>
                <Button
                    _focus={{ outline: "none" }}
                    leftIcon={state ? <DeleteIcon /> : <AddIcon />}
                    variant="outline"
                    rounded={"full"}
                    size={"lg"}
                    fontWeight={"normal"}
                    px={6}
                    colorScheme={"teal"}
                    onClick={() => handleOnClick(imdbID, Title, state)}
                >
                    {state ? "Delete" : "Add"}
                </Button>
            </Td>
        </Tr>
    );
}
