import Image from 'next/image'
import React from 'react';
import { User } from '@/typings';
import { truncateWalletAddress } from '@/app/lib/utils';

const Profile = ({ name, address, image }: User) => {
  return (
    <div className='flex profile items-center gap-x-2 relative'>
        <Image 
            src={image}
            alt={name + "-profile"}
            className='w-[1.4rem] xs:w-[1.3rem] sm:w-[1.2rem] md:w-[1.1rem]'
        />
        <p className='text-[.83rem] xs:text-sm sm:text-[.9rem] md:text-[.92rem] lg:text-[.94rem] text-white/90'>{name ?? (address && truncateWalletAddress(address))}</p>
    </div>
  )
}

export default Profile