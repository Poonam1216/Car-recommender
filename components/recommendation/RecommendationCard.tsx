"use client";

import { ScoredCar } from "@/lib/types";
import ScoreBadge from "./ScoreBadge";
import Card from "../common/Card";

interface RecommendationCardProps {
	recommendation: ScoredCar;
	rank: number;
}

export default function RecommendationCard({
	recommendation,
	rank,
}: RecommendationCardProps) {
	const { car, score, reasoning, breakdown } = recommendation;

	return (
		<Card className="transition-all hover:shadow-xl">
			<div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
				{/* Left */}
				<div className="flex-1">
					<div className="flex items-center gap-3">
						<span className="rounded-full bg-black px-3 py-1 text-sm font-semibold text-white">
							#{rank} Best Match
						</span>

						<ScoreBadge score={score} />
					</div>

					<h2 className="mt-4 text-3xl font-bold">
						{car.brand} {car.model}
					</h2>

					<p className="mt-2 text-lg text-gray-600">
						₹ {car.price} Lakhs
					</p>

					<div className="mt-5 flex flex-wrap gap-2">
						<span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
							{car.bodyType}
						</span>

						<span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
							{car.fuelType}
						</span>

						<span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
							{car.transmission}
						</span>

						<span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
							⭐ {car.safetyRating}/5
						</span>
					</div>

					<div className="mt-6">
						<h3 className="mb-2 font-semibold">
							Why we recommend it
						</h3>

						<ul className="space-y-2 text-gray-700">
							{reasoning.map((reason, index) => (
								<li
									key={index}
									className="flex items-start gap-2"
								>
									<span>✅</span>
									<span>{reason}</span>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Right */}
				<div className="w-full md:w-72">
					<div className="rounded-xl bg-gray-50 p-5">
						<h3 className="mb-4 font-semibold">Score Breakdown</h3>

						{Object.entries(breakdown).map(([key, value]) => (
							<div key={key} className="mb-3">
								<div className="mb-1 flex justify-between text-sm capitalize">
									<span>{key}</span>

									<span>{value}</span>
								</div>

								<div className="h-2 rounded-full bg-gray-200">
									<div
										className="h-2 rounded-full bg-black transition-all"
										style={{
											width: `${value}%`,
										}}
									/>
								</div>
							</div>
						))}
					</div>

					<div className="mt-5">
						<h3 className="mb-2 font-semibold">Features</h3>

						<div className="flex flex-wrap gap-2">
							{car.features.map((feature) => (
								<span
									key={feature}
									className="rounded-lg border px-2 py-1 text-xs"
								>
									{feature}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>
		</Card>
	);
}
