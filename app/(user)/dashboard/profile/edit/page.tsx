"use client";

import { FormEvent, useEffect, useState } from "react";
import Image from 'next/image';
import DashboardSidebar from "@/app/components/dashboard-sidebar/dashboard-sidebar";
import Avatar from "@/public/images/avatar.png";
import FormInput from "@/app/components/form-input/form-input";
import Button from "@/app/components/button/button";
import { validateForm } from "@/app/lib/validation";
import PreviousButton from "@/app/components/previous-button/previous-button";
import { useUser } from "@/app/providers/user-provider";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/hooks/auth";
import toast from "react-hot-toast";
import { useAccount } from "wagmi";

const EditProfile = () => {
    const { user, setUser, error } = useUser(); 
    const { address } = useAccount();
    const { updateUserProfile } = useAuth();
    const router = useRouter();
    const [profile, setProfile] = useState({
        username: "",
        email: "",
        bio: ""
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [usernameError, setUsernameError] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");
    const [bioError, setBioError] = useState<string>("");
    const [requestError, setRequestError] = useState<string>("");
    const isValid = Object.values(profile).every(val => Boolean(val));

    // Redirect user if user doesn't exist
    if(error && Object.values(user).map(val => Boolean(val)))
        router.back();

    const handleChange = ({ target }: { target: any}) => {
        const { name, value } = target;

        setProfile({
            ...profile,
            [name]: value
        })
    }

    async function editProfile(e: FormEvent) {
        e.preventDefault();

        setIsLoading(true);

        if(isValid) {
            try {
                await updateUserProfile({
                    setRequestError,
                    setUser,
                    data: profile,
                    wallet_address: `${address}`        
                });
    
                setTimeout(() => {
                    // Reset form
                    setProfile({
                        username: "",
                        email: "",
                        bio: ""
                    });
        
                    toast.success("User profile successfully updated");

                    // Refresh page
                    router.refresh();

                    // Redirect to profile page
                    setTimeout(() => router.push("/dashboard/profile"), 500);
                }, 500)
            } catch(e) {            
                return e;
            } finally {
                setTimeout(() => setIsLoading(false), 3500);
            }
        } 
    }

    // Set user
    useEffect(() => {
        setProfile({
            username: user?.username || "",
            email: user?.email || "",
            bio: user?.bio || ""
        })
    }, [user])


    return (
        <main className='grid md-md:grid-cols-[max-content,1fr] md-md:gap-x-6 lg:gap-x-9'>
            <DashboardSidebar />

            <section className='w-full sm:w-11/12 sm:mx-auto md-md:w-11/12 space-y-8 mt-4'>
                <PreviousButton />

                {/* Profile */}
                <div className="flex flex-col items-center gap-y-3">
                    <Image
                        src={Avatar}
                        alt="avatar"
                        className="w-24 h-24 object-cover border border-gray-50/40 rounded-full"
                        priority
                    />
                </div>

                {/* Profile Edit Form */}
                <form 
                    className="profile-form flex flex-col gap-4 mx-auto"
                    onSubmit={editProfile}
                >
                    {/* Request error */}
                    <p className="text-sm sm:text-[.9rem] text-red-600 text-center">{requestError}</p>

                    <FormInput 
                        type="text"
                        name="username"
                        label="username"
                        variant="default"
                        value={profile.username}
                        onChange={handleChange}
                        onBlur={({ target }) => validateForm({
                            value: target.value,
                            name: target.name,
                            setError: setUsernameError,
                            error: "Fill in a new username or leave the old username"
                        })}
                        error={usernameError}                        
                    />

                    <FormInput 
                        type="email"
                        name="email"
                        label="email"
                        info="Your email is protected and not displayed publicly. We will only mail important updates to you. We will not ask for your wallet phrase in any circumstance."                     variant="default"
                        value={profile.email}
                        onChange={handleChange}
                        onBlur={({ target }) => validateForm({
                            value: target.value,
                            name: target.name,
                            setError: setEmailError,
                            error: "Fill in a new email or leave the old email"
                        })}
                        error={emailError}                        
                    />

                    <FormInput 
                        type="textarea" 
                        name="bio"
                        label="bio"
                        variant="default"
                        value={profile.bio}
                        onChange={handleChange}
                        onBlur={({ target }) => validateForm({
                            value: target.value,
                            name: target.name,
                            setError: setBioError,
                            error: "Fill in your bio"
                        })}
                        error={bioError}                        
                    />

                    <Button
                        variant="primary"
                        role="submit edited profile"
                        className="mx-auto w-full sm:py-2.5"
                        isLoading={isLoading}
                        disabled={!isValid}
                    >Update</Button>
                </form>
            </section>
        </main>
    );
}
 
export default EditProfile;