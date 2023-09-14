import baseApi from "../api/baseApi";

const projectsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProjects: builder.query({
            query: () => '/allProjects',
        }),
        getProjectById: builder.query({
            query: (id) => `/projectById/${id}`
        }),
        addProject: builder.mutation({
            query: (project) => ({
                url: '/addProject',
                method: 'POST',
                body: project,
            })
        })
    })
})

export const { useGetProjectsQuery, useGetProjectByIdQuery, useAddProjectMutation } = projectsApi;