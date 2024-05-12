import { baseApi } from "@/redux/api/baseApi";

const projectsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => {
        return {
          url: "/projects", 
          method: "GET"
        };
      },
      providesTags: ["projects"]
    }), 
    getSingleProject: builder.query({
      query: (id) => {
        return {
          url: `/projects/${id}`, 
          method: "GET"
        };
      }, 
      providesTags: ["experience"]
    }),
    postProject: builder.mutation({
      query: (data) => {
        return {
          url: "/projects", 
          method: "POST", 
          body: data
        };
      }, 
      invalidatesTags: ["projects"]
    }), 
    updateProject: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/projects/${id}`,
          method: "PUT",
          body: data
        };
      },
      invalidatesTags: ["projects"]
    }),
    deleteProject: builder.mutation({
      query: (id) => ({
        url: `/projects/${id}`, 
        method: "DELETE"
      }), 
      invalidatesTags: ["projects"]
    })
  })
});

export const { 
 useGetProjectsQuery, 
 useGetSingleProjectQuery, 
 useUpdateProjectMutation, 
 useDeleteProjectMutation, 
 usePostProjectMutation
} = projectsApi;
