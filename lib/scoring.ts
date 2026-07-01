import { Car, ScoredCar, UserPreference } from "./types";

const WEIGHTS = {
	budget: 20,
	bodyType: 15,
	fuelType: 10,
	transmission: 10,
	usage: 15,
	priority: 15,
	familyFit: 5,
	features: 10,
};

export function scoreCars(
	cars: Car[],
	preferences: UserPreference
): ScoredCar[] {
	return cars
		.map((car) => scoreCar(car, preferences))
		.sort((a, b) => b.score - a.score)
		.slice(0, 5);
}

function scoreCar(car: Car, preferences: UserPreference): ScoredCar {
	const breakdown = {
		budget: scoreBudget(car, preferences),
		bodyType: scoreBodyType(car, preferences),
		fuelType: scoreFuelType(car, preferences),
		transmission: scoreTransmission(car, preferences),
		usage: scoreUsage(car, preferences),
		priority: scorePriority(car, preferences),
		familyFit: scoreFamilyFit(car, preferences),
		features: scoreFeatures(car, preferences),
	};

	const score = Object.values(breakdown).reduce(
		(sum, value) => sum + value,
		0
	);

	return {
		car,
		score,
		breakdown,
		reasoning: buildReasoning(car, breakdown, preferences),
	};
}

function scoreBudget(car: Car, preferences: UserPreference): number {
	const diff = preferences.budget - car.price;

	if (diff >= 0) return WEIGHTS.budget;
	if (diff >= -1) return 15;
	if (diff >= -2) return 10;
	if (diff >= -3) return 5;

	return 0;
}

function scoreBodyType(car: Car, preferences: UserPreference): number {
	if (!preferences.preferredBodyType) return WEIGHTS.bodyType / 2;

	if (car.bodyType === preferences.preferredBodyType) return WEIGHTS.bodyType;

	if (
		preferences.preferredBodyType === "SUV" &&
		car.bodyType === "Compact SUV"
	)
		return 12;

	if (
		preferences.preferredBodyType === "Compact SUV" &&
		car.bodyType === "SUV"
	)
		return 12;

	return 0;
}

function scoreFuelType(car: Car, preferences: UserPreference): number {
	if (!preferences.preferredFuelType) return WEIGHTS.fuelType / 2;

	return car.fuelType === preferences.preferredFuelType
		? WEIGHTS.fuelType
		: 0;
}

function scoreTransmission(car: Car, preferences: UserPreference): number {
	if (!preferences.preferredTransmission) return WEIGHTS.transmission / 2;

	return car.transmission === preferences.preferredTransmission
		? WEIGHTS.transmission
		: 0;
}

function scoreUsage(car: Car, preferences: UserPreference): number {
	switch (preferences.usage) {
		case "City":
			return Math.round((car.cityUseScore / 10) * WEIGHTS.usage);

		case "Highway":
			return Math.round((car.highwayUseScore / 10) * WEIGHTS.usage);

		case "Mixed":
			return Math.round(
				((car.cityUseScore + car.highwayUseScore) / 20) * WEIGHTS.usage
			);

		default:
			return 0;
	}
}

function scorePriority(car: Car, preferences: UserPreference): number {
	switch (preferences.priority) {
		case "Mileage":
			return Math.min(
				WEIGHTS.priority,
				Math.round((car.mileage / 30) * 15)
			);

		case "Safety":
			return Math.round((car.safetyRating / 5) * 15);

		case "Performance":
			return Math.round((car.performanceScore / 10) * 15);

		case "Comfort":
			return Math.round((car.comfortScore / 10) * 15);

		case "Low Maintenance":
			return Math.round((car.maintenanceScore / 10) * 15);

		default:
			return 0;
	}
}

function scoreFamilyFit(car: Car, preferences: UserPreference): number {
	return car.seatingCapacity >= preferences.familySize
		? WEIGHTS.familyFit
		: 0;
}

function scoreFeatures(car: Car, preferences: UserPreference): number {
	if (preferences.mustHaveFeatures.length === 0) return WEIGHTS.features;

	const matches = preferences.mustHaveFeatures.filter((feature: any) =>
		car.features.includes(feature)
	).length;

	return Math.round(
		(matches / preferences.mustHaveFeatures.length) * WEIGHTS.features
	);
}

function buildReasoning(
	car: Car,
	breakdown: ScoredCar["breakdown"],
	preferences: UserPreference
): string[] {
	const reasons: string[] = [];

	if (breakdown.budget >= 15)
		reasons.push("Fits comfortably within your budget.");

	if (breakdown.bodyType >= 12)
		reasons.push(
			`Matches your preferred ${car.bodyType.toLowerCase()} body style.`
		);

	if (breakdown.fuelType === 10)
		reasons.push(`${car.fuelType} fuel matches your preference.`);

	if (breakdown.transmission === 10)
		reasons.push(`${car.transmission} transmission selected.`);

	if (breakdown.usage >= 12)
		reasons.push(
			`Well suited for ${preferences.usage.toLowerCase()} driving.`
		);

	if (breakdown.priority >= 12)
		reasons.push(
			`Strong ${preferences.priority.toLowerCase()} performance.`
		);

	if (breakdown.familyFit === 5)
		reasons.push(
			`Comfortably accommodates ${preferences.familySize} passengers.`
		);

	if (breakdown.features >= 8)
		reasons.push("Includes most of your requested features.");

	return reasons;
}
