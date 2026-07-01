interface ProgressBarProps {
	current: number;
	total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
	const percentage = (current / total) * 100;

	return (
		<div className="space-y-2">
			<div className="flex justify-between text-sm text-gray-500">
				<span>
					Question {current} of {total}
				</span>

				<span>{Math.round(percentage)}%</span>
			</div>

			<div className="h-2 overflow-hidden rounded-full bg-gray-200">
				<div
					className="h-full rounded-full bg-black transition-all duration-500"
					style={{
						width: `${percentage}%`,
					}}
				/>
			</div>
		</div>
	);
}
