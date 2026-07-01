export type BodyType = "Hatchback" | "Sedan" | "SUV" | "Compact SUV" | "MPV";

export type FuelType = "Petrol" | "Diesel" | "CNG" | "Hybrid" | "Electric";

export type Transmission = "Manual" | "Automatic";

export type Usage = "City" | "Highway" | "Mixed";

export type Priority =
	| "Mileage"
	| "Safety"
	| "Performance"
	| "Comfort"
	| "Low Maintenance";

export interface Car {
	id: string;

	brand: string;
	model: string;
	variant?: string;

	price: number; // Lakhs

	bodyType: BodyType;
	fuelType: FuelType;
	transmission: Transmission;

	seatingCapacity: number;

	mileage: number;
	bootSpace: number;
	safetyRating: number;

	features: string[];
	tags: string[];

	cityUseScore: number;
	highwayUseScore: number;
	performanceScore: number;
	comfortScore: number;
	maintenanceScore: number;
}

export interface UserPreference {
	budget: number;

	preferredBodyType?: BodyType;
	preferredFuelType?: FuelType;
	preferredTransmission?: Transmission;

	usage: Usage;
	priority: Priority;

	familySize: number;

	mustHaveFeatures: string[];
}

export interface ScoreBreakdown {
	budget: number;
	bodyType: number;
	fuelType: number;
	transmission: number;
	usage: number;
	priority: number;
	familyFit: number;
	features: number;
}

export interface ScoredCar {
	car: Car;

	score: number;

	breakdown: ScoreBreakdown;

	reasoning: string[];
}

export interface RecommendationResponse {
	success: boolean;
	count: number;
	recommendations: ScoredCar[];
}
