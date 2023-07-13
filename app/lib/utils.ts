import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Date Formatter
export const dataFormatter = (number: number) => {
    return "$ " + Intl.NumberFormat("us").format(number).toString();
};

// Truncate string
export const truncateString = (str: string, length: number) => {
    if(str.length >= length)
        return `${str.substring(0,length)}...`
    
    return str;
}

// Slug converter
export const slugConverter: (value: string) => string = (title: string) => {
    const lowerCaseTitle = title.toLowerCase();
    const replaceBlankSpacesToDash = lowerCaseTitle.trim()
        .replace(/\s+/g, '-')        
        .replace(/&/g, '-and-') 
        .replace(/%/g, '-percentage-')      
        .replace(/\$/g, '-dollar-')
        .replace(/[^\w\-]+/g, '')     
        .replace(/\--+/g, '-')        
        .replace(/^-+/, '')         
        .replace(/-+$/, '');

    return replaceBlankSpacesToDash;
}

// Reverse slug
export const reverseSlug: (value: string) => string = (slug: string) => {
    let reverseSlugToInitialState = slug.trim()        
        .replace(/-and-/g, '-&') 
        .replace(/-percentage-/g, '-%')      
        .replace(/-dollars-/g, '-$')     
        .replace(/\-+/g, ' ');

    return reverseSlugToInitialState;
}

export const truncateWalletAddress = (address: any) => {
    return `${address.substring(0, 5)}••••${address.substring(address.length - 4, address.length)}`
}

export const capitalizeFirstLetter = (text: string) => {
    const getFirstLetter = text.slice(0, 1);
    const capitalizeFirstLetter = getFirstLetter.toUpperCase();
    const sliceFirstLetter = text.slice(1,text.length);

    return capitalizeFirstLetter + sliceFirstLetter;
}

export const flattenObject = (data: object) => {
    return Object.entries(data).map(([name, value]) => value).flat()
}
 
// Count Down
export function getRemainingTimeUntilTimeStamp(timeStamp: Date) {
    const timeStampDayjs = dayjs(timeStamp);
    const nowDayjs = dayjs();
    const remainingTimeStamp = getRemainingTimeStamp(nowDayjs, timeStampDayjs);

    if(timeStampDayjs.isBefore(nowDayjs))
        return {
            days: "00",
            hours: "00",
            minutes: "00",
            seconds: "00",
        };

    return {
        days: remainingTimeStamp("days"),
        hours: remainingTimeStamp("hours"),
        minutes: remainingTimeStamp("minutes"),
        seconds: remainingTimeStamp("seconds")
    }
}

export function getRemainingTimeStamp(nowDayjs: any, timeStampDayjs: any) {
    return (type: string) => {
        const divider = type === "hours" ? 24 : type === "days" ? 1 : 60;
        const stamp = divider > 1 ? timeStampDayjs.diff(nowDayjs, type) % divider : timeStampDayjs.diff(nowDayjs, type);

        return type === "days" ? stamp.toString() : padWithZeros(stamp, 2);
    }
}

function padWithZeros(number: number, minLength: number) {
    const numberString = number.toString();
    if(numberString.length >= minLength) return numberString;

    return "0".repeat(minLength - numberString.length) + numberString;
} 