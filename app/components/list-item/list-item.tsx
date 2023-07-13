'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ListItemProps } from '@/typings';
import Button from '../button/button';
import Cube from '@/public/images/cube.png';

type Props = {
    list: ListItemProps,
    variant: "light" | "dark"
}

const ListItem = ({ list: { title, content, readMoreRoute, button, isLinkActive }, variant }: Props) => {
    const router = useRouter();

    return (
        <div className='flex  mx-auto w-11/12 sm:w-5/6 md:mx-0 md:w-full gap-x-2 sm:gap-x-4 lg:gap-x-5'>
            <Image 
                src={Cube}
                alt="content-disc"
                width={45}
                height={40}
                className='w-8 xxs:w-[2.2rem] mt-1 xs:mt-0 xs:w-[2.5rem] sm:w-[2.3rem] md:w-[2.5rem] lg:w-max self-start'
            />

            <div className={`flex flex-col gap-y-1 ${variant === "light" ? "text-white" : "text-black"}`}>
                <h5 className='text-base sm:text-[1.03rem] md:text-base lg:text-[1.05rem] font-semibold'>{title}</h5>
                <p className="text-[.89rem] leading-relaxed sm:text-[.9rem] md:text-[.92rem] lg:text-[.94rem] opacity-90">{content}</p>
                
                {/* Show active links if isLinkActive is true */}
                {isLinkActive ? (
                    <>
                        <Button
                            role="info"
                            variant='text-primary'
                            className='mt-2 ss:px-0 lg:px-0'
                            onClick={() => router.push(readMoreRoute ?? "")}
                        >Learn more...</Button>

                        <Button
                            role="button"
                            variant='primary'
                            className="mt-4 sm:mt-6 md:mt-8"
                            onClick={() => router.push(button?.route ?? "")}
                        >{button?.title ?? ""}</Button>
                    </>
                ) : null}
            </div>
        </div>
    )
}

export default ListItem