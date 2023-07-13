"use client";

import { FC, FormEvent, useState } from "react";
import Image from 'next/image';
import DashboardSidebar from "@/app/components/dashboard-sidebar/dashboard-sidebar";
import Avatar from "@/public/images/avatar.png";
import FormInput from "@/app/components/form-input/form-input";
import Button from "@/app/components/button/button";
import { validateForm } from "@/app/lib/validation";
import PreviousButton from "@/app/components/previous-button/previous-button";

interface EditProfileProps {
    
}
 
const EditProfile: FC<EditProfileProps> = () => {
    const [profile, setProfile] = useState({
        username: "",
        email: "",
        bio: ""
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [usernameError, setUsernameError] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");
    const [bioError, setBioError] = useState<string>("");
    const isValid = Object.values(profile).every(val => Boolean(val));

    const handleChange = ({ target }: { target: any}) => {
        const { name, value } = target;

        setProfile({
            ...profile,
            [name]: value
        })
    }

    function editProfile(e: FormEvent) {
        e.preventDefault();

        setIsLoading(true);

        try {
            console.log("edit profile")
        } catch(e) {
            console.log(e)
        } finally {
            setIsLoading(false);
        }
    }


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