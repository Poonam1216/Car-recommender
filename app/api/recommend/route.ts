import { NextRequest, NextResponse } from "next/server";

import carsData from "@/data/cars.json";
import { scoreCars } from "@/lib/scoring";
import { Car, UserPreference } from "@/lib/types";

const cars = carsData as Car[];

export async function POST(req: NextRequest) {
	try {
		const preferences: UserPreference = await req.json();

		const recommendations = scoreCars(cars, preferences);

		return NextResponse.json({
			success: true,
			count: recommendations.length,
			recommendations,
		});
	} catch (error) {
		console.error(error);

		return NextResponse.json(
			{
				success: false,
				message: "Failed to generate recommendations.",
			},
			{
				status: 500,
			}
		);
	}
}
