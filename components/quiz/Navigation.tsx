"use client";

import Button from "../common/Button";

interface NavigationProps {
	isFirst: boolean;
	isLast: boolean;
	onPrevious: () => void;
	onNext: () => void;
	onSubmit: () => void;
}

export default function Navigation({
	isFirst,
	isLast,
	onPrevious,
	onNext,
	onSubmit,
}: NavigationProps) {
	return (
		<div className="mt-10 flex items-center justify-between">
			<Button variant="secondary" onClick={onPrevious} disabled={isFirst}>
				Previous
			</Button>

			{isLast ? (
				<Button onClick={onSubmit}>Get Recommendations</Button>
			) : (
				<Button onClick={onNext}>Next</Button>
			)}
		</div>
	);
}
