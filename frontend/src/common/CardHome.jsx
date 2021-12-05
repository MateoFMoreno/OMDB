import React from "react";
import {
    Flex,
    Box,
    Image,
    useColorModeValue,
    Tag,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
} from "@chakra-ui/react";

export default function CardHome({
    name,
    poster_path,
    first_air_date,
    backdrop_path,
    vote_average,
    type,
    release_date,
    title,
    overview,
    original_language,
    original_title,
    original_name,
}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Flex p={50} w="full" alignItems="center" justifyContent="center" minH="77vh">
            <Box
                bg={useColorModeValue("white", "gray.800")}
                w="300px"
                h="600px"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative"
            >
                <Image
                    boxSize="450px"
                    src={
                        `https://image.tmdb.org/t/p/original${poster_path}` ||
                        `https://image.tmdb.org/t/p/original${backdrop_path}`
                    }
                    roundedTop="lg"
                    objectFit="cover"
                />

                <Box p="5">
                    <Flex mt="1" justifyContent="space-between" alignContent="center">
                        <Box fontSize="2xl" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                            {name || title}
                        </Box>
                    </Flex>

                    <Flex justifyContent="space-between" alignContent="center">
                        <Box fontSize="2xl">
                            <Box as="span" color={useColorModeValue("cyan.500", "cyan.200")} fontSize="lg">
                                Year: {first_air_date || release_date}
                            </Box>
                        </Box>

                        <Tag fontSize={16} color={useColorModeValue("cyan.500", "cyan.200")}>
                            {type}
                        </Tag>
                    </Flex>

                    <Flex pt={2} justifyContent="space-between" alignContent="center">
                        <Box fontSize="2xl" minW="196px">
                            <Box as="span" color={useColorModeValue("cyan.500", "cyan.200")} fontSize="lg">
                                Rating: {vote_average}
                            </Box>
                        </Box>

                        <Box>
                            <Button _focus={{ outline: "none" }} colorScheme="teal" variant="outline" onClick={onOpen}>
                                Info
                            </Button>
                            <Modal isCentered onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom">
                                <ModalOverlay />
                                <ModalContent>
                                    <ModalHeader color={useColorModeValue("teal.500", "teal.200")}>Description: </ModalHeader>
                                    <ModalCloseButton
                                        _focus={{ outline: "none" }}
                                        color={useColorModeValue("cyan.500", "cyan.200")}
                                    />
                                    <ModalBody color={useColorModeValue("cyan.500", "cyan.200")}>{overview || "N/A"}</ModalBody>
                                    <ModalHeader color={useColorModeValue("teal.500", "teal.200")}>
                                        Original Title: {original_title || original_name}{" "}
                                    </ModalHeader>
                                    <ModalHeader color={useColorModeValue("teal.500", "teal.200")}>
                                        Original Language: {original_language && original_language.toUpperCase()}{" "}
                                    </ModalHeader>

                                    <ModalFooter>
                                        <Button
                                            _focus={{ outline: "none" }}
                                            variant="outline"
                                            colorScheme="teal"
                                            mr={3}
                                            onClick={onClose}
                                        >
                                            Close
                                        </Button>
                                    </ModalFooter>
                                </ModalContent>
                            </Modal>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Flex>
    );
}


