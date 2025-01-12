import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi', 
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://akm-syful-alom.vercel.app/api', 
        credentials: 'include',
    }),
    tagTypes: ["blogs","experience", "skills", "projects"],
    endpoints: () => ({}),
})