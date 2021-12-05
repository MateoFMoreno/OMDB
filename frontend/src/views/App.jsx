import { Route, Switch, Redirect, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../state/user";
import { useToast } from "@chakra-ui/toast";
import { useEffect } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NotFound from "../components/NotFound";
import Auth from "../components/Auth";
import GridMedia from "../components/GridMedia";
import GridUsers from "../components/GridUsers";
import GridMediaInfo from "../components/GridMediaInfo";
import GridProfile from "../components/GridProfile";
import Home from "../components/Home";
import GridSetting from "../components/GridSetting";
import PageInProgress from "../components/PageInProgress";
import { errorToast } from "../utils/toast";

function App() {
    const user = useSelector((state) => state.user);
    const history = useHistory();
    const dispatch = useDispatch();
    const toast = useToast();
    const path = useLocation().pathname;

    useEffect(() => {
        axios
            .get("/api/auth/me")
            .then((res) => {
                dispatch(setUser(res.data[0]));
            })
            .catch(() => {
                if (path === "/register" || path === "/login" || path === "/") {
                    return;
                } else {
                    if (path === "/home") {
                        history.push("/register");
                        return;
                    }
                    history.push("/login");
                    errorToast(toast, "You need to be logged in to perform this action");
                }
            });
    }, []);

    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/404">
                    <NotFound />
                </Route>

                <Route exact path="/home">
                    <Home />
                </Route>

                <Route path="/search/:type/:name">
                    <GridMedia />
                </Route>

                <Route exact path="/users">
                    <GridUsers />
                </Route>

                <Route path="/search/:id">
                    <GridMediaInfo />
                </Route>

                <Route path="/users/:name">
                    <GridProfile type={"userProfile"} />
                </Route>

                <Route path="/profile">
                    <GridProfile type={"myProfile"} />
                </Route>

                <Route path="/setting">
                    <GridSetting />
                </Route>

                <Route path="/register">
                    <Auth type={"register"} />
                </Route>

                <Route path="/login">
                    <Auth type={"login"} />
                </Route>

                <Route path="/about">
                    <PageInProgress />
                </Route>

                <Route path="/contact">
                    <PageInProgress />
                </Route>

                <Route path="/blog">
                    <PageInProgress />
                </Route>

                <Route
                    exact
                    path="/"
                    render={() => {
                        return user._id ? <Redirect to="/home" /> : <Redirect to="/register" />;
                    }}
                />

                <Route path="*">
                    <Redirect to="/404" />
                </Route>
            </Switch>
            <Footer />
        </>
    );
}

export default App;
