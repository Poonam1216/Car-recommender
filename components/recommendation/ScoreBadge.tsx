"use client";

interface ScoreBadgeProps {
	score: number;
}

export default function ScoreBadge({ score }: ScoreBadgeProps) {
	const getBadge = () => {
		if (score >= 90)
			return {
				color: "bg-green-100 text-green-800 border-green-300",
				label: "Excellent Match",
			};

		if (score >= 75)
			return {
				color: "bg-blue-100 text-blue-800 border-blue-300",
				label: "Great Match",
			};

		if (score >= 60)
			return {
				color: "bg-yellow-100 text-yellow-800 border-yellow-300",
				label: "Good Match",
			};

		return {
			color: "bg-red-100 text-red-800 border-red-300",
			label: "Fair Match",
		};
	};

	const badge = getBadge();

	return (
		<div
			className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 ${badge.color}`}
		>
			<span className="text-lg">⭐</span>

			<div className="flex flex-col leading-tight">
				<span className="text-sm font-bold">{score}/100</span>

				<span className="text-xs">{badge.label}</span>
			</div>
		</div>
	);
}
