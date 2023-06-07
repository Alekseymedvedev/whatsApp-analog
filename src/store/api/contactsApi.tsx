import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Chat, Contacts} from "../../types/types";
import {apiTokenInstance, idInstance} from "./token";


export const contactsApi = createApi({
    reducerPath: 'mcontactsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://api.green-api.com`,

    }),
    tagTypes: ['s'],

    endpoints: (build) => ({
        getContacts: build.query<Contacts[], string>({
            query: () => ({
                url: `/waInstance${idInstance}/getContacts/${apiTokenInstance}`,
            }),

        }),

    })
});

export const {useGetContactsQuery} = contactsApi;

