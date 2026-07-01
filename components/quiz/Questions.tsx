"use client";

import { Dispatch, SetStateAction } from "react";

import { UserPreference } from "@/lib/types";

export interface Question {
	id: keyof UserPreference;
	label: string;
	type: "number" | "select" | "multiselect";
	placeholder?: string;
	options?: string[];
}

interface Props {
	question: Question;
	value: any;
	formData: UserPreference;
	setFormData: Dispatch<SetStateAction<UserPreference>>;
}

export default function Question({
	question,
	value,
	formData,
	setFormData,
}: Props) {
	if (question.type === "number") {
		return (
			<div>
				<h2 className="mb-6 text-2xl font-bold">{question.label}</h2>

				<input
					type="number"
					value={value ?? ""}
					placeholder={question.placeholder}
					onChange={(e) =>
						setFormData({
							...formData,
							[question.id]: Number(e.target.value),
						})
					}
					className="w-full rounded-xl border p-4"
				/>
			</div>
		);
	}

	if (question.type === "select") {
		return (
			<div>
				<h2 className="mb-6 text-2xl font-bold">{question.label}</h2>

				<div className="grid gap-3">
					{question.options?.map((option) => (
						<button
							key={option}
							type="button"
							onClick={() =>
								setFormData({
									...formData,
									[question.id]: option,
								})
							}
							className={`rounded-xl border p-4 text-left transition ${
								value === option
									? "border-black bg-black text-white"
									: "hover:bg-gray-100"
							}`}
						>
							{option}
						</button>
					))}
				</div>
			</div>
		);
	}

	return (
		<div>
			<h2 className="mb-6 text-2xl font-bold">{question.label}</h2>

			<div className="grid grid-cols-2 gap-3">
				{question.options?.map((option) => {
					const selected = formData.mustHaveFeatures.includes(option);

					return (
						<button
							key={option}
							type="button"
							onClick={() => {
								if (selected) {
									setFormData({
										...formData,
										mustHaveFeatures:
											formData.mustHaveFeatures.filter(
												(item) => item !== option
											),
									});
								} else {
									setFormData({
										...formData,
										mustHaveFeatures: [
											...formData.mustHaveFeatures,
											option,
										],
									});
								}
							}}
							className={`rounded-xl border p-4 transition ${
								selected
									? "bg-black text-white"
									: "hover:bg-gray-100"
							}`}
						>
							{option}
						</button>
					);
				})}
			</div>
		</div>
	);
}
