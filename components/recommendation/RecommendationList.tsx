"use client";

import { ScoredCar } from "@/lib/types";
import RecommendationCard from "./RecommendationCard";

interface RecommendationListProps {
	recommendations: ScoredCar[];
}

export default function RecommendationList({
	recommendations,
}: RecommendationListProps) {
	if (recommendations.length === 0) return null;

	return (
		<section className="mt-12">
			<div className="mb-8">
				<h2 className="text-3xl font-bold">Your Recommended Cars</h2>

				<p className="mt-2 text-gray-600">
					Based on your preferences, here are the best matches ranked
					by our scoring algorithm.
				</p>
			</div>

			<div className="grid gap-6">
				{recommendations.map((recommendation, index) => (
					<RecommendationCard
						key={recommendation.car.id}
						recommendation={recommendation}
						rank={index + 1}
					/>
				))}
			</div>
		</section>
	);
}
