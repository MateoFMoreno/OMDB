import { useEffect } from "react";
import ReactPlayer from "react-player";

import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    useColorModeValue,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Tag,
} from "@chakra-ui/react";
import { ChevronRightIcon, AddIcon, DeleteIcon } from "@chakra-ui/icons";

export default function CardMedia({
    Actors,
    Awards,
    BoxOffice,
    Title,
    Plot,
    Runtime,
    Ratings,
    Type,
    Released,
    Writer,
    Country,
    Director,
    imdbID,
    Year,
    Genre,
    user,
    state,
    setState,
    handleOnClick
}) {
    useEffect(() => {
        if (user.name) {
            const res = user.favorites.filter((e) => e.imdbID === imdbID);
            setState(res.length > 0 ? true : false);
        }
    });

    return (
        <Container maxW={"7xl"} minH="77vh">
            <Stack
                align={"center"}
                spacing={{ base: 8, md: 20 }}
                py={{ base: 20, md: 28 }}
                direction={{ base: "column", md: "row" }}
            >
                <Stack flex={1} spacing={{ base: 3, md: 5 }}>
                    <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}>
                        <Text
                            as={"span"}
                            position={"relative"}
                            _after={{
                                content: "''",
                                width: "full",
                                height: "30%",
                                position: "absolute",
                                bottom: 1,
                                left: 0,
                            }}
                        >
                            {Title}.
                        </Text>
                        <br />
                        <Tag fontSize={26} color={useColorModeValue("cyan.500", "cyan.200")}>
                            {Type}
                        </Tag>
                    </Heading>
                </Stack>
                <Flex flex={1} justify={"center"} align={"center"} position={"relative"} w={"full"}>
                    <Box position={"relative"} height={"300px"} rounded={"2xl"} width={"full"} overflow={"hidden"}>
                        <ReactPlayer
                            url={
                                Type !== "movie"
                                    ? "https://www.youtube.com/watch?v=TJFVV2L8GKs"
                                    : "https://www.youtube.com/watch?v=owK1qxDselE"
                            }
                            width={"100%"}
                            height={"100%"}
                            controls
                            playing
                            volume="0.2"
                        />
                    </Box>
                </Flex>
            </Stack>
            <Stack>
                <Tabs size="md" variant="enclosed" colorScheme="teal">
                    <TabList>
                        <Tab _hover={{ color: useColorModeValue("cyan.500", "cyan.200") }}>Description</Tab>
                        <Tab _hover={{ color: useColorModeValue("cyan.500", "cyan.200") }}>Actors</Tab>
                        <Tab _hover={{ color: useColorModeValue("cyan.500", "cyan.200") }}>Director</Tab>
                        <Tab _hover={{ color: useColorModeValue("cyan.500", "cyan.200") }}>Writer</Tab>
                        <Tab _hover={{ color: useColorModeValue("cyan.500", "cyan.200") }}>Ratings</Tab>
                        <Tab _hover={{ color: useColorModeValue("cyan.500", "cyan.200") }}>Genre</Tab>
                        <Tab _hover={{ color: useColorModeValue("cyan.500", "cyan.200") }}>Info</Tab>
                    </TabList>
                    <TabPanels color={useColorModeValue("cyan.500", "cyan.200")}>
                        <TabPanel>
                            <p>
                                <ChevronRightIcon />
                                {Plot}
                            </p>
                        </TabPanel>
                        <TabPanel>
                            {Actors &&
                                Actors.split(", ").map((e, i) => (
                                    <p key={i}>
                                        <ChevronRightIcon />
                                        {e}
                                    </p>
                                ))}
                        </TabPanel>
                        <TabPanel>
                            {Director &&
                                Director.split(", ").map((e, i) => (
                                    <p key={i}>
                                        <ChevronRightIcon />
                                        {e}
                                    </p>
                                ))}
                        </TabPanel>
                        <TabPanel>
                            {Writer &&
                                Writer.split(", ").map((e, i) => (
                                    <p key={i}>
                                        <ChevronRightIcon />
                                        {e}
                                    </p>
                                ))}
                        </TabPanel>
                        <TabPanel>
                            {Ratings?.map((e, i) => (
                                <p key={i}>
                                    <ChevronRightIcon />
                                    {` ${e.Source}:  ${e.Value}`}
                                </p>
                            ))}
                        </TabPanel>
                        <TabPanel>
                            {Genre &&
                                Genre.split(", ").map((e, i) => (
                                    <p key={i}>
                                        <ChevronRightIcon />
                                        {e}
                                    </p>
                                ))}
                        </TabPanel>
                        <TabPanel>
                            <p>
                                <ChevronRightIcon />
                                Awards: {Awards || "N/A"}
                            </p>
                            <p>
                                <ChevronRightIcon />
                                Box Office: {BoxOffice || "N/A"}
                            </p>
                            <p>
                                <ChevronRightIcon />
                                Duration: {Type === "series" ? Year : Runtime || "N/A"}
                            </p>
                            <p>
                                <ChevronRightIcon />
                                Released: {Released || "N/A"}
                            </p>
                            <p>
                                <ChevronRightIcon />
                                Country: {Country || "N/A"}
                            </p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Stack>
            <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: "column", sm: "row" }}>
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
                    {state ? "Delete from Favotites" : "Add to Favorites"}
                </Button>
            </Stack>
        </Container>
    );
}
