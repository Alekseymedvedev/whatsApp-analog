import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Chat, Contacts, Message} from "../../types/types";
import {apiTokenInstance, idInstance} from "./token";


export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://api.green-api.com',

    }),
    tagTypes: ['s'],

    endpoints: (build) => ({
        getContacts: build.query<Contacts[], string>({
            query: () => ({
                url: `/waInstance${idInstance}/getContacts/${apiTokenInstance}`,
            }),

        }),
        getContactInfo: build.mutation({
            query: (body) => ({
                url: `/waInstance${idInstance}/GetContactInfo/${apiTokenInstance}`,
                method: 'POST',
                body,
            }),
        }),


    })
});

export const {useGetContactsQuery,useGetContactInfoMutation} = contactsApi;

