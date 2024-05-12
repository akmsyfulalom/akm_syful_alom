import { baseApi } from "@/redux/api/baseApi";

const skillsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSkills: builder.query({
      query: () => {
        return {
          url: "/skills", 
          method: "GET"
        };
      },
      providesTags: ["skills"]
    }), 
    getSingleSkill: builder.query({
      query: (id) => {
        return {
          url: `/skills/${id}`, 
          method: "GET"
        };
      }, 
      providesTags: ["experience"]
    }),
    postSkill: builder.mutation({
      query: (data) => {
        return {
          url: "/skills", 
          method: "POST", 
          body: data
        };
      }, 
      invalidatesTags: ["skills"]
    }), 
    updateSkill: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/skills/${id}`,
          method: "PUT",
          body: data
        };
      },
      invalidatesTags: ["skills"]
    }),
    deleteSkill: builder.mutation({
      query: (id) => ({
        url: `/skills/${id}`, 
        method: "DELETE"
      }), 
      invalidatesTags: ["skills"]
    })
  })
});

export const { 
    useGetSkillsQuery, 
    useGetSingleSkillQuery, 
    useUpdateSkillMutation, 
    useDeleteSkillMutation, 
    usePostSkillMutation
} = skillsApi;
