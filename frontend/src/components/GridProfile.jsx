import { useParams } from "react-router-dom";
import {
    Container,
    Stack,
    Flex,
    Heading,
    Text,
    Image,
    useColorModeValue,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Tag,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

import TableFavorites from "../common/TableFavorites";
import { useProfile } from "../hooks/useGrid";

export default function GridProfile({ type }) {
    const { name } = useParams();
    const { favorites, user, userSearch, handleOnClick } = useProfile(type, name);

    return (
        <Container maxW={"7xl"} minH="77vh">
            <Stack
                align={"center"}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 10 }}
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
                            {userSearch?.name ? userSearch.name : user.name}
                        </Text>
                        <br />
                        <Tag fontSize={26} color={useColorModeValue("cyan.500", "cyan.200")}>
                            Developer
                        </Tag>
                    </Heading>
                </Stack>
                <Flex flex={1} justify={"center"} align={"center"} position={"relative"} w={"full"}>
                    <Image
                        alt={"Login Image"}
                        objectFit={"cover"}
                        src={"https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png"}
                    />
                </Flex>
            </Stack>
            <Stack>
                <Tabs size="md" variant="enclosed" colorScheme="teal">
                    <TabList>
                        <Tab _focus={{ outline: "none" }} _hover={{ color: useColorModeValue("cyan.500", "cyan.200") }}>
                            Info
                        </Tab>
                        <Tab _focus={{ outline: "none" }} _hover={{ color: useColorModeValue("cyan.500", "cyan.200") }}>
                            Favorites
                        </Tab>
                    </TabList>
                    <TabPanels color={useColorModeValue("cyan.500", "cyan.200")}>
                        <TabPanel>
                            <p>
                                <ChevronRightIcon />
                                Email: {userSearch?.email ? userSearch.email : user.email}
                            </p>
                            <p>
                                <ChevronRightIcon />
                                Description: {"Poner una descripcion"}
                            </p>
                        </TabPanel>
                        <TabPanel>
                            <Table variant="striped" colorScheme="teal">
                                <Thead>
                                    <Tr>
                                        <Th>Poster</Th>
                                        <Th>Title</Th>
                                        <Th>Type</Th>
                                        <Th>Info</Th>
                                        <Th>{type !== "myProfile" ? "Add to favorites" : "Remove favorites"}</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {favorites?.map((e) => (
                                        <TableFavorites user={user} {...e} handleOnClick={handleOnClick} />
                                    ))}
                                </Tbody>
                                <Tfoot>
                                    <Tr>
                                        <Th>Poster</Th>
                                        <Th>Title</Th>
                                        <Th>Type</Th>
                                        <Th>Info</Th>
                                        <Th>{type !== "myProfile" ? "Add to favorites" : "Remove from favorites"}</Th>
                                    </Tr>
                                </Tfoot>
                            </Table>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Stack>
        </Container>
    );
}
