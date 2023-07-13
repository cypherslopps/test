"use client";

import { FC } from "react";
import Image from 'next/image';
import DashboardSidebar from "@/app/components/dashboard-sidebar/dashboard-sidebar";
import Avatar from "@/public/images/avatar.png";
import Favicon from "@/public/images/favicon-bordered.png";
import CopyContent from "@/app/components/copy-content/copy-content";
import { truncateWalletAddress } from "@/app/lib/utils";
import Link from "next/link";
import InfoText from "@/app/components/info-text/info-text";
import { useAccount } from "wagmi";

interface UserProfileProps {
    
}
 
const UserProfile: FC<UserProfileProps> = () => {
    const { address } = useAccount();

    return ( 
        <main className='grid md-md:grid-cols-[max-content,1fr] md-md:gap-x-6 lg:gap-x-9'>
            <DashboardSidebar />

            <section className='space-y-3 sm:space-y-5 flex flex-col items-center mt-4'>
                {/* Profile */}
                <div className="flex flex-col items-center gap-y-3">
                    {/* Profile image */}
                    <figure className="w-20 h-20 md:w-24 md:h-24">
                        {address ? (
                            <Image
                                src={Avatar}
                                alt="avatar"
                                className="w-full h-full object-cover border border-gray-50/40 rounded-full"
                                priority
                            />
                        ) : (
                            <Image
                                src={Favicon}
                                alt="favicon"
                                className="w-full h-full object-cover"
                                priority
                            />
                        )}
                    </figure>
                    
                    <div className="text-center flex flex-col sm:gap-y-1">
                        <h1 className="text-[1.1rem] sm:text-lg md:text-xl font-semibold">Nebula</h1>
                        {address && (
                            <CopyContent 
                                textToCopy={address}
                                text={truncateWalletAddress(address)} 
                                color="text-gray-300"
                            />
                        )}
                        <div className="space-x-2">
                            <span className="text-[.88rem] xs:text-[.9rem] sm:text-[.92rem] md:text-[.95rem] sm:-mt-0.5">dinkydonkey@gmail.com</span>
                            <Link href="/dashboard/profile/edit" className="text-accent-shade-800 underline text-[.85rem] xs:text-sm">Edit</Link>
                        </div>
                    </div>
                </div>

                {/* Info */}
                <InfoText 
                    content="Your email is protected and not displayed publicly. We will not ask for your wallet phrase in any circumstance."
                    className="w-full xs:w-11/12 xs:justify-center sm:w-1/2 md-md:w-full"
                />

                {/* Bio */}
                <div className="bio w-full xs:w-11/12 sm:w-9/12 md-md:w-11/12 space-y-1 sm:space-y-2">
                    <h3 className="font-semibold text-lg md:text-xl">Bio</h3>

                    {/* content */}
                    <div className="border border-tertiary-shade-900/40 rounded-md p-3 text-[.83rem] sm:p-4 sm:text-sm lg:text-[.89rem] leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, deleniti? Voluptatibus quaerat alias eos modi quidem in qui ipsa quisquam fugit saepe asperiores laborum, eius distinctio omnis. Delectus, assumenda minus.
                    </div>
                </div>
            </section>
        </main>
    );
}
 
export default UserProfile;