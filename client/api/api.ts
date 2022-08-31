import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {baseUrl} from "../src/constants/api";
import {IPost, PostCreate,IResponseUser,Auth} from "../src/interfaces";

export const clientApi = createApi({
    reducerPath: 'clientApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getPosts: builder.query<IPost[], void>({
            query: () => `/post`
        }),
        createPost: builder.mutation<IPost, PostCreate>({
            query: (payload) => ({
                url: '/post',
                method: 'POST',
                body: payload,
            })
        }),
        login: builder.mutation<IResponseUser, Auth>({
            query: (payload) => ({
                url: '/auth/login',
                method: 'POST',
                body: payload,
            }),
        }),
        registration: builder.mutation<IResponseUser, Auth>({
            query: (payload) => ({
                url: '/auth/registration',
                method: 'POST',
                body: payload,
            }),
        }),
    })
})


export const {getPosts} = clientApi.endpoints

export const {useCreatePostMutation,useLoginMutation,useRegistrationMutation} = clientApi