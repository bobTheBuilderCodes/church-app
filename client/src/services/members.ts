import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASEURL } from "./endpoints";

// Define a function to get the auth token
// const getAuthToken = () => {
//   return localStorage.getItem("authToken");
// };

export const churchMembersAPI = createApi({

  reducerPath: "churchMembersAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://church-server-18kviqkgr-bobthebuildercodes-projects.vercel.app/api/v1",
    // prepareHeaders: (headers, { getState }) => {
    //   const token = getAuthToken();
    //   if (token) {
    //     headers.set("Authorization", `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  tagTypes: ["members"],
  endpoints: (builder) => ({
    getChurchMembers: builder.query({
        query: () => "/members",
        providesTags: ["members"],
      }),
    getChurchMemberById: builder.query({
      query: (id) => `/members/${id}`,
      providesTags: ["members"],
    }),
    updateChurchMemberDetails: builder.mutation({
      query: (memberId) => ({
        url: `/members/${memberId._id}`,
        method: "PUT",
        body: memberId,
      }),
      invalidatesTags: ["members"],
    }),
    addChurchMember: builder.mutation({
      query: (newMember) => ({
        url: "/members",
        method: "POST",
        body: newMember,
      }),
      invalidatesTags: ["members"],
    }),
    deleteChurchMember: builder.mutation({
      query: (payload) => ({
        url: `/members/${payload._id}`,
        method: "DELETE",
        body: payload,
      }),
      invalidatesTags: ["members"],
    }),
    
  }),
});

export const {
 useAddChurchMemberMutation, useGetChurchMembersQuery, useGetChurchMemberByIdQuery, useDeleteChurchMemberMutation, useUpdateChurchMemberDetailsMutation
} = churchMembersAPI;
