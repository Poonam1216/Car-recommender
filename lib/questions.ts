import { Question } from "@/components/quiz/Questions";

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
		options: ["Hatchback", "Sedan", "Compact SUV", "SUV", "MPV"],
	},
	{
		id: "preferredFuelType",
		label: "Preferred Fuel Type",
		type: "select",
		options: ["Petrol", "Diesel", "CNG", "Hybrid", "Electric"],
	},
	{
		id: "preferredTransmission",
		label: "Transmission",
		type: "select",
		options: ["Manual", "Automatic"],
	},
	{
		id: "usage",
		label: "Where will you mostly drive?",
		type: "select",
		options: ["City", "Highway", "Mixed"],
	},
	{
		id: "priority",
		label: "What's most important to you?",
		type: "select",
		options: [
			"Mileage",
			"Safety",
			"Performance",
			"Comfort",
			"Low Maintenance",
		],
	},
	{
		id: "familySize",
		label: "How many people usually travel together?",
		type: "number",
		placeholder: "e.g. 4",
	},
	{
		id: "mustHaveFeatures",
		label: "Must-have Features",
		type: "multiselect",
		options: [
			"Sunroof",
			"Rear Camera",
			"360 Camera",
			"ADAS",
			"Cruise Control",
			"Android Auto",
			"Apple CarPlay",
			"Ventilated Seats",
		],
	},
];
