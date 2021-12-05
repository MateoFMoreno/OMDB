import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userReducer from "./user";
import usersAllReducer from './usersAll'

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),// sacar para los mensajes una ves terminado
    reducer: { user: userReducer, usersAll: usersAllReducer },
});

export default store;