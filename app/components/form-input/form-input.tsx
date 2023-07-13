import React from 'react';
import InfoText from '../info-text/info-text';

type Props = {
    label?: string;
    error?: string;
    type: string;
    info?: string;
    name: string;
    placeholder?: string;
    value: string;
    onChange: (e: any) => void;
    onBlur?: (e: any) => void;
    onKeyup?: (e: any) => void;
    required?: boolean;
    variant?: "default" | "dark";
    isDisabled?: boolean;
    styles?: string;
}

const FormInput = ({ label, error, info, variant, onChange, onKeyup, onBlur, styles, isDisabled, ...otherInputProps }: Props) => {
    let inputElement = null;
    let inputStyles = `${styles} w-full py-[.5rem] px-4 outline-none transition-all duration-150 placeholder:text-gray-600 text-[.89rem] xs:text-[.93rem] sm:text-[.95rem] md:text-[.97rem] placeholder:text-sm xs:placeholder:text-[.97rem] font-inherit focus:ring-1 focus:ring-tertiary-900 rounded-lg `;

    if(variant === "default")
        inputStyles += "border-none bg-gray-50 hover:shadow-sm text-gray-800 focus:shadow-tertiary-900 hover:shadow-tertiary-900" 
    else if(variant === "dark")
        inputStyles += "border-[rgba(255,255,255,.05)] bg-[rgba(0,0,0,.1)] text-gray-300";
    else 
        inputStyles += "border-none"

    if(otherInputProps.type === "textarea")
        inputElement = (
            <textarea 
                {...otherInputProps}
                disabled={isDisabled}
                aria-disabled={isDisabled}
                className={`form-textarea h-48 ${inputStyles}`}
                onChange={onChange}
                onKeyUp={onKeyup}
                onBlur={onBlur}
            />
        )
    else 
        inputElement = (
            <input 
                {...otherInputProps}
                disabled={isDisabled}
                aria-disabled={isDisabled}
                className={`form-input ${inputStyles}`}
                onChange={onChange}
                onKeyUp={onKeyup}
                onBlur={onBlur}
            />
        )

    return (
        <div className='form-group flex flex-col gap-y-1' role="group">
            {label ? <label className='capitalize text-sm xs:text-[.9rem] md:text-[.92rem] text-gray-300'>{label}</label> : null}
            {inputElement}
            {info && (<InfoText 
                content="Your email is protected and not displayed publicly. We will only mail important updates to you. We will not ask for your wallet phrase in any circumstance."
                className='w-full gap-x-2 mt-1 leading-normal'
            />)}
            {error ? (
                <span className='form-error text-[.8rem] text-[#f03e3e]'>{error}</span> 
            ) : null}
        </div>
    )
}

export default FormInput