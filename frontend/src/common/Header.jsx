import React from "react";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { BiMoviePlay } from "react-icons/bi";
import { FaUser } from "react-icons/fa";

import {
    Box,
    Flex,
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    Image,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Input,
    FormLabel,
    InputGroup,
    InputLeftElement,
    Select,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, SettingsIcon, SearchIcon } from "@chakra-ui/icons";

import maker from "../assets/maker.svg";
import { useHeader } from "../hooks/useHeader";

export default function Header({ user }) {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { setSearch, type, setType, handleOnClick, handleSearchOnClick } = useHeader();
    const firstField = React.useRef();

    return (
        <>
            <Box bg={useColorModeValue("gray.300", "gray.900")} color={useColorModeValue("teal.500", "teal.200")} px={4}>
                <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                    <Link to="/home">
                        <Image src={maker} h={7} objectFit="cover" ml="3" />
                    </Link>

                    <Flex alignItems={"center"}>
                        <Stack direction={"row"} spacing={7}>
                            {user.name && (
                                <>
                                    <Button
                                        _focus={{ outline: "none" }}
                                        leftIcon={<SearchIcon />}
                                        variant="outline"
                                        colorScheme="teal"
                                        onClick={onOpen}
                                    >
                                        Search
                                    </Button>
                                    <Drawer isOpen={isOpen} placement="right" initialFocusRef={firstField} onClose={onClose}>
                                        <DrawerOverlay />
                                        <DrawerContent>
                                            <DrawerCloseButton _focus={{ outline: "none" }} />
                                            <DrawerHeader color="teal.200" borderBottomWidth="1px">
                                                Search movie, series, users
                                            </DrawerHeader>

                                            <DrawerBody>
                                                <Stack spacing="24px">
                                                    <form id="my-form" onSubmit={handleSearchOnClick}>
                                                        <Box>
                                                            <FormLabel color="teal.200" htmlFor="type">
                                                                Select Type
                                                            </FormLabel>
                                                            <Select
                                                                onChange={(e) => setType(e.target.value)}
                                                                color="cyan.300"
                                                                id="type"
                                                                defaultValue="any"
                                                            >
                                                                <option value="any">Any</option>
                                                                <option value="movies">Movies</option>
                                                                <option value="series">Series</option>
                                                                <option value="users">Users</option>
                                                            </Select>
                                                        </Box>
                                                        <Box>
                                                            <FormLabel color="teal.200" htmlFor="search">
                                                                Search
                                                            </FormLabel>
                                                            <InputGroup>
                                                                <InputLeftElement
                                                                    color="cyan.300"
                                                                    children={
                                                                        type === "users" ? (
                                                                            <FaUser />
                                                                        ) : (
                                                                            <BiMoviePlay color="cyan.300" />
                                                                        )
                                                                    }
                                                                    pointerEvents="none"
                                                                />
                                                                <Input
                                                                    color="cyan.300"
                                                                    ref={firstField}
                                                                    id="search"
                                                                    placeholder="Please type your search"
                                                                    onChange={(e) => setSearch(e.target.value)}
                                                                />
                                                            </InputGroup>
                                                        </Box>
                                                    </form>
                                                </Stack>
                                            </DrawerBody>

                                            <DrawerFooter borderTopWidth="1px">
                                                <Button
                                                    _focus={{ outline: "none" }}
                                                    variant="outline"
                                                    colorScheme="red"
                                                    mr={3}
                                                    onClick={onClose}
                                                >
                                                    Cancel
                                                </Button>
                                                <Button
                                                    _focus={{ outline: "none" }}
                                                    type="submit"
                                                    form="my-form"
                                                    variant="outline"
                                                    onClick={onClose}
                                                    colorScheme="teal"
                                                >
                                                    Submit
                                                </Button>
                                            </DrawerFooter>
                                        </DrawerContent>
                                    </Drawer>
                                </>
                            )}

                            <Button _focus={{ outline: "none" }} colorScheme="teal" variant="outline" onClick={toggleColorMode}>
                                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                            </Button>
                            {user.name ? (
                                <Menu>
                                    <MenuButton
                                        _focus={{ outline: "none" }}
                                        as={Button}
                                        rounded={"full"}
                                        variant={"link"}
                                        cursor={"pointer"}
                                        minW={0}
                                    >
                                        <Avatar
                                            size={"sm"}
                                            src={"https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png"}
                                        />
                                    </MenuButton>
                                    <MenuList alignItems={"center"}>
                                        <br />
                                        <Center>
                                            <Avatar
                                                size={"2xl"}
                                                src={
                                                    "https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png"
                                                }
                                            />
                                        </Center>
                                        <br />
                                        <Center>
                                            <p>{user?.name || "UserName"}</p>
                                        </Center>
                                        <br />
                                        <MenuDivider />
                                        <Link to={`/profile`}>
                                            <MenuItem icon={<FaUser />}>Profile</MenuItem>
                                        </Link>
                                        <Link to="/setting">
                                            <MenuItem icon={<SettingsIcon />}>Account Settings</MenuItem>
                                        </Link>
                                        <MenuItem icon={<FiLogOut />} onClick={handleOnClick}>
                                            Logout
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            ) : (
                                <Stack direction={"row"} spacing={7}>
                                    <Link to={"/register"}>
                                        <Button _focus={{ outline: "none" }} colorScheme="teal" variant="solid">
                                            Sign up
                                        </Button>
                                    </Link>
                                    <Link to={"/login"}>
                                        <Button _focus={{ outline: "none" }} colorScheme="teal" variant="solid">
                                            Login
                                        </Button>
                                    </Link>
                                </Stack>
                            )}
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}
