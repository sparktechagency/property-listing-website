/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetLocalStorage } from "@/app/util/LocalStroage";
import { baseApi } from "../../base/baseApi";
const resetToken = GetLocalStorage("resetToken")  

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    register:builder.mutation({
      query: (data) => {
        return {
          method: "POST",
          url: "/user",
          body: data,
        };
      },
    }) ,
      otpVerify: builder.mutation({
          query: (data) => {
              return{
                  method: "POST",
                  url: "/auth/verify-email",
                  body: data,
              }
          }
      }), 
      resendOtp: builder.mutation({
          query: (data) => {
              return{
                  method: "POST",
                  url: "/auth/resend-otp",
                  body: data,
              }
          }
      }) , 
      login: builder.mutation({
          query: (data) => {
              return{
                  method: "POST",
                  url: "/auth/login",
                  body: data
              }
          },
      }),
      forgetPassword: builder.mutation({
          query: (data) => {
              return{
                  method: "POST",
                  url: "/auth/forgot-password",
                  body: data
              }
          }
      }),
      resetPassword: builder.mutation({
          query:(value)=>({
              url:"/auth/reset-password" ,
              headers: {authorization: resetToken},
              method:"POST" ,
              body: value
          })
      }) ,  

      changePassword: builder.mutation({
          query: (data) => {
              return{
                  method: "POST",
                  url: "/auth/change-password",
                  body: data,
              }
          }
      }),

      updateProfile: builder.mutation({
          query: (data) => {
              return{
                  method: "PATCH",
                  url: "/user",
                  body: data,
              }
          }
      }),

      profile: builder.query({
          query: () => {
              return{
                  url: "/user/profile",   
              }
          }, 
          transformResponse: (response: any) => response.data
      }),
  }),
});

export const {
  useRegisterMutation,
  useOtpVerifyMutation,
  useLoginMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
  useChangePasswordMutation,
  useUpdateProfileMutation, 
  useResendOtpMutation,
  useProfileQuery
} = authApi;