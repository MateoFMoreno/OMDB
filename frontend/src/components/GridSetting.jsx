import { Button, Flex, FormControl, FormLabel, Heading, Input, Stack, useColorModeValue, useToast } from "@chakra-ui/react";
import {  Link } from "react-router-dom";
import { useName, usePassword } from "../hooks/useInput";
import {useSetting} from '../hooks/useGrid'

export default function GridSetting() {
    const { name, onChangeName, validateName } = useName();
    const { password, onChangePassword, validatePassword } = usePassword();
    const {handleSubmit} = useSetting()

    return (
        <Flex minH={"100vh"} align={"center"} justify={"center"} bg={useColorModeValue("gray.50", "gray.800")}>
            <Stack
                spacing={4}
                w={"full"}
                maxW={"md"}
                bg={useColorModeValue("white", "gray.700")}
                rounded={"xl"}
                boxShadow={"lg"}
                p={6}
                my={12}
            >
                <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
                    User Profile Edit
                </Heading>
                <form onSubmit={(e) => handleSubmit(e, name, password, validateName, validatePassword)}>
                    <FormControl isInvalid={name.length > 10}>
                        <FormLabel htmlFor="name">User name</FormLabel>
                        <Input id="name" value={name} onChange={onChangeName} placeholder="UserName" type="text" />
                    </FormControl>
                    <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input
                            placeholder="******"
                            id="password"
                            onChange={onChangePassword}
                            value={password}
                            placeholder="password"
                            type="password"
                        />
                    </FormControl>

                    <Stack py={3} spacing={6} direction={["column", "row"]}>
                        <Link to="home">
                            <Button variant="outline" colorScheme="cyan" w="full">
                                Cancel
                            </Button>
                        </Link>
                        <Button variant="outline" colorScheme="teal" w="full" type="submit">
                            Submit
                        </Button>
                    </Stack>
                </form>
            </Stack>
        </Flex>
    );
}
