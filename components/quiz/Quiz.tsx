"use client";

import { useState } from "react";

import { questions } from "@/lib/questions";
import { ScoredCar, UserPreference } from "@/lib/types";

import Card from "../common/Card";
import ProgressBar from "../common/ProgressBar";
import Loader from "../common/Loader";

import Question from "./Questions";
import Navigation from "./Navigation";

interface QuizProps {
	onComplete: (recommendations: ScoredCar[]) => void;
}

export default function Quiz({ onComplete }: QuizProps) {
	const [currentQuestion, setCurrentQuestion] = useState(0);

	const [loading, setLoading] = useState(false);

	const [formData, setFormData] = useState<UserPreference>({
		budget: 10,
		preferredBodyType: undefined,
		preferredFuelType: undefined,
		preferredTransmission: undefined,
		usage: "City",
		priority: "Safety",
		familySize: 4,
		mustHaveFeatures: [],
	});

	const question = questions[currentQuestion];

	const isLastQuestion = currentQuestion === questions.length - 1;

	function next() {
		if (!isLastQuestion) {
			setCurrentQuestion((prev) => prev + 1);
		}
	}

	function previous() {
		if (currentQuestion > 0) {
			setCurrentQuestion((prev) => prev - 1);
		}
	}

	async function submitQuiz() {
		setLoading(true);

		try {
			const response = await fetch("/api/recommend", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			onComplete(data.recommendations);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	}

	if (loading) {
		return <Loader />;
	}

	return (
		<Card className="max-w-2xl mx-auto">
			<ProgressBar
				current={currentQuestion + 1}
				total={questions.length}
			/>

			<div className="mt-10">
				<Question
					question={question}
					value={formData[question.id as keyof UserPreference]}
					formData={formData}
					setFormData={setFormData}
				/>
			</div>

			<Navigation
				isFirst={currentQuestion === 0}
				isLast={isLastQuestion}
				onPrevious={previous}
				onNext={next}
				onSubmit={submitQuiz}
			/>
		</Card>
	);
}
