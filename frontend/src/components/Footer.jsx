import { FaGithub, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Box, Container, Stack, Text, useColorModeValue, Image } from "@chakra-ui/react";

import maker from "../assets/maker.svg";
import SocialButton from "../common/SocialButton";

export default function SmallCentered() {
    return (
        <Box bg={useColorModeValue("gray.300", "gray.900")} color={useColorModeValue("gray.700", "gray.200")}>
            <Container as={Stack} maxW={"6xl"} py={4} spacing={4} justify={"center"} align={"center"}>
                <Image src={maker} h={7} objectFit="cover" ml="3" />
                <Stack direction={"row"} spacing={6}>
                    <Link to="/home">Home</Link>
                    <Link to={"/about"}>About</Link>
                    <Link to={"/blog"}>Blog</Link>
                    <Link to={"/contact"}>Contact</Link>
                </Stack>
            </Container>

            <Box borderTopWidth={1} borderStyle={"solid"} borderColor={useColorModeValue("gray.200", "gray.700")}>
                <Container
                    as={Stack}
                    maxW={"6xl"}
                    py={4}
                    direction={{ base: "column", md: "row" }}
                    spacing={4}
                    justify={{ base: "center", md: "space-between" }}
                    align={{ base: "center", md: "center" }}
                >
                    <Text>© 2020 Chakra Templates. All rights reserved</Text>
                    <Stack direction={"row"} spacing={6}>
                        <SocialButton label={"Github"} href={"https://github.com/MateoFMoreno"}>
                            <FaGithub />
                        </SocialButton>
                        <SocialButton label={"Linkedin"} href={"https://www.linkedin.com/in/mateo-moreno/"}>
                            <FaLinkedinIn />
                        </SocialButton>
                        <SocialButton label={"Twitter"} href={"https://twitter.com/"}>
                            <FaTwitter />
                        </SocialButton>
                        <SocialButton label={"YouTube"} href={"https://www.youtube.com/"}>
                            <FaYoutube />
                        </SocialButton>
                        <SocialButton label={"Instagram"} href={"https://www.instagram.com/"}>
                            <FaInstagram />
                        </SocialButton>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
}
