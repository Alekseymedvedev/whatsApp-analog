import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Message} from "../../types/types";
import {apiTokenInstance, idInstance} from "./token";



export const messageApi = createApi({
    reducerPath: 'messagerApi',
    baseQuery: fetchBaseQuery({
         baseUrl: `https://api.green-api.com`,

    }),

    tagTypes: ['message'],

    endpoints: (build) => ({
        sendMessage: build.mutation({
            query: (body) => ({
                url: `/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['message'],
        }),
        getHistoryChats: build.mutation<Message[],{}>({
            query: (body) => ({
                url: `/waInstance${idInstance}/getChatHistory/${apiTokenInstance}`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['message'],
        }),

    })
});

export const {useSendMessageMutation,useGetHistoryChatsMutation} = messageApi;

