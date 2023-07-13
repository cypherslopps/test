"use client";

import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Claimables from '@/app/components/claimables/claimables';
import OptionList from '@/app/components/option-list/option-list';
import { getRemainingTimeUntilTimeStamp } from '@/app/lib/utils';
import { claimNowPageDate, claimNowDate, tokenInfo } from "@/app/lib/constants";
import FaviconLarge from "@/public/images/favicon-large.png";
import Headline from '@/app/components/headline/headline';

function ClaimNow() {
    const router = useRouter();
	const pageCloseTimeStamp = getRemainingTimeUntilTimeStamp(claimNowPageDate);

	// Redirect to home page if page close countdown has elapsed
	if(Object.values(pageCloseTimeStamp).every(val => val === "00"))
		return router.push("/");

	// Fetch zealy quest
	// axiosClient.get().then(res => res).catch(e => e);


	return (
		<div className="wrapper w-[97%] md:w-11/12 lg:w-[87%] xl:w-10/12 px-2 sm:px-0 mx-auto pt-24 md:pt-28">
			{/* Our communities */}
			<section className='grid grid-cols-1 md:grid-cols-[60%,1fr] gap-x-12 text-white justify-items-center'>
				<div>
					<header className="space-y-2 md:space-y-3">
						<Headline 
							headerText='Nebula Community Claim'
						/>
						<p className='text-[.97rem] md:text-base opacity-90'>{"The Nebula community token claim is live!!! Join the first truly decentralized DAO community on zkSync Era Claim 1 billion tokens for $5"}</p>
					</header>

					{/* Options */}
					<p className='text-[.95rem] mt-5 bg-gradient-to-r from-tertiary-900 to-primary-shade-300 text-transparent bg-clip-text'>Only 20,000 possible claims.</p>
				</div>

				{/* Image */}
				<Image 
                    src={FaviconLarge} 
                    alt="favicon" 
                    className="hidden md:inline-block md:w-44 md:h-44" 
                />
			</section>

			<section className='mt-10 mb-8 sm:mb-12 sm:mt-6'>
				<Headline
					headerText='Roles'
				/>
				<Link 
                    href="https://zealy.io/c/zknebula" 
                    className='bg-gradient-to-r text-medium text-sm sm:text-[.92rem] md:text-[.94rem] from-secondary-shade-100 to-primary-tint-100 underline decoration-solid decoration-tertiary-900 uppercase font-medium text-transparent bg-clip-text'
                >
                    Complete quest to be eligible for participation
                </Link>
			</section>

			<section className="mt-8 py-4 space-y-3 sm:space-y-4">
				<Headline
					headerText='Contract Info'
				/>

				{/* Content */}
				<ul className='content flex flex-col gap-y-2 sm:gap-y-3'>
					<li className='flex justify-between'>
						<span className='text-gray-300'>Contract</span>
						<div className='flex items-center gap-x-4'>
							<Image 
								src={FaviconLarge} 
								alt="ido" 
								className='w-5 h-5'
							/>
							<span className='text-red-300 font-medium'>0xfe9F...273B</span>
						</div>
					</li>

					<li className='flex justify-between'>
						<span className='text-gray-300'>Token address</span>
						<div className='flex items-center gap-x-4'>
							<Image 
                                src={FaviconLarge} 
                                alt="ido" 
                                className='w-5 h-5'
							/>
							<span className='text-red-300 font-medium'>0xfe9F...273B</span>
						</div>
					</li>
				</ul>
			</section>

			{/* Claimables */}
			<Claimables timeStamp={claimNowDate} size="full" styles="mt-14 mb-[3.5rem] sm:mt-0 md:my-24" />
			
			<section className='pb-14 border-b border-border'>
				<Headline 
					headline="Nebula"
					headerText='The Path To True Decentralization'
					headlineStyles="from-secondary-shade-100 to-primary-tint-100 xl:text-2xl"
					headerStyles="text-[1.37rem] sm:text-[1.7rem] xl:text-[1.3rem]"
				/>

				<OptionList list={tokenInfo} />
			</section>
		</div>
	)	
}

export default ClaimNow;