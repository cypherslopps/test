import React, { FC } from 'react';
import { motion } from 'framer-motion';

interface HeadlineProps {
	color?: string;
	styles?: string;
	headline?: string;
	headlineStyles?: string;
	headerStyles?: string;
	headerText: string; 
	size?: "normal" | "medium";
}

const Headline: FC<HeadlineProps> = ({ headline, headerText, headlineStyles, headerStyles, styles, size="normal" }) => {
	return (
		<header className={`flex flex-col gap-y-0.5 md:gap-y-0 ${styles ? styles : ""} font-geologica`}>
			{headline ? (
				<motion.span 
					initial={{ y: 500, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: true, amount: 1 }}
					transition={{
						type: "spring",
						delay: .4,
						duration: .3
					}}
					className={`bg-gradient-to-r uppercase font-extrabold text-transparent bg-clip-text text-base md:text-[.93rem] xl:text-[.91rem] ${headlineStyles ? headlineStyles : ""}`}
				>
					{headline}
				</motion.span> 
			): null}
			<motion.h3 
				initial={{ y: 10, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				viewport={{ once: true, amount: 1 }}
				transition={{
					type: "spring",
					delay: .5,
					duration: .3
				}}
				className={`font-bold text-white font-sans text-[1.82rem] leading-[1.2] sm:text-[2.2rem] sm:leading-snug md:leading-[1.16] ${size === "medium" ? "lg:text-[2rem]" : "md:text-[2rem] lg:text-[2.2rem] xl:text-[2.4rem]"} capitalize ${headerStyles ? headerStyles : ""}`}
			>
				{headerText}
			</motion.h3>
		</header>
	);
}

export default Headline;