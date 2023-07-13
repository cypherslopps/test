import React, { FC, ButtonHTMLAttributes, forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/app/lib/utils';
import { Loader2 } from 'lucide-react';

const buttonVariants = cva(
	"flex items-center justify-center truncate cursor-pointer font-inherit rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed gap-x-1",
	{
		variants: {
			variant: {
				primary: "bg-tertiary-900 text-white hover:bg-tertiary-tint-800 disabled:hover:bg-tertiary-900 focus:bg-tertiary-tint-800 disabled:focus:bg-tertiary-900 stroke-white",
				"red-border": "border border-red-400 text-red-400 hover:border-red-500 hover:bg-red-500 hover:text-white",
				accent: "bg-accent-shade-800 text-black hover:bg-accent-tint-800 focus:bg-accent-shade-300 disabled:hover:bg-accent-shade-800 disabled:focus:bg-accent-shade-800 stroke-black",
				transparent: "bg-transparent text-gray-900 stroke-black",
				border: "border border-tertiary-900 text-tertiary-900 hover:bg-tertiary-900 hover:text-white focus:text-white focus:bg-tertiary-900 stroke-tertiary-900",
				"accent-border": "py-1.5 md:py-2 px-4 sm:px-6 md:px-4 lg:px-[29px] border border-accent-shade-800 text-accent-shade-800 stroke-accent-shade-800",
				"text-primary": "bg-transparent text-tertiary-900",
				action: "bg-[#ffffff33] border border-[#ffffff4c] rounded-lg text-xs stroke-white"
			},
			size: {
				nm: "w-[max-content] py-[.4rem] px-4 sm:py-2 md:px-4 lg:px-[16px] text-sm md:text-[.92rem]",
				lg: "py-1.5 md:py-2 px-4 sm:px-6 md:px-4 lg:px-[29px] text-sm md:text-base",
			}
		},
		defaultVariants: {
			variant: "transparent",
			size: "nm"
		}
	}
);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
	disabled?: boolean;
	isLoading?: boolean;
	title?: string;
}

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(({ 
	className, 
	variant="primary", 
	children, 
	disabled, 
	isLoading,
	size, 
	title, 
	...props 
}, ref) => {
	return (
		<button 
			className={cn(buttonVariants({ variant, size, className }))}
			title={title}
			aria-disabled={disabled}
			ref={ref}
			{...props}
			disabled={disabled}
		>
			{isLoading && (
				<Loader2 className={`animate-spin ${size === "nm" ? "w-3 h-3" : "w-4 h-4"}`} />
			)}
			{children}
		</button>
	)
})


export default Button;