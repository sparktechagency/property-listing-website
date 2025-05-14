/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react';
import io from "socket.io-client";
import { useMemo } from "react";
import { socketURL } from '@/redux/base/baseApi';
import { useProfileQuery } from '@/redux/features/auth/authApi';

interface UserContextType {
    user: any;
    socket: any;
    setUser: any;
}

export const UserContext = React.createContext<UserContextType | null>(null);

export const useUser = () => {
    return useContext(UserContext)
}

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const { data: profile } = useProfileQuery(undefined)
    const [user, setUser] = useState(null);
    const socket = useMemo(() => io(socketURL), []); 


    useEffect(() => {
        const handleConnection = () => {
            // console.log("Connected to socket server"); 
        };

        socket.on("connect", handleConnection);
        return () => {
            socket.off('connect', handleConnection);
        };

    }, [socket]);



    useEffect(() => {
        if (profile) {
            setUser(profile);
        }
    }, [profile])


    return (
        <UserContext.Provider value={{ user, socket, setUser }}>
            {children}
        </UserContext.Provider>
    )
}