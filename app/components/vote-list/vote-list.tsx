import Image from 'next/image';
import Profile from '@/app/components/profile/profile';
import { votes } from '@/app/lib/constants';
import DownloadIcon from '@/public/svg/download.svg';
import ExcelFormatDownloader from '../excel-format-downloader/excel-format-downloader';

 
const VoteList = () => {
    return (
        <section className='votes rounded-[12px] border border-tertiary-700/40 overflow-y-hidden'>
            <header className='py-3 px-5 sm:py-4 md:py-5 flex justify-between border-b border-tertiary-700/40'>
                <div className='flex items-center gap-x-2'>
                    <h4 className='font-semibold text-[1.1rem] sm:text-lg'>Votes</h4>
                    <span className='bg-tertiary-900 text-white rounded-full px-2 py-[.12rem] text-xs sm:text-sm font-medium'>505</span>
                </div>
        
                <ExcelFormatDownloader data={votes}>
                    <Image 
                        src={DownloadIcon}
                        alt="download icon"
                        width={10}
                        height={10}
                        className='w-6 h-6 ss:px-0 sm:w-full object-cover'
                    />
                </ExcelFormatDownloader>
            </header>

            <ul className='divide-y divide-tertiary-700/40 h-80 min-h-64 overflow-y-scroll remove-scrbar'>
                {votes.map(({ user, coins, option }) => (
                    <li key={coins} className='flex items-center justify-between text-center py-3 px-5'>
                        <Profile {...user} />
                        <span className='text-[.82rem] sm:text-sm text-white/90'>{option}</span>
                        <span className='text-[.9rem] sm:text-[.92rem] font-medium text-white/90'>{coins}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
 
export default VoteList;