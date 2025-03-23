"use client"

import { useEffect } from "react";
import { Spin } from "antd";
import { useProfileQuery } from "@/redux/features/auth/authApi";
import { useRouter } from "next/navigation";

const PrivateProvider = ({ children }:{children: React.ReactNode}) => {

    const router = useRouter();
    const { data: profile, isLoading, isFetching, isError } = useProfileQuery(undefined);

    useEffect(() => {
      if (!isLoading && !isFetching) {
        if (isError || !profile || !["CUSTOMER", "SELLER"].includes(profile?.role)) {
          router.push("/login");
        }
      }
    }, [isLoading, isFetching, isError, profile, router]);

    if (isLoading || isFetching) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <Spin size="large" />
        </div>
      );
    }


  if (profile?.role === "CUSTOMER" || profile?.role === "SELLER") {
    return children; 
  } 

    return null;
  };



export default PrivateProvider; 