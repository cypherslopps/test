import { useState } from "react";
import axios from "../lib/axios";

export const useAuth = () => {
    const [reponse, setResponse] = useState<string>("");
    
    const profiles = axios.get("profiles")
        .then(res => res.data)
        .catch(error => error.response.status);

    const csrf = () => axios.get("sanctum/csrf-cookie");

    // Join user
    const addJoinedUser = async ({ setRequestError, setRequestResponse, data }: { setRequestError: any, setRequestResponse: any, data: any }) => {
        await csrf()

        setRequestError("");

        axios.post("register", data)
            .then(({ data }) => {
                setRequestResponse(data?.message);
            })
            .catch(error => {
                if (error.response.status !== 422) throw error;
                
                setRequestError(error?.response?.data?.errors?.email[0]);
            })
    }

    // Update user profile
    const updateUserProfile = async ({ setRequestError, wallet_address, data }: { setRequestError: any, wallet_address: string, data: any }) => {
        await csrf();

        setRequestError("");

        axios.put(`profiles/${wallet_address}/edit`, data)
            .then(({ data }) => setResponse(data.message))
            .catch(error => {
                if (error.response.status !== 422) throw error

                setRequestError(error?.response?.data?.errors?.message)
            })

        return reponse;
    }

    // Get user profile
    const getUserProfile = async ({ setError, setUser, walletAddress }: { setError: any, setUser: any, walletAddress: string }) => {
        setError("");

        axios.get(`profiles/${walletAddress}`)
            .then(({ data }) => setUser(data))
            .catch(error => {
                if (error.response.status !== 422) throw error

                setError(error.response.data.errors.message)
            })
    }

    return {
        profiles,
        getUserProfile,
        updateUserProfile,
        addJoinedUser
    }
}