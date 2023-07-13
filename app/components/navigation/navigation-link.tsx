'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Links } from '@/typings';

const NavigationLink = ({ name, route }: Links) => {
	const [activeLink, setActiveLink] = useState("home");

	return (
		<li>
			<Link 
				href={`${route ? route : ""}`} 
				className={`text-[.92rem] md:text-[.96rem] lg:text-[.92rem] relative flex items-center gap-x-1 transition-colors duration-300 before:block before:absolute before:-bottom-[2px] before:left-0 before:w-full before:h-[2px] before:bg-tertiary-900 ${activeLink === name.toLowerCase() ? "text-tertiary-900" : "before:scale-x-0 before:transition-transform before:duration-300 before:ease-in-out before:origin-left hover:before:scale-x-100 hover:text-tertiary-900"}`}
				onClick={() => setActiveLink(name)}
			>
				{name}
			</Link>
		</li>
	)
}

export default NavigationLink;