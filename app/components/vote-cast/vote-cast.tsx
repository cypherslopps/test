"use client";

import { useState } from "react";
import Image from "next/image";
import { voteOptions } from "@/app/lib/constants";
import Button from "../button/button";
import { CheckCheck, Check } from "lucide-react";
import CheckIcon from "@/public/svg/check.svg"

 
const VoteCast = () => {
    const [selectedOption, setSelectedOption] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const castVote = async () => {
        setIsLoading(true);

        try {
            console.log("vote casted")
        } catch(e) {    
            console.log(e, "error")
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section className="rounded-[12px] border border-tertiary-700/40">
            <header className='py-3 px-5 sm:py-4 md:p-5 flex justify-between border-b border-tertiary-700/40'>
                <h4 className='font-semibold text-lg'>Votes</h4>
            </header>

            {/* Vote Options */}
            <ul className="flex flex-col gap-y-3 py-4 px-3 xs:p-4 md:p-6">
                {voteOptions.map(option => (
                    <li 
                        key={option}
                        className="rounded-full flex items-center justify-between gap-x-2 py-2 px-4 xs:p-2 sm:py-3 xs:px-6 md-md:py-3 md:px-5 border border-tertiary-700/40 text-center text-[.91rem] xs:text-[.93rem] transition-transform duration-500 hover:bg-tertiary-700/10 cursor-pointer hover:scale-[1.005] overflow-hidden"
                        onClick={() => setSelectedOption(option)}
                    >
                        {option}
                        {(selectedOption === option) && (
                            <Image 
                                src={CheckIcon}
                                alt="check"
                                className="w-6 h-6" 
                            />
                        )}
                    </li>
                ))}
                <Button
                    variant="primary"
                    className="w-full rounded-full py-3 xs:py-2 sm:py-3"
                    size="lg"
                    isLoading={isLoading}
                    onClick={castVote}
                >
                    Vote
                    <CheckCheck className="w-5 h-5 ml-1" />
                </Button>
            </ul>
        </section>
    );
}
 
export default VoteCast;