import React, { useState, useEffect, FC, HTMLAttributes } from 'react';
import { getRemainingTimeUntilTimeStamp, cn } from '@/app/lib/utils';

interface CountDownProps extends HTMLAttributes<HTMLDivElement> {
    timestamp: Date
}

const defaultTime = {
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
}

const CountDown: FC<CountDownProps> = ({ timestamp, className }) => {
    const [remainingTime, setRemainingTime] = useState(defaultTime);

    useEffect(() => {
        const interval = setInterval(() => {
            updateRemainingTime(timestamp)
        }, 1000);

        return () => clearInterval(interval);
    });

    function updateRemainingTime(countDown: Date) {
        setRemainingTime(getRemainingTimeUntilTimeStamp(countDown));
    }

    const timeEntries = Object.entries(remainingTime);
    const countDownContent = timeEntries.map(([key, value], index) => (
        <p key={key+value}>{value}{key.toUpperCase().substr(0,1)}{index === (timeEntries.length - 1) ? "" : " :"}</p>
    ))

    return (
        <div className={cn(
            "grid grid-cols-4 justify-items-center items-center text-3xl font-bold mb-2 space-x-0",
            className
        )}>
            {countDownContent}
        </div>
    )
}

export default CountDown