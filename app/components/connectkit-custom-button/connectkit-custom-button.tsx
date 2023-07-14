"use client";

import { ConnectKitButton } from "connectkit";
import Button from "../button/button";
import Image from "next/image";
import Avatar from "@/public/images/avatar.png";
import { FC } from "react";
import ClientOnly from "../clientOnly/clientOnly";

interface CustomConnectKitProps {
    variant?: any;
    className?: string;
}

const CustomConnectKit: FC<CustomConnectKitProps> = ({ variant="primary", className }) => {
  return (
    <ClientOnly>
        <ConnectKitButton.Custom>
        {({ isConnected, isConnecting, show, truncatedAddress, ensName, chain }) => {
            return (
            <Button onClick={show} variant={variant ?? "primary"} className={`${className ?? "rounded-[10rem]"}`}>
                {isConnected ? (
                    <div style={{
                        whiteSpace: "nowrap", 
                        width: "fit-content", 
                        position: "relative", 
                    }}>
                        <div 
                            className="flex items-center gap-x-2"
                            style={{
                                zIndex: 2, 
                                opacity: 1, 
                                transform: "translateX(0.2px) translateZ(0px)"
                        }}>
                            {/* Profile Image */}
                            <>
                                {chain?.network !== "zksync-era-testnet" ? (
                                    <div className="bg-[#ff3644] w-6 h-6 flex justify-center items-center shadow-[inset_0_0_0_1px_rgba(0,0,0,0.02)] rounded-full" style={{opacity: 1}}>
                                        <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.68831 13.5H12.0764C13.1026 13.5 13.7647 12.7197 13.7647 11.763C13.7647 11.4781 13.6985 11.1863 13.5462 10.9149L8.34225 1.37526C8.02445 0.791754 7.45505 0.5 6.88566 0.5C6.31627 0.5 5.73364 0.791754 5.42246 1.37526L0.225108 10.9217C0.0728291 11.1863 0 11.4781 0 11.763C0 12.7197 0.662083 13.5 1.68831 13.5ZM6.88566 8.8048C6.49503 8.8048 6.27655 8.5809 6.26331 8.1738L6.16399 5.0595C6.15075 4.64562 6.44869 4.34708 6.87904 4.34708C7.30278 4.34708 7.61396 4.6524 7.60071 5.06628L7.5014 8.16701C7.48154 8.5809 7.26305 8.8048 6.88566 8.8048ZM6.88566 11.3492C6.44207 11.3492 6.07792 11.0303 6.07792 10.5757C6.07792 10.1211 6.44207 9.80219 6.88566 9.80219C7.32926 9.80219 7.69341 10.1143 7.69341 10.5757C7.69341 11.0371 7.32264 11.3492 6.88566 11.3492Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                ) : (
                                    <div className="w-6 h-6">
                                        <Image 
                                            src={Avatar}
                                            alt="user profile image"
                                            className="w-full h-full object-cover"
                                            priority
                                        />
                                    </div>
                                )}
                            </>

                            <div style={{
                                position: "relative", 
                                paddingRight: "1px"
                            }}>
                                <div className="whitespace-nowrap tracking-[-.5px]" style={{
                                    position: "relative", 
                                    opacity: 1
                                }}
                                >{truncatedAddress}</div>
                            </div>
                        </div>
                    </div>
                ) : "Connect wallet"}
            </Button>
            );
        }}
        </ConnectKitButton.Custom>
    </ClientOnly>
  )
};


export default CustomConnectKit;