import { useParams } from "react-router-dom";

import { Wrap, WrapItem, useColorModeValue } from "@chakra-ui/react";

import CardMedia from "../common/CardMedia";
import { useMedia } from "../hooks/useGrid";

export default function GridMedia() {
    const { type, name } = useParams();
    const { movies, user, handleOnClick } = useMedia(type, name);

    return (
        <>
            <Wrap bg={useColorModeValue("gray.200", "gray.800")} spacing="50" padding="5" justify="center" minH="77vh">
                {movies.map((page) => {
                    return page.map((m, i) => {
                        return (
                            <WrapItem key={i}>
                                <CardMedia {...m} user={user} handleOnClick={handleOnClick} />
                            </WrapItem>
                        );
                    });
                })}
            </Wrap>
        </>
    );
}
