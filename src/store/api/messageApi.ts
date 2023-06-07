import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Message} from "../../types/types";
import {apiTokenInstance, idInstance} from "./token";



export const messageApi = createApi({
    reducerPath: 'messagerApi',
    baseQuery: fetchBaseQuery({
         baseUrl: `https://api.green-api.com`,

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

