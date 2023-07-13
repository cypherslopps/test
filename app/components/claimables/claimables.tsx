"use client";

import React, { useState, useEffect, FC } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Headline from '../headline/headline'
import Button from "../button/button";
import ClaimsCountDown from '../claims-count-down/claims-count-down';
import { claimNowDate } from '../../lib/constants';
import { claim } from '@/app/lib/helpers';
import { switchNetwork } from "@wagmi/core";
import { useAccount, useNetwork } from "wagmi";
import { getRemainingTimeUntilTimeStamp } from '@/app/lib/utils';
import ClaimsModal from '../claims-modal/claims-modal';

interface ClaimablesProps {
	size: string;
	styles: string;
	timeStamp: Date
}

const Claimables: FC<ClaimablesProps> = ({ size, styles, timeStamp }) => {
	const hasClaimTimestampElapsed = Object.values(getRemainingTimeUntilTimeStamp(claimNowDate)).every(val => val === "00");
	const { isConnected } = useAccount();

	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [responseMessage, setResponseMessage] = useState<string>("");
	const [responseStatus, setResponseStatus] = useState(null);
	const pathname = usePathname();
	const router = useRouter();

	const closeModal = () => setIsModalOpen(false);

	const setResponse = (loadingState=false, status=null, message="") => {
		setIsLoading(loadingState);
		setResponseStatus(status);
		setResponseMessage(message);
	} 

	function claimButtonAction() {
		if(pathname === "/")
			router.push("/claim-now")

		if(pathname === "/claim-now")
			isConnected && claimToken();
	}

	function claimToken() {
		// Open modal
		setIsModalOpen(true);
		
		claim(setResponse);
	}


	const { chain } = useNetwork();


	useEffect(() => {
	  if (isConnected && chain?.id != 280) {
		(async function () {
		  await switchNetwork({
			chainId: 280,
		  });
		})();
	  }
	}, [chain, isConnected]);
  

	return (
		<>
			<section className={`claimables mx-auto bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 mb-3 sm:mb-16 py-6 xs:py-6 px-3 xs:px-5 sm:px-10 bg-gradient-to-t from-secondary-tint-100 to-secondary-tint-300 rounded-[10px] ${size === "full" ? "" : "w-full md:w-[92%]"} ${styles}`}>
				<header className="header space-y-1">
					<Headline 
						headerText="Total Claimables"
						color="from-secondary-shade-100 to-primary-tint-100"
						size="medium"
					/>
					<p className="font-bold inline-block text-[0.8rem] sm:text-[.92rem] bg-gradient-to-t from-secondary-shade-200 to-primary-shade-200 text-white py-2 px-3 rounded-[1.2rem]">20,000,000,000,000</p>
				</header>

				{/* Content */}
				<div className="content w-[98%] sm:w-[70%] md:w-[55%] mt-6 sm:mt-8 mb-6 sm:mb-[2.5rem] mx-auto bg-gradient-to-t from-secondary-shade-200 to-primary-shade-200 text-white py-5 px-3 xs:p-5 rounded-md space-y-3 sm:space-y-5 grid grid-rows-[max-content,1fr]">
					<h6 className='text-sm font-medium'>Claim countdown</h6>

					{/* Countdown */}
					<ClaimsCountDown timeStamp={timeStamp} />
				</div>

				<Button 
					variant="primary" 
					className="mx-auto block"
					onClick={claimButtonAction}
					disabled={hasClaimTimestampElapsed}
				>
					Claim now
				</Button>
			</section>

			{isModalOpen ? (
				<ClaimsModal 
					closeModal={closeModal}
					loadingState={isLoading}
					status={responseStatus}
					message={responseMessage}
				/>
			) : null}
		</>
	)
}

export default Claimables;