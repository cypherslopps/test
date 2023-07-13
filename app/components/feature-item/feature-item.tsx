import React from 'react';
import { FeatureProps } from '@/typings';
import Image from 'next/image';


const FeatureItem = ({ icon, title, content }: FeatureProps) => {
  return (
    <div className='bg-feature border border-[#0480C3] rounded-[24px] py-5 px-5 xs:py-8 xs:px-8 phone-sm:px-16 sm:py-5 sm:px-3 md:py-7 md:px-2 lg:py-10 lg:px-1 flex flex-col items-center gap-y-3 md:gap-y-2 lg:gap-y-3 text-center'>
        <Image 
          src={icon} 
          alt="image" 
          className='mb-2 sm:mb-0 md:mb-3 h-12 w-12 xs:w-14 xs:h-14 text-[#0480C3]' 
        />
        <h4 className='text-[1.16rem] xs:text-lg phone-sm:text-xl sm:text-lg md:text-xl md-xl:text-[1.3rem] lg:text-xl font-bold'>{title}</h4>
        <p className='text-[.9rem] xs:text-[.92rem] phone-sm:text-[.95rem] leading-relaxed sm:text-[.9rem] sm:px-2 -mt-2 md:mt-0 md:text-[.94rem] md:px-6 lg:text-[.96rem] lg:px-[2.4rem] opacity-95'>{content}</p>
    </div>
  )
}

export default FeatureItem