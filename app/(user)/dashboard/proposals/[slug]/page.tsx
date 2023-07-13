import React, { FC } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from "next/navigation";
import { proposals } from "@/app/lib/constants";
import { flattenObject, slugConverter } from "@/app/lib/utils";
import Profile from "@/app/components/profile/profile";
import PreviousButton from '@/app/components/previous-button/previous-button';
import NotificationBox from '@/app/components/notification-box/notification-box';
import Button from '@/app/components/button/button';
import OptionItem from '@/app/components/option-item/option-item';
import UserImage from '@/public/images/profile.png';
import ShareIcon from '@/public/svg/share.svg';
import MenuIcon from '@/public/svg/menu.svg';
import DiscordLogo from '@/public/svg/discord.svg';
import RedirectIcon from '@/public/svg/redirect.svg';
import VoteList from "@/app/components/vote-list/vote-list";
import VoteCast from "@/app/components/vote-cast/vote-cast";
import { getProposal } from "@/app/lib/server";
import { ProposalOption } from "@/typings";

interface ProposalProps {
    params: {
        slug: string
    }
}
 
const Proposal: FC<ProposalProps> = ({ params: { slug }}) => {
    const proposal = getProposal(slug);

    console.log(proposal);

    if(!proposal) 
        return notFound();

    const { title, status, description, options } = proposal;

    return (
        <main className='grid md-md:grid-cols-[1fr,max-content] md-md:gap-x-4 lg:gap-x-9'>
            <section className='flex flex-col gap-y-4 xs:gap-y-6 sm:gap-y-8'>
                <PreviousButton />
                <NotificationBox type="warning" />

                {/* Proposal content */}
                <div className='proposal-content mb-2 sm:mb-3'>
                    <h1 className='text-2xl xxs:text-[1.47rem] xs:text-[1.53rem] sm:text-[1.75rem] md:text-[1.7rem] md-md:text-[1.65rem] lg:text-[1.75rem] leading-9 font-semibold'>{title}</h1>

                    <div className='mb-5 mt-4 sm:mb-5 flex gap-1 flex-col xxs:flex-row xxs:items-center xxs:justify-between'>
                        <div className='flex items-center gap-x-5 xxs:gap-x-3 profile-container'>
                            <Button 
                                role="user-account-status"
                                variant={status === "active" ? "accent" : "action"}
                                className="ss:rounded-full capitalize font-normal py-[.2rem] sm:py-1 lg:px-[12px] lg:py-[2px] text-[.78rem] sm:text-sm"
                            >{status}</Button>

                            <Profile 
                                image={UserImage}
                                address="0xdsd324sdf90908sffdf7"
                            />
                        </div>

                        {/* Actions */}
                        <div className='flex items-center md:gap-x-2 lg:gap-x-4'>
                            <Button
                                role="share button"
                                variant='transparent'
                                className=" text-[#586069] ss:px-0 md:px-0 lg:px-0"
                            >
                                <Image 
                                    src={ShareIcon}
                                    alt="share icon"
                                    className='w-5 h-5 xs:w-4 xs:h-4 object-cover ss:px-0 md:px-0 lg:px-0'
                                />

                                Share
                            </Button>

                            <Button
                                role="share button"
                                variant='transparent'
                                className="text-[#586069] ss:px-0 md:px-0 lg:px-0"
                                title="Options"
                            >
                                <Image 
                                src={MenuIcon}
                                alt="share icon"
                                width={10}
                                height={10}
                                className='w-full object-cover'
                                />
                            </Button>
                        </div>
                    </div>

                    <p className='text-[.94rem] xs:text-[.96rem] sm:text-[1.02rem] md:text-[1.05rem] md:leading-[1.65rem] text-[#767a7e]'>{description}</p>
                </div>

                {/* Vote Cast */}
                {status === "active" && (
                    <VoteCast />
                )}

                {/* Discussions */}
                <section className='space-y-2'>
                    <h4 className='text-base md:text-[1.1rem] font-bold'>Discussions</h4>
                    <blockquote className='flex flex-col gap-y-2 xs:flex-row xs:items-center xs:gap-x-5 border border-tertiary-700/40 rounded-[12px] p-4 md:p-5'>
                        <Image 
                        src={DiscordLogo}
                        alt="discord"
                        className='w-[6%] sm:w-[7%] object-cover'
                        />

                        <div>
                            <p className='text-[.95rem] sm:text-[.97rem] col-start-2 col-end-3'>Join the Nebula Discord Server!</p>
                            <span className='text-[.78rem] sm:text-sm text-gray'>Check out the nebula community on Discord - hang out with 2,579 other…</span>
                        </div>
                    </blockquote>
                </section>

                {/* Votes List */}
                <VoteList />
            </section> 

            {/* Aside */}
            <aside className='w-full md-md:w-[31vw] lg:w-[28vw] grid grid-cols-1 sm:grid-cols-2 grid-rows-1 md-md:grid-cols-1 items-center gap-x-4 md-md:inline-block h-fit py-6 sm:px-[.97rem] space-y-4'>
                <blockquote className='border border-tertiary-700/40 rounded-lg'>
                    <header className='py-3 px-5 sm:py-4 md:py-5 lg:py-4 lg:px-5'>
                        <h4 className='text-base'>Information</h4>
                    </header>

                    {/* Content */}
                    <div className='border-t border-tertiary-700/40'>
                        <ul className='wrapper px-4 py-4 sm:px-3 lg:px-5 space-y-4 sm:space-y-3 md:space-y-2'>
                            <li className='flex items-center justify-between'>
                                <span className='text-sm xs:text-[.92rem] lg:text-[.9rem] text-white/90'>Strategie(s):</span>
                                <span className='text-[.84rem] sm:text-sm md:text-[.84rem]'>...</span>
                            </li>

                            <li className='flex items-center justify-between'>
                                <span className='text-sm xs:text-[.92rem] lg:text-[.9rem] text-white/90'>IPFS:</span>
                                <Link href="#" className='text-[.83r4m] sm:text-sm md:text-[.84rem] flex items-center gap-x-1 text-accent-shade-800'>
                                #bafkrei
                                <Image 
                                    src={RedirectIcon}
                                    alt="redirect icon"
                                    className='w-4 h-4 object-cover'
                                />
                                </Link>
                            </li>

                            <li className='flex items-center justify-between'>
                                <span className='text-sm xs:text-[.92rem] lg:text-[.9rem] text-white/90'>Voting system:</span>
                                <span className='text-[.84rem] sm:text-sm md:text-[.84rem]'>Single choice voting</span>
                            </li>

                            <li className='flex items-center justify-between'>
                                <span className='text-sm xs:text-[.92rem] lg:text-[.9rem] text-white/90'>Start date:</span>
                                <span className='text-[.84rem] sm:text-sm md:text-[.84rem]'>Oct 12, 2022, 8:41 AM</span>
                            </li>

                            <li className='flex items-center justify-between'>
                                <span className='text-sm xs:text-[.92rem] lg:text-[.9rem] text-white/90'>End date:</span>
                                <span className='text-[.84rem] sm:text-sm md:text-[.84rem]'>Oct 16, 2022, 8:41 PM</span>
                            </li>

                            <li className='flex items-center justify-between'>
                                <span className='text-sm xs:text-[.92rem] lg:text-[.9rem] text-white/90'>Snapshot:</span>
                                <span className='text-[.84rem] sm:text-sm md:text-[.84rem]'>15,726,420</span>
                            </li>
                        </ul>
                    </div>
                </blockquote>
                    
                {/* Options */}
                <blockquote className='border border-tertiary-700/40 rounded-lg'>
                    <header className='py-3 px-5 sm:py-4 md:py-5 lg:py-4 lg:px-5'>
                        <h4 className='text-base'>Results</h4>
                    </header>

                    <div className='border-t border-tertiary-700/40 p-5 sm:py-4 sm:px-3 lg:px-5 space-y-5 sm:space-y-4 md:space-y-3'>
                        {options.map((option: ProposalOption) => (
                            <OptionItem key={option.title} {...option} />
                        ))}
                    </div>
                </blockquote>
            </aside>
        </main>
    );
}

export async function generateStaticParams() {
    const params = flattenObject(proposals).map(({ title }) => ({
        slug: slugConverter(title)
    }));

    return params;
}
 
export default Proposal;