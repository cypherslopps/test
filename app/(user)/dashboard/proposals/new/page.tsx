'use client';


import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { EditorState } from "draft-js";
import toast, { Toaster } from 'react-hot-toast';
import FormInput from '@/app/components/form-input/form-input'
import NotificationBox from '@/app/components/notification-box/notification-box'
import PreviousButton from '@/app/components/previous-button/previous-button'
import Button from '@/app/components/button/button';
import { useProposal } from '@/app/providers/proposals-provider';
import { slugConverter } from '@/app/lib/utils';
import CustomConnectKit from '@/app/components/connectkit-custom-button/connectkit-custom-button';
import { useAccount } from 'wagmi';

const Editor = dynamic(() => import("@/app/components/editor/editor"), {
    ssr: false
}); 

function NewProposal() {
    const { setNewProposal } = useProposal();
    const router = useRouter();
    const [proposal, setProposal] = useState({
        title: "",
        slug: "",
        description: "",
        discussion: ""
    });
    const [isArticleUpdated, setIsArticleUpdated] = useState(false);
    const [titleError, setTitleError] = useState<string>("");
    const [discussionError, setDiscussionError] = useState<string>("");
    const [descriptionError, setDescriptionError] = useState<string>("");
    const { isConnected } = useAccount();

    function handleChange(e: any) {
        const { name, value } = e.target;
        
        setProposal({
            ...proposal,
            [name]: value
        })
    }

    function handleEditorChange(content: any) {
        setProposal({
            ...proposal,
            description: content
        });
        setIsArticleUpdated(true);
    }

    function fillSlug({ target: { value }}: { target: { value: any } }) {
        const slug = slugConverter(value);

        setProposal({
            ...proposal,
            slug
        })
    }
 
    function previewProposal() {
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

    console.log(proposal, "proposal")

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
                            value={proposal.title}
                            onChange={handleChange}
                            onKeyup={fillSlug}
                            variant="default"
                            error={titleError}
                            required
                        />

                        <Editor 
                            label="Description"
                            handleEditorChange={handleEditorChange} 
                            error={descriptionError}
                        />

                        <FormInput 
                            type="text"
                            name="discussion"
                            label="discussion"
                            placeholder="https://forum.balancer.fi/proposal"
                            value={proposal.discussion}
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

export default NewProposal