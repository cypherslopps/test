import React from 'react'

const OptionList = ({ list }: { list: string[] }) => {
  return (
    <ul className="options-item my-6 pl-4 space-y-2">
        {list.map((option, index) => (
            <li 
                key={option+index} 
                className="text-[.89rem] bg-gradient-to-r from-tertiary-900 to-primary-shade-300 before:block before:absolute before:w-2 before:h-2 before:bg-gradient-to-r before:from-tertiary-900 before:to-primary-shade-300 before:rounded-full before:left-[4%] xs:before:left-[3.7%] md:before:left-[8.4%] md-lg:before:left-[4.5%] lg:before:left-[8.4%] before:translate-y-[6.5px] text-transparent bg-clip-text"
            >
                {option}
            </li>
        ))}
    </ul>
  )
}

export default OptionList