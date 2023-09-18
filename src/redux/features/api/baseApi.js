import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fizz-server-4vqfjzczi-shiningsudipto.vercel.app'
    }),
    endpoints: () => ({

    })
})

export default baseApi;