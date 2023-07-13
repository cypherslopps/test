import { FC } from "react";
import Image from "next/image";
import InfoIcon from '@/public/svg/info.svg';
import { cn } from "@/app/lib/utils";

interface InfoTextProps {
    content: string;
    color?: "light";
    className?: string;
}
 
const InfoText: FC<InfoTextProps> = ({ content, color, className }) => {
    return (
        <div 
            className={cn(
                `text-[.62rem] ${color === "light" ? "text-gray-400" : "text-tertiary-shade-900"} flex items-center gap-x-2 w-11/12`,
                className
            )}>
            <Image 
                src={InfoIcon}
                alt="info"
                className="w-3 h-3"
                priority
            />
            {content}
        </div>
    );
}
 
export default InfoText;