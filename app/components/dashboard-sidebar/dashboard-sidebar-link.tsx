'use client';

import React, { FC } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Links } from '@/typings';

interface DashboardSidebarLinkProps {
    link: Links,
    onClick?: () => void
}

const DashboardSidebarLink: FC<DashboardSidebarLinkProps> = ({ link: {name, route}, onClick }) => {
    const pathname = usePathname();
    const activeLink = (base?: any) => (pathname === route || (base || null)) ? "w-full text-tertiary-900 font-semibold" : "text-white hover:px-3 hover:bg-tertiary-900/20 md-md:hover:px-0 md-md:hover:bg-transparent md-md:hover:text-tertiary-900";
    let dashboardLink = null;
    const account = "Oxd324g3kesf344343574sf";

    if(name !== "profile")
        dashboardLink = (
            <li key={name}>
                <Link 
                    href={route} 
                    onClick={onClick}
                    className={`w-full block rounded-md md-md:rounded-none md-md:inline-block py-1.5 md-md:py-0 md-md:w-max capitalize text-[.88rem] sm:text-[.9rem] md-md:text-[.92rem] transition-colors duration-300 ${activeLink()}`}
                >
                    {name}
                </Link>
            </li>
        )
    else {
        if(account)
         dashboardLink = (
            <li key={name}>
                <Link 
                    href={route} 
                    onClick={onClick}
                    className={`w-full block rounded-md md-md:rounded-none md-md:inline-block py-1.5 md-md:py-0 md-md:w-max capitalize text-[.88rem] sm:text-[.9rem] md-md:text-[.92rem] transition-colors duration-300 ${activeLink(pathname.includes(route))}`}
                >
                    {name}
                </Link>
            </li>
         );
        else
            dashboardLink = null;
    }
    return (
        <>{dashboardLink}</>
    )
}

export default DashboardSidebarLink