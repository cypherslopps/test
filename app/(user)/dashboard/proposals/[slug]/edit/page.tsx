'use client';


import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import { ContentState, convertFromRaw } from 'draft-js';
import FormInput from '@/app/components/form-input/form-input'
import NotificationBox from '@/app/components/notification-box/notification-box'
import PreviousButton from '@/app/components/previous-button/previous-button'
import Button from '@/app/components/button/button';
import { useProposal } from '@/app/providers/proposals-provider';
import Editor from '@/app/components/editor/editor';
import { useAccount } from 'wagmi';
import CustomConnectKit from '@/app/components/connectkit-custom-button/connectkit-custom-button';

type ProposalInputProps = {
    title: string,
    description: ContentState | null,
    images: object,
    discussion: string
}

function EditProposal() {
    const { setNewProposal, newProposal: proposal } = useProposal();
    const router = useRouter();
    const [proposalForm, setProposalForm] = useState<ProposalInputProps>({
        title: "",
        description: null,
        images: {},
        discussion: ""
    });
    const [isArticleUpdated, setIsArticleUpdated] = useState(false);
    const [titleError, setTitleError] = useState<string>("");
    const [discussionError, setDiscussionError] = useState<string>("");
    const [descriptionError, setDescriptionError] = useState<string>("");
    const { isConnected } = useAccount();

    // Set proposal
    useEffect(() => {
        if(proposal) {
            const { title, discussion, description } = proposal;

            setProposalForm({
                ...proposalForm,
                title,
                discussion,
                description: convertFromRaw(description)
            })
        }
    }, [proposal, proposalForm])

    function handleEditorChange(content: any) {
        setProposalForm({
            ...proposal,
            description: content
        });
        setIsArticleUpdated(true);
    }

    function handleChange(e: any) {
        const { name, value } = e.target;
        
        setProposalForm({
            ...proposalForm,
            [name]: value
        })
    }
    function previewProposal() {
        const isValid: boolean = Object.values(proposal).every(value => Boolean(value));
        console.log(isValid, Object.values(proposal).every(value => Boolean(value)), proposal)

        
        if(!isValid) {
            if(!proposalForm.title) 
                setTitleError("Title can't be empty");
            else 
                setTitleError("");

            if(!isArticleUpdated) 
                setDescriptionError("Description can't be empty");
            else 
                setDescriptionError("");

            if(!proposalForm.discussion)
                setDiscussionError("Discussion can't be empty");
            else
                setDiscussionError(""); 

            setTimeout(() => toast.error("Add a proposal"), 500);
        } else {
            try {
                // Set user proposal
                setNewProposal(proposal);

                router.push("/dashboard/proposals/preview");
            } catch(error) {
                console.log(error)
            }
        }    
    }
    
    function submitProposal() {
        const isValid: boolean = Object.values(proposal).every(value => Boolean(value));

        if(!isValid) {
            if(!proposal.title) 
                setTitleError("Title can't be empty");
            else 
                setTitleError("");

            if(!isArticleUpdated) 
                setDescriptionError("Description can't be empty");
            else 
                setDescriptionError("");

            if(!proposal.discussion)
                setDiscussionError("Discussion can't be empty");
            else
                setDiscussionError(""); 

            setTimeout(() => toast.error("Add a proposal"), 500);
        } else {
            try {
                // Set user proposal
                setNewProposal(proposal);

                router.push("/dashboard/proposals/preview");
            } catch(error) {
                console.log(error)
            }
        }  
    } 

    return (
        <>
            <Toaster 
                position="bottom-right"
                reverseOrder={false}
            />

            <main className='grid md-md:grid-cols-[1fr,max-content] md-md:gap-x-4 lg:gap-x-9'>
                <section className='flex flex-col gap-y-4 md:gap-y-6'>
                    <PreviousButton />
                    <NotificationBox type="warning" />

                    {/* Form */}
                    <div className='flex flex-col gap-y-4'>
                        <FormInput 
                            type="text"
                            name="title"
                            label="title"
                            value={proposalForm.title}
                            onChange={handleChange}
                            variant="default"
                            error={titleError}
                            required
                        />

                        <Editor 
                            label="Description"
                            handleEditorChange={handleEditorChange} 
                            value={proposalForm}
                            error={descriptionError}
                        />

                        <FormInput 
                            type="text"
                            name="discussion"
                            label="discussion"
                            placeholder="https://forum.balancer.fi/proposal"
                            value={proposalForm.discussion}
                            onChange={handleChange}
                            variant="default"
                            error={discussionError}
                            required
                        />
                    </div>
                </section>

                {/* Aside */}
                <aside className='w-full sm:w-3/5 sm:mx-auto md-md:mx-0 md-md:w-[25vw] lg:w-23vw h-fit py-6 md-md:px-[.97rem] space-y-2'>
                    <Button
                        type="submit"
                        role="preview proposal button"
                        variant="border"
                        className="w-full ss:py-3 rounded-full text-white"
                        onClick={previewProposal}
                    >
                        Preview
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
        </>
    )
}

export default EditProposal