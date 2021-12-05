import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import store from './state/store'

import App from "./views/App";
import theme from "./theme";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <ChakraProvider theme={theme}>
                <App />
            </ChakraProvider>
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
);
