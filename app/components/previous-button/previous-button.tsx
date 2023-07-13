'use client';

import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useRouter } from 'next/navigation';

const PreviousButton = () => {
    const router = useRouter();

    return (
        <span 
            className='w-max flex items-center gap-x-2 text-[.95rem] text-white/80 cursor-pointer py-0.5 px-2 rounded-full transition-colors duration-300 hover:bg-white/10'
            onClick={() => router.back()}
        >
            <IoArrowBack className='text-base' />
            Back
        </span>
    )
}

export default PreviousButton