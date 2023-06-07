import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Message} from "../../types/types";
import {apiTokenInstance, idInstance} from "./token";



export const messageApi = createApi({
    reducerPath: 'messagerApi',
    baseQuery: fetchBaseQuery({
         baseUrl: `${process.env.REACT_APP_URL}`,

    }),


    endpoints: (build) => ({
        sendMessage: build.mutation({
            query: (body) => ({
                url: `/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
                method: 'POST',
                body,
            }),
        }),

    })
});

export const {useSendMessageMutation} = messageApi;

