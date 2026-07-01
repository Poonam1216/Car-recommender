import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	variant?: "primary" | "secondary";
	fullWidth?: boolean;
}

export default function Button({
	children,
	variant = "primary",
	fullWidth = false,
	className,
	...props
}: ButtonProps) {
	return (
		<button
			{...props}
			className={clsx(
				"rounded-xl px-5 py-3 font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
				fullWidth && "w-full",

				variant === "primary" &&
					"bg-black text-white hover:bg-neutral-800",

				variant === "secondary" &&
					"border border-gray-300 bg-white hover:bg-gray-100",

				className
			)}
		>
			{children}
		</button>
	);
}
