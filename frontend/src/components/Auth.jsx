import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    useColorModeValue,
    useToast,
} from "@chakra-ui/react";

import { useName, usePassword, useEmail } from "../hooks/useInput";
import { errorToast, successToast } from "../utils/toast";
import { typeContent } from "../utils/type";

export default function Auth({ type }) {
    const { name, onChangeName, validateName } = useName();
    const { password, onChangePassword, validatePassword } = usePassword();
    const { email, onChangeEmail, validateEmail } = useEmail();

    const toast = useToast();
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = (e, user) => {
        e.preventDefault();
        const { type } = user;

        const passwordValidate = validatePassword();
        const emailValidate = validateEmail();

        if (type === "register") {
            const nameValidate = validateName();

            if (nameValidate.error) return errorToast(toast, nameValidate.message);
        }

        if (passwordValidate.error) return errorToast(toast, passwordValidate.message);

        if (emailValidate.error) return errorToast(toast, emailValidate.message);

        const { post, redirect, menssageError, menssageSucces } = typeContent(type);

        dispatch(post(user)).then((data) => {
            if (data.error) return errorToast(toast, menssageError);

            successToast(toast, menssageSucces);
            history.push(redirect);
        });
    };

    return (
        <Flex minH={"100vh"} align={"center"} justify={"center"} bg={useColorModeValue("gray.200", "gray.800")} minH="77vh">
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                    <Heading  fontSize={"4xl"}>{type === "login" ? "Login your account" : "Sign up to your account"}</Heading>
                </Stack>
                <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")} boxShadow={"lg"} p={8}>
                    <form onSubmit={(e) => handleSubmit(e, { name, email, password, type })}>
                        <Stack spacing={4}>
                            {type === "register" && (
                                <FormControl isInvalid={name.length > 10} isRequired>
                                    <FormLabel htmlFor="name">Username</FormLabel>
                                    <Input placeholder="UserName" id="name" value={name} onChange={onChangeName} type="text" />
                                </FormControl>
                            )}

                            <FormControl isRequired>
                                <FormLabel>Email address</FormLabel>
                                <Input
                                    placeholder="email@example.com"
                                    id="email"
                                    onChange={onChangeEmail}
                                    value={email}
                                    type="email"
                                />
                            </FormControl>

                            <FormControl isInvalid={password.length < 8 && password.length > 0} isRequired>
                                <FormLabel>Password</FormLabel>
                                <Input
                                    placeholder="******"
                                    id="password"
                                    onChange={onChangePassword}
                                    value={password}
                                    type="password"
                                />
                            </FormControl>

                            <Stack spacing={10}>
                                <Button _focus={{ outline: "none" }} type="submit" colorScheme="teal" variant="solid">
                                    {type === "register" ? "Sign up" : "Login"}
                                </Button>
                            </Stack>
                        </Stack>
                    </form>
                </Box>
            </Stack>
        </Flex>
    );
}
