"use client";

import { FC, useState, useEffect } from "react";
import Button from "../button/button";
import Image from "next/image";
import { useAccount } from "wagmi";
import CustomConnectKit from "../connectkit-custom-button/connectkit-custom-button";
import CountDown from "../countdown/countdown";
import Favicon from '@/public/images/favicon-large.png';
import ArrowDown from "@/public/svg/triple-arrow.svg";
import ZkSyncLogo from '@/public/images/zksync_favicon.png'
import InfoIcon from '@/public/svg/info.svg';
import ClientOnly from "../clientOnly/clientOnly";


interface StakeProps {
    type: "stake" | "unstake"
}
 
const Stake: FC<StakeProps> = ({ type }) => {
    const [tokenTotalAmount, setTokenTotalAmount] = useState<string>("0.00");
    const [stakeAmountInputValue, setStakeAmountInputValue] = useState<string>("0.00");
    const [stakeAmountInputValueInUSDT, setStakeAmountInputValueInUSDT] = useState<string>("0.00");
    const [stakeMaxLoadingState, setStakeMaxLoadingState] = useState<boolean>(false);
    const [stakeAmount, setStakeAmount] = useState<string>("0.00");
    const [stakeAmountInZkSync, setStakeAmountInZkSync] = useState<string>("0.00");
    const [stakeAmountInUSDT, setStakeAmountInUSDT] = useState<string>("0.00");
    const [currentZkSyncValue, setCurrentZkSyncValue] = useState<string>("1.0324635435");
    const [stakeTokenLoadingState, setStakeTakenLoadingState] = useState<boolean>(false);
    const { isConnected } = useAccount();

    let stakeButton;
    const stakeButtonStyles = "w-full py-2 xs:py-3 sm:py-4";

    function stakeToken() {
        console.log("staking token")
    }

    function unStakeToken() {
        console.log("staking token")
    }

    const addAllToken = () => {
        setStakeMaxLoadingState(true);

        try {   
            console.log("staking max");

            // Stake token 
            setStakeAmountInputValue(tokenTotalAmount);

            // Update total token amount
            setTokenTotalAmount("0.00");
        } catch (e) {
            console.log(e)
        } finally {
            setTimeout(() => setStakeMaxLoadingState(false), 3500);
        }
    }

    if(!isConnected)
        stakeButton = (
            <CustomConnectKit className={stakeButtonStyles} />
        );
    else if(type === "stake") 
        stakeButton = (
            <Button 
                role={`${type} button`} 
                variant="primary"
                isLoading={stakeTokenLoadingState} 
                onClick={stakeToken}
                className={stakeButtonStyles}
            >
                Stake token
            </Button>
        );
    else 
        stakeButton = (
            <Button 
                role={`${type} button`} 
                variant="primary"
                isLoading={stakeTokenLoadingState} 
                onClick={unStakeToken}
                className={stakeButtonStyles}
            >
                Unstake token
            </Button>
        );

    return (
        <ClientOnly>
            <div className="pt-1.5 sm:pt-3 grid gap-y-5 xxs:gap-y-6 sm:gap-y-8">
                {/* Stake header */}
                <header className="flex justify-between items-center">
                    <h4 className="text-base sm:text-[1.05rem] md:text-[.94rem]">{type === "stake" ? "Stake" : "Unstake"}</h4>
                    <span className="text-[.88rem] xxs:text-[.92rem] md:text-sm font-medium">{tokenTotalAmount} Nebula</span>
                </header> 

                {/* Staking Form */}
                <div className="flex justify-between items-center h-14 px-3 sm:h-16 sm:px-5 rounded-xl bg-[#2874e71a] backdrop-blur-lg">
                    {/* Stake amount form */}
                    <form className="flex items-center sm:gap-x-1">
                        <Image 
                            src={Favicon}
                            alt="nebula icon"
                            width={28}
                            height={28}
                            className="object-cover"
                            priority
                        />
                        <input 
                            type="number" 
                            name="stakeAmountInputValue" 
                            value={stakeAmountInputValue} 
                            className="form-input border-none focus:outline-none bg-transparent w-[7rem] h-4 text-base xxs:text-lg sm:text-xl font-medium focus:ring-0 indent-2 px-0 py-2"
                            onChange={({ target }) => setStakeAmountInputValue(target.value)} 
                        />
                    </form>

                    {/* Stake info */}
                    <div className="flex items-center gap-x-2 sm:gap-x-4">
                        <p className="text-[0.76rem] xxs:text-[.93rem] sm:text-[.96rem]">&asymp; ${stakeAmountInputValueInUSDT} USD</p>
                        <Button 
                            isLoading={stakeMaxLoadingState}
                            variant="action"
                            className="py-[.102rem] px-[.5rem] xxs:py-[.2rem] xxs:px-[.7rem] sm:py-1 lg:px-3 lg:py-[.146rem]"
                            onClick={addAllToken}
                        >Max</Button>
                    </div>
                </div>

                {/* Stake Info */}
                <div className="flex flex-col items-center mt-2 gap-0 sm:gap-2">
                    <Image 
                        src={ArrowDown}
                        alt="arrow down icon"
                        width={40}
                        height={40}
                        className="w-5 h-9 xxs:w-8 xxs:h-12 sm:w-max object-cover"
                        priority
                    />
                    <h6 className="text-base xxs:text-[1.1rem] sm:text-base">Total stake</h6>
                    <div className="flex flex-col items-center gap-x-4 gap-y-1 sm:gap-y-2">
                        <div className="flex items-center gap-x-3">
                            <Image 
                                src={ZkSyncLogo}
                                alt="zksync favicon"
                                width={25}
                                height={25}
                                className="-ml-10 w-6 h-3 xxs:w-8 xxs:h-4 sm:w-max object-cover"
                                priority
                            />

                            <h1 className="text-[2.3rem] xxs:text-4xl xs:text-5xl sm:text-6xl font-extrabold">{stakeAmount}</h1>
                        </div>

                        {/* Stake data */}
                        <div className="flex items-center gap-x-2 text-[.82rem] xs:text-sm">
                            <p className="text-white/95">Your stake:</p>
                            <span className="text-tertiary-shade-900">{stakeAmountInZkSync} zkSync</span>
                            <span className="ml-3 text-white/70">&asymp; ${stakeAmountInUSDT}</span>
                        </div>
                    </div>
                </div>

                <hr className="border-white/20 my-2" />

                {/* Stake Data Info */}
                <ul className="flex flex-col gap-3">
                    <li className="flex flex-col gap-1 items-start xs:gap-0 xs:flex-row xs:items-center xs:justify-between">
                        <span className="text-sm sm:text-[.92rem] font-medium">Exchange Rate</span>
                        <span className="text-[.76rem] sm:text-[.81rem] text-white/90">1 Nebula = {currentZkSyncValue} zkSync</span>
                    </li>
                    {type === "stake" && (
                        <li className="flex flex-col gap-1 items-start xs:gap-0 xs:flex-row xs:items-center xs:justify-between">
                            <span className="text-sm sm:text-[.92rem] font-medium">Lock Duration</span>
                            <CountDown timestamp={new Date("Jul 23, 2023")} className="bg-accent-shade-800 text-black text-[.76rem] sm:text-[.81rem] px-1.5 py-0.5 rounded-[.13rem] font-normal" />
                        </li>
                    )}
                    <span className="flex items-center gap-x-2 mt-2 sm:mt-4 mb-1">
                        <Image 
                            src={InfoIcon}
                            alt="info icon"
                            width={15}
                            height={15}
                        />

                        <span className="text-tertiary-shade-900 text-xs sm:text-[.78rem]">You need to have at least 4 additional zkSync to complete the transaction.</span>
                    </span>
                </ul>

                {/* Stake Button */}
                {stakeButton}
            </div>
        </ClientOnly>
    );
}
 
export default Stake;