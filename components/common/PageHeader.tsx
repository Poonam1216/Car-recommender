interface PageHeaderProps {
	title: string;
	subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
	return (
		<div className="mb-10 text-center">
			<h1 className="text-4xl font-bold tracking-tight">{title}</h1>

			<p className="mt-3 text-lg text-gray-600">{subtitle}</p>
		</div>
	);
}
