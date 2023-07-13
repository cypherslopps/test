'use client';

import React from 'react';
import { useProposal } from '@/app/providers/proposals-provider';
import draftToHtml from 'draftjs-to-html';
import { useRouter } from 'next/navigation';
import PreviousButton from '@/app/components/previous-button/previous-button';
import NotificationBox from '@/app/components/notification-box/notification-box';
import Button from '@/app/components/button/button';
import { capitalizeFirstLetter } from '@/app/lib/utils';
import CustomConnectKit from '@/app/components/connectkit-custom-button/connectkit-custom-button';
import { useAccount } from 'wagmi';
import toast from 'react-hot-toast';


function ProposalPreview() {
  const router = useRouter();
  const { isConnected } = useAccount();
  const { newProposal } = useProposal();
  const body = draftToHtml(newProposal?.description);

  function submitProposal() {
    const isValid: boolean = Object.values(newProposal).every(value => Boolean(value));

    if(isValid) {
      try {
        console.log("submit proposal");
      } catch(error) {
        console.log(error)
      }
    } else {
      setTimeout(() => toast.error("Add a proposal"), 500);
    }  
  }

  return (
    <main className='grid md-md:grid-cols-[1fr,max-content] md-md:gap-x-6 lg:gap-x-9'>
      <section className='flex flex-col gap-y-8'>
        <PreviousButton />
        <NotificationBox type="warning" />

        {/* Proposal content */}
        <div className='proposal-content space-y-4'>
          <h1 className='text-[1.75rem] leading-9 font-semibold'>{(newProposal?.title && capitalizeFirstLetter(newProposal.title)) ?? "Untitled"}</h1>
          <div className='text-base text-white/95' dangerouslySetInnerHTML={{ __html: body }} />
        </div>
      </section>

      {/* Aside */}
      <aside className='hidden md-md:inline-block w-22vw lg:w-20vw h-fit py-6 px-[.97rem] space-y-4 sticky top-16 lg:top-24 left-0'>
        <Button
            role="edit"
            variant="border"
            className="w-full rounded-full"
            onClick={() => router.push(`/dashboard/proposals/${newProposal.slug}/edit`)}
        >
            Edit
        </Button>

        {!isConnected ? (
            <CustomConnectKit 
                variant="accent" 
                className="w-full ss:py-3 rounded-full" 
            />
        ) : (
            <Button
                type="submit"
                role="preview proposal button"
                variant="accent"
                className="w-full ss:py-3 rounded-full"
                onClick={submitProposal}
            >
                Submit proposal
            </Button>
        )}
      </aside>
    </main>
  )
}

export default ProposalPreview;