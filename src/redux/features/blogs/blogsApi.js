import baseApi from "../api/baseApi";

const blogsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getBlogs: builder.query({
            query: () => '/allBlogs'
        }),
        addBlog: builder.mutation({
            query: (blog) => ({
                url: '/addBlog',
                method: 'POST',
                body: blog,
            })
        })
    })
})

export const { useAddBlogMutation, useGetBlogsQuery } = blogsApi;