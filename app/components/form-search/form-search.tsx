'use client';

import { FormEvent, useState } from 'react';
import FormInput from '@/app/components/form-input/form-input';
import { IoArrowDown, IoSearchOutline } from 'react-icons/io5';

const FormSearch = () => {
    const [query, setQuery] = useState<string>("");
    const [queryCategory, setQueryCategory] = useState<string>("");
    const [queryError, setQueryError] = useState<string>("");

    function searchProposal(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if(!query)
            setQueryError("Add a search query");
        else {
            setQueryError("");
        }
    
        console.log("searching up proposal based on ", queryCategory)
    }

    return (
        <form 
            className='search-box h-9 w-full xs:h-10 xs:w-[47%] sm:h-11 md:h-10 lg:h-11 sm:w-max md:w-[55%] lg:w-max flex bg-white relative rounded-full'
            onSubmit={searchProposal}
            noValidate    
        >
            <FormInput 
                type="search"
                name="search-proposal"
                placeholder='Search proposal'
                value={query}
                onChange={({ target }) => setQuery(target.value)}
                variant="default"
                styles="rounded-tl-full rounded-bl-full h-full pl-[2.4rem] xs:pl-11 focus:ring-0 hover:shadow-none"
                error={queryError}
                required
            />
            <IoSearchOutline className='absolute top-[25%] left-[.8rem] xs:top-[30%] xs:left-4 text-gray-800 text-base sm:text-[1.2rem] rotate-90' />
            <select 
                className='form-select text-gray-800 w-[28%] xs:w-1/3 sm:w-1/4 h-full px-2.5 xs:px-2 font-inherit bg-transparent outline-none border-none rounded-tr-full rounded-br-full cursor-pointer text-sm ring-0 shadow-none focus:border-none focus:outline-none focus:ring-0'
                value={queryCategory}
                onChange={({ target }) => setQueryCategory(target.value)}
            >
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="closed">Closed</option>
            </select>
        </form>
    );
}
 
export default FormSearch;