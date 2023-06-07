import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Chat, Message} from "../../types/types";
import {apiTokenInstance, idInstance} from "./token";


export const chatsApi = createApi({
    reducerPath: 'chatsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://api.green-api.com`,

    }),
    tagTypes: ['chat'],

    endpoints: (build) => ({
        getChats: build.query<Chat[], string>({
            query: () => ({
                url: `/waInstance${idInstance}/getChats/${apiTokenInstance}`,
            }),
            providesTags: ['chat'],
        }),
        getHistoryChats: build.mutation<Message[],{}>({
            query: (body) => ({
                url: `/waInstance${idInstance}/getChatHistory/${apiTokenInstance}`,
                method: 'POST',
                body,
            }),
        }),
    })
});

export const {useGetChatsQuery, useGetHistoryChatsMutation} = chatsApi;

