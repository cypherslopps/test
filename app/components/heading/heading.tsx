import React from 'react'

type Props = {
    heading: string;
    subHeading?: string;
    variant?: "light" | "dark",
    styles?: string,
    removeContentPadding?: boolean
}

const Heading = ({ heading, subHeading, variant="dark", styles, removeContentPadding }: Props) => {
  return (
    <header className={`${variant === "light" ? "text-white" : "text-black"} ${styles ?? ""} space-y-1 phone-sm:space-y-2 text-center w-[95%] xs:w-3/4 sm:w-[67%] mx-auto md:mx-0 md:w-full md:text-left`}>
        <h1 className='text-[1.45rem] xs:text-[1.4rem] phone-sm:text-[1.5rem] sm:text-[1.65rem] md:text-3xl lg:text-4xl font-bold'>{heading}</h1>
       {subHeading ? (
            <p className={`text-[.91rem] xs:text-[.92rem] sm:text-[.95rem] ${removeContentPadding ? "" : "sm:pr-2 md:pr-4 lg:pr-6"} md:text-[.94rem] lg:text-[.963rem] leading-[1.58]`}>{subHeading}</p>
        ) : null}
    </header>
  )
}

export default Heading