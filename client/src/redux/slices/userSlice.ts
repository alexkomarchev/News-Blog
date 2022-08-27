import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../interfaces";
import {HYDRATE} from "next-redux-wrapper";


const initialState: IUser = {
    email: null,
    name: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, {payload}: PayloadAction<IUser>) => {
            const {email, name} = payload;
            state.email = email
            state.name = name
        },
        removeUser: (state) => {
            state.email = '1'
            state.name = '1'
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



