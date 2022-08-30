import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {baseUrl} from "../src/constants/api";
import {ILogin, IPost, PostCreate} from "../src/interfaces";

export const clientApi = createApi({
    reducerPath: 'clientApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getPosts: builder.query<IPost[],void>({
            query: () => `/post`
        }),
        createPost:builder.mutation<IPost,PostCreate>({
            query:(payload) => ({
                url:'/post',
                method:'POST',
                body:payload,
            })
        }),
        login:builder.mutation<ILogin,PostCreate>({
            query:(payload) => ({
                url:'/post',
                method:'POST',
                body:payload,
            }),
            transformResponse(response){
                const data = response.dataValues;
                const token = response.token;
                return {data,token}
            }
        }),
    })
})


export const {getPosts} = clientApi.endpoints

export const {useCreatePostMutation} = clientApi