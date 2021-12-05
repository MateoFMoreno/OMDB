import { createReducer, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";

export const sendLoginRequest = createAsyncThunk("SEND_LOGIN", (data) => {
    const { email, password } = data;
    return axios.post("/api/auth/login", { email, password }).then((res) => res.data[0]);
});

export const sendRegisterRequest = createAsyncThunk("SEND_REGISTER", (data) => {
    const { email, name, password } = data;

    return axios.post("/api/auth/register", { name, email, password }).then((res) => res.data[0]);
});

export const sendLogoutRequest = createAsyncThunk("SEND_LOGOUT", () => {
    return axios.get("/api/auth/logout").then((res) => console.log(res));
});

export const removeFromFavorite = createAsyncThunk("REMOVE_FAVORITE", (id, thunkAPI) => {
    const { user } = thunkAPI.getState();

    return axios.delete(`/api/users/favorites/delete/${user._id}/${id}`).then((res) => res);
});

export const addToFavorite = createAsyncThunk("ADD_FAVORITE", (id, thunkAPI) => {
    const { user } = thunkAPI.getState();
    if (!user._id) throw new Error("You need to be logged in");

    return axios.post(`/api/users/favorites/${user._id}/${id}`).then((res) => res);
});

export const updateUser = createAsyncThunk("UPDATE_USER", (data, thunkAPI) => {
    const { user } = thunkAPI.getState();
    const { password, name } = data;

    if (!user._id) throw new Error("You need to be logged in");

    return axios.put(`/api/users/${user._id}`, { password, name }).then((res) => res);
});

export const setUser = createAction("SET_USER");

const userReducer = createReducer(
    {},
    {
        [setUser]: (state, action) => (state = action.payload),
        [sendLoginRequest.fulfilled]: (state, action) => (state = action.payload),
        [sendLoginRequest.rejected]: (state, action) => console.log(action),
        [sendRegisterRequest.fulfilled]: (state, action) => action.payload,
        [addToFavorite.fulfilled]: (state, action) => (state = action.payload.data),
        [removeFromFavorite.fulfilled]: (state, action) => (state = action.payload.data),
        [sendLogoutRequest.fulfilled]: (state, action) => (state = {}),
        [updateUser.fulfilled]: (state, action) => (state = action.payload.data),
    }
);

export default userReducer;
