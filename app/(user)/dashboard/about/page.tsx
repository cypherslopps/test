import DashboardSidebar from "@/app/components/dashboard-sidebar/dashboard-sidebar";
import NotificationBox from "@/app/components/notification-box/notification-box";
import { members } from "@/app/lib/constants";
import Profile from "@/app/components/profile/profile";

const About = () => {
    return (
        <main className='grid md-md:grid-cols-[max-content,1fr] md-md:gap-x-6 lg:gap-x-9'>
            <DashboardSidebar />

            <section className="space-y-10">
                <header className="space-y-4">
                    <h2 className="text-xl font-bold">About</h2>
                    <NotificationBox type="about" />
                </header>

                <section className='votes rounded-[12px] border border-tertiary-700'>
                    <header className='py-3 px-5 sm:py-4 md:p-5 flex items-center border-b border-tertiary-700 gap-x-2'>
                        <h4 className='font-semibold text-lg'>Members</h4>
                        <span className='bg-accent-shade-800 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-black rounded-full px-2 py-[.12rem] text-xs sm:text-sm font-bold flex items-center justify-center'>2</span>
                    </header>

                    <ul className='divide-y divide-tertiary-900'>
                        {members.map(({ user, role }) => (
                        <li key={role} className='flex items-center justify-between py-3 px-5'>
                            <Profile {...user} />
                            <span className='text-xs xs:text-[.92rem] px-2 sm:px-3 py-0.5 sm:text-sm rounded-full bg-tertiary-700 font-medium text-white'>{role}</span>
                        </li>
                        ))}
                    </ul>
                </section>
            </section>
        </main>
    );
}
 
export default About;