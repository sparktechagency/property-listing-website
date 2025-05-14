
import { GetLocalStorage } from "@/app/util/LocalStroage";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://148.66.158.106:5000/api/v1" ,
      // baseUrl: "http://192.168.10.15:8000/api/v1" , 
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

// export const imageUrl = "http://192.168.10.15:8000/";
export const imageUrl = "http://148.66.158.106:5000/"; 
export const socketURL  = "http://148.66.158.106:5000"; 