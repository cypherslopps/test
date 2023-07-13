"use client";

import { FC, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { CopyIcon } from 'lucide-react';


interface CopyContentProps {
  text: string;
  textToCopy: any;
  color?: string;
}
 
const CopyContent: FC<CopyContentProps> = ({ text, textToCopy, color }) => {
    const [showCopiedIndicator, setShowCopiedIndicator] = useState(false);
    
    const copy = () => {
        // Copy logic
        navigator.clipboard.writeText(textToCopy)

        // Show indicator
        setShowCopiedIndicator(true);

        // Hide indicator
        setTimeout(() => setShowCopiedIndicator(false), 1300);
    }
    return (
        <div className='flex items-center justify-center gap-x-2 relative'>
            <span className={`text-sm md:text-[.83rem] ${color ?? "text-gray-100"}`}>{text}</span>
            <span 
              className='cursor-pointer transition-transform duration-300 hover:scale-105'
              onClick={copy}
            >
              <CopyIcon className='w-4 h-4 stroke-tertiary-shade-900' />
            </span>

            {/* Copy text */}
            <AnimatePresence>
              {showCopiedIndicator && (
                <motion.span 
                  initial={{ right: "-2.5rem", opacity: 0 }}
                  animate={{ right: "-2rem", opacity: 1 }}
                  exit={{ right: "-2.5rem", opacity: 0 }}
                  transition={{ duration: .25, delay: 0.15 }}
                  className='px-3 py-0.5 rounded-[4px] bg-tertiary-900 shadow text-white text-xs absolute top-0 -right-8'
                >
                  Copied
                </motion.span>)}
            </AnimatePresence>
        </div>
    );
}
 
export default CopyContent;