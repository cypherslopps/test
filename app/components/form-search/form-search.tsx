'use client';

import { ChangeEvent, FC, useState } from 'react';
import FormInput from '@/app/components/form-input/form-input';
import { IoSearchOutline } from 'react-icons/io5';
import { Proposals } from '@/typings';
import { proposals } from '@/app/lib/constants';
import { flattenObject } from '@/app/lib/utils';

interface FormSearchProps {
    setProposal: (data: Proposals[] | []) => void
}

const FormSearch: FC<FormSearchProps> = ({ setProposal }) => {
    const [query, setQuery] = useState<string>("");
    const [queryCategory, setQueryCategory] = useState<string>("all");
    const [queryError, setQueryError] = useState<string>("");

    function searchProposal(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        const { target: { value }} = e;

        if(!value)
            setQueryError("Add a search query");
        else  {  
            const searchResult = flattenObject(proposals)
                .filter(({ title, status }) => (
                    (queryCategory === "all" ? true : status === queryCategory)
                        &&
                    title.toLowerCase().includes(query.toLowerCase())
                )
            );

            if(searchResult.length) {
                // Set proposal
                setTimeout(() => {
                    setProposal(searchResult);  
                }, 300);
            } else 
                setProposal(flattenObject(proposals));
            
            // Empty query error
            setQueryError("");
        }

        setQuery(value)
    }



    return (
        <form 
            className='search-box h-11 w-full xs:h-10 xs:w-[47%] sm:h-11 md:h-10 lg:h-11 sm:w-max md:w-[55%] lg:w-max flex bg-white relative rounded-full'
            noValidate    
            onSubmit={e => e.preventDefault()}
        >
            <FormInput 
                type="search"
                name="search-proposal"
                placeholder='Search proposal'
                value={query}
                onChange={searchProposal}
                variant="default"
                styles="rounded-tl-full rounded-bl-full h-full pl-[2.4rem] xs:pl-11 focus:ring-0 focus:border-none hover:shadow-none"
                required
            />
            <IoSearchOutline className='absolute top-[35%] xxs:top-[30%] left-[.8rem] xs:top-[30%] xs:left-4 text-gray-800 text-base sm:text-[1.2rem] rotate-90' />
            <select 
                className='form-select text-gray-800 w-[28%] xs:w-1/3 sm:w-1/4 h-full xs:px-2 font-inherit bg-transparent outline-none border-none rounded-tr-full rounded-br-full cursor-pointer text-sm ring-0 shadow-none focus:border-none focus:outline-none focus:ring-0'
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