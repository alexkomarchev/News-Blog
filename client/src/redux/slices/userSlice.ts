import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../interfaces";


const initialState: IUser = {
    email: null,
    token: null,
    id: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, {payload}: PayloadAction<IUser>) => {
            const {email, token, id} = payload;
            state.email = email
            state.token = token
            state.id = id
        },
        removeUser: (state) => {
            state.email = null
            state.token = null
            state.id = null
        }
    }
})

export const {setUser,removeUser} = userSlice.actions

export default userSlice.reducer



