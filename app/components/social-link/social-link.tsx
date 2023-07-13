import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Socials } from '@/typings';

const SocialLink = ({ title, href, icon }: Socials) => {
  return (
    <Link key={title} href={href} title={title}>
      <Image 
        src={icon}
        alt={title}
        width={15}
        className='w-6 phone-sm:w-[1.65rem] md:w-[1.5rem] lg:w-[1.55rem]'
      />
    </Link>
  )
}

export default SocialLink