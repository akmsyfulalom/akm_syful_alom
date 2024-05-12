import { baseApi } from "@/redux/api/baseApi";

const blogsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => {
        return {
          url: "/blogs", 
          method: "GET"
        };
      },
      providesTags: ['blogs']
    }), 
    getSingleBlog: builder.query({
      query: (id) => {
        return {
          url: `/blogs/${id}`, 
          method: "GET"
        };
      }, 
      providesTags: ["blogs"]
    }),
    postBlog: builder.mutation({
      query: (data) => {
        return {
          url: "/blogs", 
          method: "POST", 
          body: data
        };
      }, 
      invalidatesTags: ['blogs']
    }), 
    updateBlog: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/blogs/${id}`,
          method: "PUT",
          body: data
        };
      },
      invalidatesTags: ['blogs']
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/${id}`, 
        method: "DELETE"
      }), 
      invalidatesTags: ['blogs']
    })
  })
});

export const { 
  useGetBlogsQuery, 
  useGetSingleBlogQuery, 
  useUpdateBlogMutation, 
  useDeleteBlogMutation, 
  usePostBlogMutation
} = blogsApi;
