import { createReducer,  createAction } from "@reduxjs/toolkit";



export const setUsersAll = createAction("SET_USERS_ALL");

const usersAllReducer = createReducer(
    [],
    {
        [setUsersAll]: (state, action) => (state = action.payload),
    }
);

export default usersAllReducer;
