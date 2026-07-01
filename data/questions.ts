import { BodyType, FuelType, Priority, Transmission, Usage } from "@/lib/types";

export interface QuestionOption {
	label: string;
	value: string | number;
}

export interface Question {
	id: string;
	label: string;
	type: "number" | "select" | "multiselect";
	placeholder?: string;
	options?: QuestionOption[];
}

export const questions: Question[] = [
	{
		id: "budget",
		label: "What's your maximum budget? (₹ Lakhs)",
		type: "number",
		placeholder: "e.g. 12",
	},

	{
		id: "preferredBodyType",
		label: "Preferred Body Type",
		type: "select",
		options: [
			{ label: "Hatchback", value: "Hatchback" satisfies BodyType },
			{ label: "Sedan", value: "Sedan" satisfies BodyType },
			{ label: "Compact SUV", value: "Compact SUV" satisfies BodyType },
			{ label: "SUV", value: "SUV" satisfies BodyType },
			{ label: "MPV", value: "MPV" satisfies BodyType },
		],
	},

	{
		id: "preferredFuelType",
		label: "Preferred Fuel Type",
		type: "select",
		options: [
			{ label: "Petrol", value: "Petrol" satisfies FuelType },
			{ label: "Diesel", value: "Diesel" satisfies FuelType },
			{ label: "CNG", value: "CNG" satisfies FuelType },
			{ label: "Hybrid", value: "Hybrid" satisfies FuelType },
			{ label: "Electric", value: "Electric" satisfies FuelType },
		],
	},

	{
		id: "preferredTransmission",
		label: "Transmission",
		type: "select",
		options: [
			{ label: "Manual", value: "Manual" satisfies Transmission },
			{ label: "Automatic", value: "Automatic" satisfies Transmission },
		],
	},

	{
		id: "usage",
		label: "Where will you mostly drive?",
		type: "select",
		options: [
			{ label: "City", value: "City" satisfies Usage },
			{ label: "Highway", value: "Highway" satisfies Usage },
			{ label: "Mixed", value: "Mixed" satisfies Usage },
		],
	},

	{
		id: "priority",
		label: "What's your top priority?",
		type: "select",
		options: [
			{ label: "Mileage", value: "Mileage" satisfies Priority },
			{ label: "Safety", value: "Safety" satisfies Priority },
			{ label: "Performance", value: "Performance" satisfies Priority },
			{ label: "Comfort", value: "Comfort" satisfies Priority },
			{
				label: "Low Maintenance",
				value: "Low Maintenance" satisfies Priority,
			},
		],
	},

	{
		id: "familySize",
		label: "How many family members usually travel together?",
		type: "number",
		placeholder: "e.g. 4",
	},

	{
		id: "mustHaveFeatures",
		label: "Must-have Features",
		type: "multiselect",
		options: [
			{ label: "Sunroof", value: "Sunroof" },
			{ label: "Rear Camera", value: "Rear Camera" },
			{ label: "360 Camera", value: "360 Camera" },
			{ label: "ADAS", value: "ADAS" },
			{ label: "Cruise Control", value: "Cruise Control" },
			{ label: "Android Auto", value: "Android Auto" },
			{ label: "Apple CarPlay", value: "Apple CarPlay" },
			{ label: "Ventilated Seats", value: "Ventilated Seats" },
		],
	},
];
