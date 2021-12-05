import { Heading, Avatar, Box, Center, Image, Flex, Text, Stack, Button, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function CardUser({ name, favorites }) {
    return (
        <Flex p={6} w="full" alignItems="center" justifyContent="center">
            <Center py={6}>
                <Box
                    maxW={"270px"}
                    w={"full"}
                    bg={useColorModeValue("white", "gray.800")}
                    boxShadow={"2xl"}
                    borderWidth="1px"
                    rounded="lg"
                    shadow="lg"
                    rounded={"md"}
                    overflow={"hidden"}
                >
                    <Image
                        h={"120px"}
                        w={"full"}
                        src={
                            "https://img.freepik.com/vector-gratis/cinematografo-peliculas-cine-palomitas-maiz_43605-502.jpg?size=626&ext=jpg"
                        }
                        objectFit={"cover"}
                    />
                    <Flex justify={"center"} mt={-12}>
                        <Avatar
                            size={"xl"}
                            src={"https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png"}
                            alt={"Author"}
                            css={{
                                border: "2px solid white",
                            }}
                        />
                    </Flex>

                    <Box p={6}>
                        <Stack spacing={0} align={"center"} mb={5}>
                            <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                                {name}
                            </Heading>
                        </Stack>

                        <Stack direction={"row"} justify={"center"} spacing={6}>
                            <Stack spacing={0} align={"center"}>
                                <Text fontWeight={600}>{favorites.length}</Text>
                                <Text fontSize={"sm"} color={useColorModeValue("cyan.500", "cyan.200")}>
                                    Favorites
                                </Text>
                            </Stack>
                        </Stack>
                        <Link to={`/users/${name}`}>
                            <Button
                                _focus={{ outline: "none" }}
                                w={"full"}
                                mt={8}
                                colorScheme="teal"
                                variant="outline"
                                rounded={"md"}
                            >
                                Profile
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Center>
        </Flex>
    );
}


