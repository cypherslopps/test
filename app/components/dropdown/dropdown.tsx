import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { IconNode } from 'lucide-react';

interface Links {
    name: string;
    route: string;
    icon: any
}

interface DropdownProps {
    subLinks: Links[]
}

const dropdownVariant = {
    hidden: {
        opacity: 0,
        top: "12rem"
    },
    visible: {
        opacity: 1,
        top: "9rem",
        transition: {
            type: 'spring',
            stiffness: 130,
            ease: "easeInOut", 
            delay: .3, 
            duration: .03
        }
    }
}

const Dropdown: FC<DropdownProps> = ({ subLinks }) => {
	return (
		<AnimatePresence>
			<motion.ul 
	            className="w-[11rem] flex flex-col gap-y-1 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-primary-900/70 bg-gradient-to-t from-[#24789E] to-[#124258] rounded-lg divide-y divide-primary-900/50 absolute -right-[5.9rem] xxs:-right-[6rem] xs:-right-[6.2rem] sm:-right-[8rem] md:-right-[9.3rem] lg:-right-[11.3rem] px-[1.2rem] py-3 shadow-sm z-[500]" 
	            style={{ transform: "translate(-50%, -50%)" }}
	            variants={dropdownVariant}
	            initial="hidden"
	            animate="visible"
	            exit="hidden"
	        >
				{subLinks.map(({ name, route, icon }) => (
					<li 
						key={name}  
						className="pt-4 pb-2 text-sm"
					>
						<Link 
							href={`${route}`} 
							className={`flex items-center gap-x-1.5 ${route ? "" : "opacity-60 cursor-not-allowed"}`}
						>
							<Image 
								src={icon} 
								alt={`${name}-icon`} 
								className="w-4 object-cover"
							/>
							{name}
						</Link>
					</li>
				))}
	        </motion.ul>
	    </AnimatePresence>    
	)
}

export default Dropdown;