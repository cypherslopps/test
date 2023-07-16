import DashboardSidebar from "@/app/components/dashboard-sidebar/dashboard-sidebar";
import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import NoMatchImage from "@/public/svg/404.svg";

interface NotFoundProps {
    
}
 
const NotFound: FC<NotFoundProps> = (props) => {
    return (
        <main className='grid md-md:grid-cols-[max-content,1fr] gap-x-9'>
            <DashboardSidebar />

            <section className="flex flex-col gap-y-3 items-center mt-20 sm:mt-16 md:mt-14">
                <Image 
                    src={NoMatchImage}
                    alt="404 image"
                    className="w-[6.5rem] h-[6.5rem] xxs:w-24 xxs:h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36"
                />
                
                <div className="space-y-1 text-center">
                    <h1 className="text-[1.3rem] xs:text-2xl sm:text-3xl font-extrabold">Proposal not found</h1>
                    <p className="text-[.94rem] xs:text-[1.06rem] sm:text-base text-white/95">{"If you're unsure of the proposal please go to"} <Link href="/dashboard/proposals" className="underline text-tertiary-700">Proposals</Link> page</p>
                </div>
            </section>
        </main>
    );
}
 
export default NotFound;