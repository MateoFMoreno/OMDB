import { Link } from "react-router-dom";
import { Flex, Box, Image, useColorModeValue, Tooltip, Button, Stack, Tag, IconButton } from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";

import { useCardMedia } from "../hooks/useCardMedia";

export default function CardMedia({ Title, Year, Poster, imdbID, Type, handleOnClick }) {
    const { state } = useCardMedia(imdbID);

    return (
        <Flex p={50} w="full" alignItems="center" justifyContent="center" minH="77vh">
            <Box
                bg={useColorModeValue("white", "gray.800")}
                w="300px"
                h="615px"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative"
            >
                <Image
                    boxSize="450px"
                    src={
                        Poster !== "N/A"
                            ? Poster
                            : "https://us.123rf.com/450wm/tom19275/tom192751812/tom19275181200011/120562863-rollo-de-pel%C3%ADcula-y-aplauso-de-cine-aislado-sobre-fondo-blanco-3d-rendering.jpg?ver=6"
                    }
                    alt={`Picture of ${Title}`}
                    roundedTop="lg"
                    objectFit="cover"
                />

                <Box p="5">
                    <Flex mt="1" justifyContent="space-between" alignContent="center">
                        <Box fontSize="2xl" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                            {Title}
                        </Box>
                        <Tooltip
                            label={state ? "Delete from Favotites" : "Add to Favorites"}
                            bg="white"
                            placement={"top"}
                            color={"gray.800"}
                            fontSize={"1.2em"}
                        >
                            <IconButton
                                onClick={() => handleOnClick(imdbID, Title, state)}
                                variant="outline"
                                colorScheme="teal"
                                _focus={{ outline: "none" }}
                                icon={state ? <DeleteIcon /> : <AddIcon />}
                            />
                        </Tooltip>
                    </Flex>

                    <Flex justifyContent="space-between" alignContent="center" py={2}>
                        <Box fontSize="2xl">
                            <Box as="span" color={useColorModeValue("cyan.500", "cyan.200")} fontSize="lg">
                                Year: {Year}
                            </Box>
                        </Box>
                        <Tag fontSize={16} color={useColorModeValue("cyan.500", "cyan.200")}>
                            {Type}
                        </Tag>
                    </Flex>
                    <Stack direction="row" spacing={4} align="center">
                        <Link to={`/search/${imdbID}`}>
                            <Button _focus={{ outline: "none" }} colorScheme="teal" variant="outline">
                                INFO
                            </Button>
                        </Link>
                    </Stack>
                </Box>
            </Box>
        </Flex>
    );
}
