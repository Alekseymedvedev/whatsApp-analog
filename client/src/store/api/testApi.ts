import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const testApi = createApi({
    reducerPath: 'testApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost/api`,

    }),
    tagTypes: ['chat'],

    endpoints: (build) => ({
        getTest: build.query({
            query: () => ({
                url: ``,
            }),
            providesTags: ['chat'],
        }),
    })
});

export const {useGetTestQuery} = testApi;

