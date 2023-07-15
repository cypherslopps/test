'use client';

import { UserProps } from "@/typings";
import { useState, createContext, useContext, useCallback, useEffect } from "react";
import { useAuth } from "../hooks/auth";
import { useAccount } from "wagmi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface UserContextType {
    user: UserProps,
    setUser: () => void,
    error: null | string,
    setError: () => void
}

const UserContext = createContext<UserContextType | any>({
    user: {
        id: "",
        username: "",
        email: "",
        location: "",
        wallet_address: "",
        bio: ""
    },
    setUser: () => {},
    error: null,
    setError: () => {}
});

export const UserProvider = ({ children } : { children: React.ReactNode }) => {
    const { address, isConnected } = useAccount();
    const { getUserProfile } = useAuth();
    const router = useRouter();
    const [user, setUser] = useState<UserProps | any>({
        id: "",
        username: "",
        email: "",
        location: "",
        wallet_address: "",
        bio: ""
    });
    const [error, setError] = useState<null | string>("");
    
    // Fetch user profile
    const fetchUserProfile = useCallback(async () => {
        try {
            await getUserProfile({
                setError,
                setUser,
                walletAddress: `${address}`
            });

            router.refresh();
        } catch(e) {
            // Display error
            toast.error(error);
        }
    }, [address]);

    useEffect(() => {
        if(isConnected) 
            fetchUserProfile();
        else 
            setUser({
                id: "",
                username: "",
                email: "",
                location: "",
                wallet_address: ""
            });

    }, [fetchUserProfile]);

    return (
      <UserContext.Provider value={{ user, setUser, error, setError }}>
          {children}
      </UserContext.Provider>
    )
}

export const useUser = () => {
    const userContext = useContext(UserContext);
  
    if (!userContext) {
      throw new Error(
        "useUser has to be used within <UserContext.Provider>"
      );
    }
  
    return userContext;
  };