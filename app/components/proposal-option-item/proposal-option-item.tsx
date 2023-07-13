import { ProposalOption } from '@/typings';
import React from 'react'

const ProposalOptionItem = ({ percentage, title, stat }: ProposalOption) => {
  return (
    <article className="h-[2.3rem] sm:h-[2.6rem] md:h-[2.35rem] flex items-center justify-between relative z-10">
        <div className="bg-[#113E53] h-full absolute top-0 left-0 -z-[5] rounded-[.37rem] py-2" style={{ width: percentage }} />
        <div className='flex items-center gap-x-2 px-3'>
            <p className='text-[.94rem] sm:text-base md:text-[.94rem]'>{title}</p>
            <span className='text-[.82rem] sm:text-sm md:text-[.85rem] font-syne text-[#7e8083] font-medium'>{stat}</span>
        </div> 
        <span className='text-sm sm:text-base md:text-[.96rem]'>{percentage}</span>
    </article>
  )
}

export default ProposalOptionItem