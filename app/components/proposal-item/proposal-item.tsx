import { Proposals } from '@/typings';
import React from 'react';
import { useRouter } from 'next/navigation';
import Profile from '../profile/profile';
import Button from '../button/button';
import ProposalOptionItem from '../proposal-option-item/proposal-option-item';
import { ChevronsUp, Router } from 'lucide-react';
import { truncateString } from '@/app/lib/utils';

const ProposalItem = ({ user, title, slug, description, options, endDate, quorum, status }: Proposals) => {
    const router = useRouter();
    const statusColor = status === "active" ? `border-accent-shade-800` : `border-tertiary-700/40`;

    return (
        <blockquote 
            className={`rounded-[12px] border ${statusColor} py-3 px-4 xs:py-4 xs:px-6 md:py-6 md:px-8 space-y-4 cursor-pointer duration-300 transition-transform hover:scale-[1.006] group relative overflow-hidden`}
            onClick={() => router.push(`/dashboard/proposals/${slug}`)}
        >
            <header className='flex justify-between items-center'>
                {/* Profile */}
                <Profile {...user} />

                <Button 
                    role="user-account-status"
                    variant={status === "active" ? "accent" : "action"}
                    className="ss:rounded-full capitalize font-normal py-[.2rem] sm:py-1 lg:px-[12px] lg:py-[2px] text-[.78rem] sm:text-sm"
                >{status}</Button>
            </header>

            {/* Content */}
            <div className='content space-y-3 xs:space-y-4'>
                <header className='space-y-2'>
                    <h2 className='font-bold text-lg xs:text-[1.07rem] sm:text-[1.11rem] lg:text-[1.15rem]'>{title}</h2>
                    <p className='text-[.9rem] xs:text-[.92rem] sm:text-[.95rem] md:text-base leading-relaxed mt-2 text-[#767a7e] font-medium'>{truncateString(description, 165)}</p>
                </header>

                {/* Options */}
                <div className='flex flex-col gap-y-0.5'>
                    {options.map(option => (
                        <ProposalOptionItem 
                            key={option.title}
                            {...option} 
                        />
                    ))}
                </div>

                <p className='text-white/80 text-sm sm:text-[.96rem]'>{endDate} - {quorum}</p>
            </div>

            {/* Info button */}
            <span className={`absolute inline-block bottom-0 right-0 w-[3.8rem] h-[2.5rem] xs:w-[4.8rem] xs:h-[3.7rem] ${status === "active" ? "bg-accent-shade-800" : "bg-tertiary-700/40"} clip-slate`}>
                <ChevronsUp className={`${status === "active" ? "stroke-black" : "stroke-white"} w-[.9rem] h-[.9rem] bottom-[.2rem] xs:w-5 xs:h-5 absolute right-4 xs:bottom-[.3rem] animate-bounce duration-1000 transition-transform`} />
            </span>
        </blockquote>
    )
}

export default ProposalItem