import React, { useState, useEffect, FC } from 'react';
import { getRemainingTimeUntilTimeStamp } from '@/app/lib/utils';

interface ClaimsCountDownProps {
    timeStamp: Date
}

const defaultTime = {
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
}

const ClaimsCountDown: FC<ClaimsCountDownProps> = ({ timeStamp }) => {
    const [remainingTime, setRemainingTime] = useState(defaultTime);

    useEffect(() => {
        const interval = setInterval(() => {
            updateRemainingTime(timeStamp)
        }, 1000);

        return () => clearInterval(interval);
    });

    function updateRemainingTime(countDown: Date) {
        setRemainingTime(getRemainingTimeUntilTimeStamp(countDown));
    }

    return (
        <div className='grid grid-cols-4 justify-items-center items-center text-3xl font-bold mb-2'>
            {Object.entries(remainingTime).map(([key, value]) => (
                <p key={key+value} className='text-[1.5rem] sm:text-xl md:text-3xl'>{value}{key.substr(0,1)}</p>
            ))}
        </div>
    )
}

export default ClaimsCountDown