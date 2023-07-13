import Link from 'next/link'
import React from 'react';
import { FooterLinks } from '@/typings';

const FooterNavigationItem = ({ heading, links }: FooterLinks) => {
  return (
    <nav className='footer-nav space-y-2 sm:space-y-3'>
        <h5 className='text-tertiary-900 text-[.9rem] lg:text-sm capitalize font-extrabold'>{heading}</h5>

        <ul className='flex flex-col gap-y-1 sm:gap-y-2'>
            {links.map(({ name, route }) => (
                <li key={name}>
                    <Link 
                        href={name === "support" ? `mailto:${route}` : route}
                        className='capitalize text-[.92rem] sm:text-[.97rem] lg:text-base'
                    >{name}</Link>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default FooterNavigationItem