import { sendRegisterRequest, sendLoginRequest } from "../state/user";

export const typeContent = (type) => {
    const post = type === "login" ? sendLoginRequest : sendRegisterRequest;
    const redirect = type === "login" ? "/home" : "/login";
    const menssageError = type === "login" ? "Wrong email or password" : "Sign up failed. Username or Email already exists ";
    const menssageSucces = type === "login" ? "Succes login. Welcome to the Jungle" : "Success Sign up";
    return {post, redirect, menssageError, menssageSucces}
}