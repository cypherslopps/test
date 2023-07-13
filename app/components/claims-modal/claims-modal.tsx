"use client";

import React, { FC } from 'react';
import { Triangle } from  'react-loader-spinner';
import { motion } from 'framer-motion';
import Modal from '../modal/modal';
import { IoClose } from 'react-icons/io5';

interface ClaimsModalProps {
    loadingState: boolean;
    status: any;
    message: string;
    closeModal: () => void
}

const ClaimsModal: FC<ClaimsModalProps> = ({ loadingState, closeModal, status, message }) => {
    let modalStatusIcon = null;
    const messageLimit = 30;

    if(status === "success") {
        modalStatusIcon = (
            <motion.svg 
                initial={{ pathLength: 0, scale: 0 }} 
                animate={{ pathLength: 1, scale: 1 }} 
                transition={{ delay: .5, duration: .25 }}
                className="w-28 h-28" 
                version="1.1" 
                id="Capa_1" 
                xmlns="http://www.w3.org/2000/motion.svg" 
                viewBox="0 0 50 50"
            >
                <circle style={{ fill: "#25AE88" }} cx="25" cy="25" r="25"/>
                <polyline 
                    style={{
                        fill: "none",
                        stroke: "#ffffff",
                        strokeWidth: 2,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeMiterlimit: "10",
                    }} 
                    points="38,15 22,33 12,25 "/>
            </motion.svg>
        )
    } else if(status === "error") {
        modalStatusIcon = (
            <motion.svg 
                initial={{ pathLength: 0, scale: 0 }} 
                animate={{ pathLength: 1, scale: 1 }} 
                transition={{ delay: .5, duration: .25 }}
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                className="w-28 h-28"
                fill="#FA5252" 
            >
                <path 
                    fillRule="evenodd" 
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" 
                    clipRule="evenodd" 
                />
            </motion.svg>

        )
    }    

    return (
        <Modal>
            <div className="fixed top-0 left-0 w-full h-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 bg-black/20 flex items-start justify-center pt-32 z-30">
            {/* Modal content container */}
                <div className='h-[45vh] xs:h-[58vh] rounded-lg shadow-lg relative w-11/12 xs:w-[70%] sm:w-2/3 md:w-1/2 lg:w-2/5 bg-white animate-modal'>
                    <div className='flex flex-col py-4 px-5 rounded-2 h-full'>
                        <span 
                            onClick={closeModal}
                            className='absolute top-[.8rem] right-4 cursor-pointer'
                        >
                            <IoClose className='text-2xl sm:text-3xl text-black' />
                        </span>

                        {loadingState ? (
                            <Triangle
                                height="60"
                                width="60"
                                color="#2874E7"
                                ariaLabel="triangle-loading"
                                visible={true}
                                wrapperClass='h-full justify-center items-center'
                            />
                        ) : (
                            <div className='h-full flex flex-col items-center justify-center gap-5'>
                                {modalStatusIcon}
                                <motion.p 
                                    initial={{ y: 10, opacity: 0 }} 
                                    animate={{ y: 0, opacity: 1 }} 
                                    transition={{ delay: 1.5, duration: .02 }}  
                                    className={`${message.length > messageLimit ? "truncate" : ""} text-[1.1rem] sm:text-lg md:text-xl text-gray-800`}
                                    style={{ width: message.length > messageLimit ? "85%" : ""  }}
                                >{message}</motion.p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default ClaimsModal