import { ProposalOption } from "@/typings";

const OptionItem = ({ percentage, title, stat }: ProposalOption) => {
    return ( 
        <blockquote className="space-y-1">
            <div className="stat flex items-center justify-between">
                <h6 className="text-[.93rem] capitalize">{title}</h6>
                <div className="space-x-1">
                    <span className="text-[.82rem]">{stat}</span>
                    <span className="text-xs text-black font-medium bg-accent-shade-800 py-0.5 px-1 rounded-full">{percentage}</span>
                </div>
            </div>

            {/* Progress */}
            <div className="h-2 bg-tertiary-shade-900/40 rounded-full">
                <div className="bg-tertiary-700 h-full rounded-full" style={{ width: percentage }} />
            </div>
        </blockquote>
    );
}
 
export default OptionItem;