import React from 'react';
import Image from 'next/image';
import { companySocials, footerNavigationLinks } from '@/app/lib/constants';
import Favicon from '@/public/images/favicon.png';
import FooterNavigationItem from './footer-navigation-item';
import SocialLink from '../social-link/social-link';

const Footer = () => {
  return (
    <footer className='flex justify-center pt-6 sm:pt-10 md:pt-14 pb-[32px]'>
      <div className="wrapper w-[97%] phone-sm:w-11/12 lg:w-4/5 p-3 space-y-14">
        <div className='flex flex-col gap-y-8 sm-lg:gap-y-0 sm-lg:flex-row sm-lg:justify-between'>
          <div className='logo x space-y-3 sm-lg:space-y-4'>
            <Image 
              src={Favicon}
              alt="app logo"
              width={120}
              height={34}
              priority
            />

            <h4 className='text-[.94rem] sm-lg:text-base lg:text-[1.03rem] font-medium'>Tokenizing the future</h4>
          </div>

          {/* Links */}
          <div className='links grid grid-cols-2 gap-y-6 phone-sm:gap-y-0 phone-sm:grid-cols-3 phone-sm:gap-x-8 phone-sm:justify-items-center sm:gap-x-16  sm:justify-items-start sm-lg:grid-cols-[repeat(3,max-content)] sm-lg:gap-x-12 md-lg:gap-x-16 lg:gap-x-20'>
            {footerNavigationLinks.map(linkItem => (
              <FooterNavigationItem 
                key={linkItem.heading}
                {...linkItem}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className='flex flex-col gap-y-3 phone-sm:gap-y-0 phone-sm:items-center phone-sm:justify-between phone-sm:flex-row footer-bottom border-t border-border pt-2 phone-sm:pt-4 md:pt-6'>
          <span className='text-sm phone-sm:text-[.92rem] md:text-base text-[#98A2B3]'>© 2023 Nebula. All rights reserved.</span>
              
          {/* Footer links */}
          <ul className='flex gap-x-4 phone-sm:gap-x-6 md:gap-x-5 lg:gap-x-4'>
            {companySocials.map(social => (
              <SocialLink 
                key={social.title}
                {...social}
              />
            ))}
          </ul>
        </footer>
      </div>
    </footer>
  )
}

export default Footer