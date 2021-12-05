import { Link } from "react-router-dom";
import { Stack, useColorModeValue, Text, Heading } from "@chakra-ui/react";
import { Box, Button } from "@chakra-ui/react";

import CardCarousel from "../common/CardCarousel";
import { useHome } from "../hooks/useHome";

export default function Home() {
    const { popularTV, trendingTV, trendingMovie, topRated, user } = useHome();
    
    return (
        <Stack bg={useColorModeValue("gray.200", "gray.800")} color={useColorModeValue("cyan.500", "cyan.200")} minH="77vh">
            {user?.name ? (
                <>
                    <Stack align={"center"} py={5}>
                        <Heading fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}>
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
                                Popular Series
                            </Text>
                        </Heading>
                        <CardCarousel display={popularTV} type={"Series"} />
                    </Stack>
                    <Stack align={"center"}>
                        <Heading fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}>
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
                                Series trending this week
                            </Text>
                        </Heading>
                        <CardCarousel display={trendingTV} type={"Series"} />
                    </Stack>
                    <Stack align={"center"}>
                        <Heading fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}>
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
                                Movies trending this week
                            </Text>
                        </Heading>
                        <CardCarousel display={trendingMovie} type={"Movie"} />
                    </Stack>
                    <Stack align={"center"}>
                        <Heading fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}>
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
                                Top Rated Movies
                            </Text>
                        </Heading>
                        <CardCarousel display={topRated} type={"Movie"} />
                    </Stack>
                </>
            ) : (
                <Box textAlign="center" py={10} px={6} minH="77vh">
                    <Heading
                        display="inline-block"
                        as="h2"
                        size="2xl"
                        bgGradient="linear(to-r, teal.400, teal.600)"
                        backgroundClip="text"
                    >
                        Error
                    </Heading>
                    <Text fontSize="18px" mt={3} mb={2}>
                        You need to be logged in to perform this action
                    </Text>

                    <Link to="/login">
                        <Button
                            _focus={{ outline: "none" }}
                            colorScheme="teal"
                            bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
                            color="white"
                            variant="solid"
                        >
                            Go to Login
                        </Button>
                    </Link>
                </Box>
            )}
        </Stack>
    );
}
