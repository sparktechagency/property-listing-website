
import { GetLocalStorage } from "@/app/util/LocalStroage";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://148.66.158.106:5000/api/v1" ,
      // baseUrl: "http://10.0.80.75:5005/api/v1" , 
      prepareHeaders: (headers) => {
        const token = GetLocalStorage("accessToken");
        if (token) {
          headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
      },
    }),
  endpoints: () => ({}), 
  tagTypes: [ "chats"],
});

// export const imageUrl = "http://10.0.80.75:5005/";
// export const socketURL = "http://10.0.80.75:5005";
export const imageUrl = "http://148.66.158.106:5000/"; 
export const socketURL  = "http://148.66.158.106:5000"; 