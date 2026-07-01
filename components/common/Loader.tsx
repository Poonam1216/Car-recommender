export default function Loader() {
	return (
		<div className="flex flex-col items-center justify-center py-16">
			<div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-black" />

			<h3 className="mt-6 text-xl font-semibold">
				Finding your perfect car...
			</h3>

			<p className="mt-2 text-gray-500">
				Scoring every car based on your preferences.
			</p>
		</div>
	);
}
