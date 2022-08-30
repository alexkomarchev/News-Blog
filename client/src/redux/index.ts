import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import {createWrapper} from "next-redux-wrapper";
import {clientApi} from "../../api/api";


export function makeStore() {
    return configureStore(
        {
            reducer: {
                user: userSlice,
                [clientApi.reducerPath]: clientApi.reducer
            },
            middleware: (getDefaultMiddleware) =>
                getDefaultMiddleware().concat(clientApi.middleware),
        }
    )
}

export const store = makeStore()

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = typeof store.dispatch


export const wrapper = createWrapper<AppStore>(makeStore)


