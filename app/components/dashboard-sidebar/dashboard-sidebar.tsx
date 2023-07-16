"use client";

import React, { useState } from 'react'
import Button from '../button/button';
import DashboardSidebarLink from './dashboard-sidebar-link';
import { dashboardLinks, companySocials } from '@/app/lib/constants';
import SocialLink from '../social-link/social-link';
import UserProfile from '../user-profile/user-profile';
import DashboardModal from '../dashboard-modal/dashboard-modal';
import ClientOnly from '../clientOnly/clientOnly';
import { useAccount } from 'wagmi';


const DashboardSidebar = () => {  
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { isConnected } = useAccount();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ClientOnly>
      <aside className='hidden md-md:inline-block w-[24vw] lg:w-22vw sticky top-16 lg:top-24 left-0 h-fit border border-tertiary-900/40 rounded-xl p-4 space-y-6 lg:space-y-8'>
        <header className='content flex flex-col items-center gap-y-3'>
          <UserProfile />
          <Button
            role="join button"
            variant="primary"
            className="block w-full"
            disabled={!isConnected}
            onClick={() => isConnected && openModal()}
          >
            Join
          </Button>
        </header>

        {/* Links */}
        <ul className='content flex flex-col sm:gap-y-[.35rem] lg:gap-y-2'>
          {dashboardLinks.map(link => (
            <DashboardSidebarLink 
              key={link.name} 
              link={link} 
            />
          ))}
        </ul>

        {/* Footer */}
        <footer className='footer flex gap-x-5 lg:gap-x-4'>
          {companySocials.map(social => (
            <SocialLink 
              key={social.title}
              {...social}
            />
          ))}
        </footer>
      </aside>

      {/* Modal */}
      {isModalOpen && (
        <DashboardModal closeModal={closeModal} />
      )}
    </ClientOnly>
  )
}

export default DashboardSidebar