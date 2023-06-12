import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Chat, Contacts, Message} from "../../types/types";


export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://api.green-api.com',

    }),

    endpoints: (build) => ({
        getContacts: build.query<Contacts[], {idInstance:string,apiTokenInstance:string}>({
            query: ({idInstance,apiTokenInstance}) => ({
                url: `/waInstance${idInstance}/getContacts/${apiTokenInstance}`,
            }),

        }),
        getContactInfo: build.mutation({
            query: ({body,idInstance,apiTokenInstance}) => ({
                url: `/waInstance${idInstance}/GetContactInfo/${apiTokenInstance}`,
                method: 'POST',
                body,
            }),
        }),


    })
});

export const {useGetContactsQuery,useGetContactInfoMutation} = contactsApi;

