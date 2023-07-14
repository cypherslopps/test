import { FC, useState } from "react";
import Portal from "../portals/portals";
import { X } from "lucide-react";
import UserProfile from "../user-profile/user-profile";
import Button from "../button/button";
import { companySocials, dashboardLinks } from "@/app/lib/constants";
import DashboardSidebarLink from "../dashboard-sidebar/dashboard-sidebar-link";
import SocialLink from "../social-link/social-link";
import { motion } from "framer-motion";
import DashboardModal from "../dashboard-modal/dashboard-modal";

interface OffsetProps {
    closeOffset: () => void
}
 
const Offset: FC<OffsetProps> = ({ closeOffset }) => {  
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openModal = () => setIsModalOpen(true); 
    const closeModal = () => setIsModalOpen(false);
    
    return (
        <>
            <Portal elementId="offset-root" className="z-[1000] md-md:hidden">
                <motion.div 
                    initial={{ left: "-10rem", opacity: 0 }}
                    animate={isModalOpen ? { left: "-10rem", opacity: 0 }: { left: 0, opacity: 1 }}
                    className={`${isModalOpen ? "hidden" : ""} h-full w-[80%] xs:w-[70%] flex flex-col xs:justify-between bg-[#08161c] relative py-8 px-3 space-y-14 xs:px-6 xs:space-y-6 lg:space-y-8`}
                >
                    <span className="close absolute top-5 right-5 cursor-pointer transition-transform duration-300 hover:rotate-180" onClick={closeOffset}>
                        <X className="w-7 h-7 xs:w-5 xs:h-5 md:w-6 md:h-6 stroke-tertiary-700" />
                    </span>

                    {/* Profile */}
                    <header className='content flex flex-col items-center gap-y-3'>
                        <UserProfile size="md" />
                        <Button
                        role="join button"
                        variant="primary"
                        className="block w-full"
                        onClick={() => {
                            // Close offset
                            // closeOffset();

                            // Open modal
                            openModal()
                        }}
                        >
                            Join
                        </Button>
                    </header>

                    {/* Link */}
                    <ul className='content flex flex-col gap-y-[.25rem] sm:gap-y-[.35rem] lg:gap-y-2'>
                        {dashboardLinks.map(link => (
                        <DashboardSidebarLink 
                            key={link.name} 
                            link={link}
                            onClick={closeOffset} 
                        />
                        ))}
                    </ul>

                    {/* Footer */}
                    <footer className='footer absolute bottom-8 left-3 xs:relative flex justify-center gap-x-5 lg:gap-x-4'>
                        {companySocials.map(social => (
                        <SocialLink 
                            key={social.title}
                            {...social}
                        />
                        ))}
                    </footer>
                </motion.div>
            </Portal>

            {/* Modal */}
            {isModalOpen && (
                <DashboardModal 
                    closeModal={closeModal} 
                    className="z-[1005]" 
                />
            )}
        </>
    );
}
 
export default Offset;