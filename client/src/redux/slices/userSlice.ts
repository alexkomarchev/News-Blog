import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../interfaces";


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
            state.email = null
            state.name = null
        }
    }
})

export const {setUser, removeUser} = userSlice.actions

export default userSlice.reducer



