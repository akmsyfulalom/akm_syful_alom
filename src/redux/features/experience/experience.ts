import { baseApi } from "@/redux/api/baseApi";

const experienceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getExperiences: builder.query({
      query: () => {
        return {
          url: "/experience", 
          method: "GET"
        };
      },
      providesTags: ['blogs']
    }), 
    getSingleExperience: builder.query({
      query: (id) => {
        return {
          url: `/experience/${id}`, 
          method: "GET"
        };
      }, 
      providesTags: ["experience"]
    }),
    postExperience: builder.mutation({
      query: (data) => {
        return {
          url: "/experience", 
          method: "POST", 
          body: data
        };
      }, 
      invalidatesTags: ['blogs']
    }), 
    updateExperience: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/experience/${id}`,
          method: "PUT",
          body: data
        };
      },
      invalidatesTags: ['blogs']
    }),
    deleteExperience: builder.mutation({
      query: (id) => ({
        url: `/experience/${id}`, 
        method: "DELETE"
      }), 
      invalidatesTags: ['blogs']
    })
  })
});

export const { 
  useGetExperiencesQuery, 
  useGetSingleExperienceQuery, 
  useUpdateExperienceMutation, 
  useDeleteExperienceMutation, 
  usePostExperienceMutation
} = experienceApi;
