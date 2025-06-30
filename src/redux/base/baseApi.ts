
import { GetLocalStorage } from "@/app/util/LocalStroage";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.ambitiousbizxchange.com/api/v1" ,
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
export const imageUrl = "https://api.ambitiousbizxchange.com/"; 
export const socketURL  = "https://api.ambitiousbizxchange.com"; 