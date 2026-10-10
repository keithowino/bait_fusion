import { cn } from "../../utils.js";

export const Card = ({ className, elevated, children, ...props }) => {
	return (
		<div
			className={cn(
				"rounded-xl border border-slate-200/80 bg-white p-6 transition-all dark:border-slate-800/80 dark:bg-slate-900",
				elevated ? "shadow-md dark:shadow-black/40" : "shadow-xs",
				className,
			)}
			{...props}
		>
			{children}
		</div>
	);
};

export const CardHeader = ({ className, children, ...props }) => (
	<div className={cn("mb-4 flex flex-col space-y-1.5", className)} {...props}>
		{children}
	</div>
);

export const CardTitle = ({ className, children, ...props }) => (
	<h3
		className={cn(
			"text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100",
			className,
		)}
		{...props}
	>
		{children}
	</h3>
);

export const CardDescription = ({ className, children, ...props }) => (
	<p
		className={cn("text-sm text-slate-600 dark:text-slate-400", className)}
		{...props}
	>
		{children}
	</p>
);

export const CardContent = ({ className, children, ...props }) => (
	<div
		className={cn("text-slate-700 dark:text-slate-300", className)}
		{...props}
	>
		{children}
	</div>
);
