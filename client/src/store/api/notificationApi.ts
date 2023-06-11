import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const notificationApi = createApi({
    reducerPath: 'notificationApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://whats-app-analog.vercel.app`,
        headers: {
            "Content-Type": "application/json"
        },
    }),
    tagTypes: ['chat'],

    endpoints: (build) => ({
        getNotification: build.query({
            query: () => ({
                url: `/api`,
            }),
            providesTags: ['chat'],
        }),
    })
});

export const {useGetNotificationQuery} = notificationApi;

