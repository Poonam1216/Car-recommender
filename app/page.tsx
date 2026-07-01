"use client";

import { useState } from "react";

import Quiz from "@/components/quiz/Quiz";
import RecommendationList from "@/components/recommendation/RecommendationList";
import PageHeader from "@/components/common/PageHeader";

import { ScoredCar } from "@/lib/types";

export default function Home() {
	const [recommendations, setRecommendations] = useState<ScoredCar[]>([]);

	return (
		<main className="min-h-screen bg-gray-100 py-12 px-4">
			<div className="mx-auto max-w-5xl">
				<PageHeader
					title="🚗 AI Car Matchmaker"
					subtitle="Answer a few questions and get personalized car recommendations powered by a weighted scoring algorithm."
				/>

				<Quiz onComplete={setRecommendations} />

				{recommendations.length > 0 && (
					<div className="mt-12">
						<RecommendationList recommendations={recommendations} />
					</div>
				)}
			</div>
		</main>
	);
}
