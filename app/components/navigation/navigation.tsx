'use client'

import React, { useState, useEffect, useRef, MutableRefObject } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavigationLink from './navigation-link';
import { menuLinks, navigationLinks } from '@/app/lib/constants';
import Favicon from '@/public/images/favicon.png';
import FaviconPhone from "@/public/images/favicon-large.png";
import { MenuIcon } from 'lucide-react';
import Offset from '../offset/offset';
import Dropdown from '../dropdown/dropdown';
import CustomConnectKit from '../connectkit-custom-button/connectkit-custom-button';
import ClientOnly from '../clientOnly/clientOnly';


type Props = {
	showLinks?: boolean;
	scrollPositionProp?: boolean;
	border?: boolean,
	showHamburger?: boolean;
}

const Navigation = ({ showLinks=true, border=false, scrollPositionProp, showHamburger }: Props) => {
	const [isActive, setIsActive] = useState<boolean>(false);
	const [isOffsetOpen, setIsOffsetOpen] = useState<boolean>(false);
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const [scrollPosition, setScrollPosition] = useState<number>(5);
	const menuRef: MutableRefObject<null | any> = useRef(null);
 
	useEffect(() => {
		// Set scroll position
		if(!scrollPositionProp)
			setScrollPosition(70);

		function checkNavScrollPosition(e: Event) {
			const { scrollY } = window;
	
			if(scrollY >= scrollPosition)
				setIsActive(true)
			else
				setIsActive(false);
		}
			

		window.addEventListener("scroll", checkNavScrollPosition);

		return () => {
			window.removeEventListener("scroll", checkNavScrollPosition); 
		}
	}, [scrollPositionProp, scrollPosition]);

	useEffect(() => {
		window.addEventListener("click", onHoverHandler)

		return () => window.removeEventListener("click", onHoverHandler);
	});

	function onHoverHandler(e: Event) {			
		if(isMenuOpen && !menuRef.current.contains(e.target))
			setIsMenuOpen(false);
	}

	return (
		<ClientOnly>
			<nav className={`navigation w-full flex justify-center z-50 fixed top-0 left-0 sm:px-2 sm:py-4 md:py-2.5 py-3.5 ${border ? "border-b border-tertiary-700/40" : ""} ${isActive ? "bg-clip-padding backdrop-filter border-tertiary-shade-900/40 backdrop-blur-xl bg-opacity-60 bg-[linear-gradient(180deg,_#114158 0%,_rgba(17,_65,_88,_0.8)_42.19%,_rgba(17,_65,_88,_0.3)_100%)] md:py-4 md:px-8" : ""}`}>
				<div className="wrapper flex justify-between items-center text-white rounded-lg transition-all duration-300 w-11/12 sm:w-[85%] md:w-10/12">			
					<Link 
						href="/" 
						className={`${isActive ? "w-10 h-10 xxs:w-[7.3rem] xs:ml-0 xs:w-[7.5rem] xs:h-[2.2rem] sm:h-9 sm:w-[6.6rem] md:w-32 md:h-10" : "h-9 w-[2.6rem] xxs:w-[7.3rem] xxs:h-10 md:w-36 md:h-12"} ml-2 xs:ml-0 font-extrabold uppercase`}
						onClick={() => window.scrollTo({
							top: 0,
							behavior: 'smooth',
						})}
					>
						<Image 
							src={Favicon}
							alt="favicon"
							className="hidden xxs:inline-block w-full h-full object-cover"
						/>

						<Image 
							src={FaviconPhone}
							alt="favicon"
							className="inline-block xxs:hidden w-full h-full object-cover"
						/>
					</Link>

					{/* Navigation Actions */}
					<div className='nav-r flex items-center gap-x-4 sm:gap-x-5 md:gap-x-6'>
						{showLinks ? (
							<>

								{/* Navigation Link */}
								<ul className="navigation-items hidden phone:flex items-center gap-x-5 md:gap-x-6">
									{navigationLinks.map(link => (
										<NavigationLink 
											key={link.name}
											{...link}
										/>
									))}
								</ul>
							</>
						) : null}

						{/* Wallet button */}
						<CustomConnectKit variant="primary" />
								
						{/* Dropdown menu */}
						{!showHamburger && (
							<div className='relative' ref={menuRef}>
								<span onClick={() => setIsMenuOpen(prop => !prop)} className='cursor-pointer'>
									<MenuIcon className='w-8 h-8 xs:w-6 xs:h-6 object-cover' 
									/>
								</span>

								{isMenuOpen ? (
									<Dropdown 
										subLinks={menuLinks}
									/>
								) : null}
							</div>
						)} 
						
						{/* Hamburger */}
						{showHamburger && (
							<>
								{/* Hamburger */}
								<span 
									className="md-md:hidden cursor-pointer"
									onClick={() => setIsOffsetOpen(props => !props)}
								>
									<MenuIcon className="text-3xl" />
								</span>
							</>
						)}
					</div>
				</div>
			</nav>
			
			{isOffsetOpen && (
				<Offset closeOffset={() => setIsOffsetOpen(false)} />
			)}
		</ClientOnly>
	)
}

export default Navigation;
