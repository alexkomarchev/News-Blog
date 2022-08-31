import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "../../interfaces";
import {HYDRATE} from "next-redux-wrapper";

const initialState: User = {
    email: '',
    name: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, {payload}: PayloadAction<User>) => {
            const {email, name} = payload;
            state.email = email
            state.name = name
        },
        removeUser: (state) => {
            state.email = ''
            state.name = ''
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            state.email = action.payload.user.email
            state.name = action.payload.user.name
        }
    }
})

export const {setUser, removeUser} = userSlice.actions

export default userSlice.reducer



