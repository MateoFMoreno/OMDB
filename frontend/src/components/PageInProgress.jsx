import {  Container, Heading, Stack, Text, Button, Image } from "@chakra-ui/react";

import React from "react";
import { Link } from "react-router-dom";

export default function PageInProgress() {
    return (
        <Container maxW={"5xl"} minH="77vh">
            <Stack textAlign={"center"} align={"center"} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
                <Heading fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }} lineHeight={"110%"}>
                    Page in{" "}
                    <Text as={"span"} color={"orange.400"}>
                        progress
                    </Text>
                </Heading>

                <Stack spacing={6} direction={"row"}>
                    <Link to='/home'>
                        <Button variant="outline" _focus={{ outline: "none" }} px={6} colorScheme={"teal"}>
                            Home
                        </Button>
                    </Link>
                    <Link to='/profile'>
                        <Button variant="outline" _focus={{ outline: "none" }} colorScheme={"cyan"} px={6}>
                            Profile
                        </Button>
                    </Link>
                </Stack>
                <Image
                    src={"https://www.startupsesame.com/wp-content/uploads/2018/04/wip.jpg"}
                    height={{ sm: "24rem", lg: "28rem" }}
                    mt={{ base: 12, sm: 16 }}
                />
            </Stack>
        </Container>
    );
}
