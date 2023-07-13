"use client";

import { FC, useEffect, useState } from "react";
import FormSearch from "../form-search/form-search";
import { proposals, proposalsTabTypes } from "@/app/lib/constants";
import ProposalItem from "../proposal-item/proposal-item";
import Button from "../button/button";
import { cn } from "@/app/lib/utils";
import { Proposals } from "@/typings";
import { useRouter } from "next/navigation";

interface ProposalCollectionProps {
 styles?: string,
 showButton?: boolean,
 type?: "dashboard"
 tabs?: boolean
}
 
const ProposalCollection: FC<ProposalCollectionProps> = ({ styles, showButton, tabs, type }) => {
  const router = useRouter();
  const [tabValue, setTabValue] = useState<string | any>("personal_proposals");
  const [proposalDataType, setProposalDataType] = useState<Proposals[] | []>([]);

  useEffect(() => {
    let data: Proposals[] = [];
    const proposalTabValue: Proposals[] = tabValue === "personal_proposals" ? proposals.personal_proposals : proposals.joined_proposals;

    if(type === "dashboard")
      data = proposalTabValue.filter((_: any, index: any) => index <= 1);
    else 
      data = proposalTabValue;
      
    setProposalDataType(data);
  }, [tabValue, type]);

  return (
      <section className={cn(
          "sm:px-2 md:px-4 md-md:px-0 space-y-4",
          styles
      )}>
        <div className='space-y-5'>
          <header className='flex gap-y-3 flex-col xs:gap-y-0 xs:flex-row xs:justify-between xs:items-center'>
            {tabs ? (
              <ul className="tabs flex items-center gap-x-3">
                {proposalsTabTypes.map(({ type, title }) => (
                  <li 
                    className={`${type === tabValue ? "text-tertiary-700 border-b border-tertiary-700 font-bold" : ""} cursor-pointer transition-colors duration-200 text-[.95rem] xs:text-[.98rem] sm:text-base md:text-[.96rem] lg:text-[1.04rem]`} 
                    onClick={() => setTabValue(type)}
                    key={title}
                  >
                    {title}
                  </li>
                ))}
              </ul>
            ) : (
              <h3 className='text-lg sm:text-xl font-bold'>Proposals</h3>
            )}
            <FormSearch />
          </header>

          {/* Proposals collection */}
          <div className='space-y-4'> 
            {proposalDataType.map((proposal: Proposals) => (
              <ProposalItem 
                key={proposal.title}
                {...proposal} 
              />
            ))}
          </div>
        </div>

        {showButton && (
          <Button
              role="proposal-view-button"
              variant='primary'
              className='mx-auto mt-2 w-full xs:w-5/6 sm:w-52 py-3 sm:py-2 md:w-max md:mx-0 md:mt-0'
              onClick={() => router.push("/dashboard/proposals")}
          >
              View proposal
          </Button>
      )}
      </section>
  );
}
 
export default ProposalCollection;