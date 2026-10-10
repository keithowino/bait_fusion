import { Link } from "react-router-dom";
import { Award, ChevronRight } from "lucide-react";
import { Card } from "../../../lib/index.js";

const HomePage = () => {
	return (
		<div className="w-full space-y-20 pb-20">
			{/* Hero Section */}
			<section className="relative pt-12 pb-16 text-center space-y-6 max-w-4xl mx-auto px-4">
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
					<Award className="w-3.5 h-3.5" />
					<span>Strict Prerequisite STEM Learning Engine</span>
				</div>

				<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif tracking-tight text-slate-900 dark:text-slate-50 leading-[1.15]">
					Master Mathematics, Physics & Chemistry{" "}
					<span className="text-indigo-600 dark:text-indigo-400">
						Without Gaps.
					</span>
				</h1>

				<p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
					Bait Fusion is an academic platform for self-directed
					learners. We replace passive videos and superficial
					gamification with explicit prerequisite graphs and rigorous,
					server-verified mastery gates.
				</p>

				{/* Central Credo Box */}
				<div className="max-w-2xl mx-auto p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-serif italic shadow-inner">
					"Mastery is awarded only when the learner supplies evidence
					that satisfies the topic's defined mastery policy. Viewing
					content, completing a page, or taking a diagnostic must not
					by itself award mastery."
				</div>

				{/* CTA Buttons */}
				<div className="pt-2 flex flex-wrap items-center justify-center gap-3">
					{/* {user ? (
						<Button
							size="lg"
							variant="primary"
							onClick={() => navigate("/dashboard")}
						>
							Go to Learner Dashboard{" "}
							<ArrowRight className="w-4 h-4 ml-2" />
						</Button>
					) : (
						<>
							<Button
								size="lg"
								variant="primary"
								onClick={() => navigate("/register")}
							>
								Start Learning Free{" "}
								<ArrowRight className="w-4 h-4 ml-2" />
							</Button>
							<Button
								size="lg"
								variant="outline"
								onClick={() => navigate("/graph")}
							>
								Explore Knowledge Graph{" "}
								<Compass className="w-4 h-4 ml-2" />
							</Button>
						</>
					)} */}
				</div>
			</section>

			{/* Three Subjects Showcase */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
				<div className="text-center space-y-2">
					<h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 font-serif">
						Three Rigorous Academic Disciplines
					</h2>
					<p className="text-sm text-slate-500 max-w-xl mx-auto">
						Cross-subject prerequisite edges connect calculus
						directly into classical mechanics, and linear equations
						into reaction stoichiometry.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{/* Mathematics Card */}
					<Card className="hover:border-indigo-400 dark:hover:border-indigo-600 transition-all flex flex-col justify-between">
						<div className="space-y-4">
							<div className="flex items-center justify-between">
								{/* <Badge variant="mathematics">Mathematics</Badge> */}
								<span className="text-xs font-mono text-slate-400">
									Levels 0 – 7
								</span>
							</div>
							<h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 font-serif">
								Algebra to Analysis & Differential Forms
							</h3>
							<p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
								Derive equations from reversible axioms,
								understand Cartesian functions, and compute
								instantaneous derivatives via difference
								quotient limits.
							</p>
							<div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-lg text-center font-serif text-xs text-indigo-700 dark:text-indigo-300 overflow-x-auto border border-slate-200 dark:border-slate-800">
								{/* <MathRenderer
									math="f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}"
									display
								/> */}
							</div>
						</div>
						<div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-4">
							<Link
								to="/topics/math-linear-equations"
								className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center justify-between"
							>
								<span>Sample Topic: Linear Equalities</span>
								<ChevronRight className="w-4 h-4" />
							</Link>
						</div>
					</Card>

					{/* Physics Card */}
					<Card className="hover:border-sky-400 dark:hover:border-sky-600 transition-all flex flex-col justify-between">
						<div className="space-y-4">
							<div className="flex items-center justify-between">
								{/* <Badge variant="physics">Physics</Badge> */}
								<span className="text-xs font-mono text-slate-400">
									Levels 0 – 7
								</span>
							</div>
							<h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 font-serif">
								Classical Mechanics to Spacetime & Quantum
							</h3>
							<p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
								From 1D constant acceleration kinematics to
								resolved free-body diagrams, work-energy
								integrals, and mechanical conservation laws.
							</p>
							<div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-lg text-center font-serif text-xs text-sky-700 dark:text-sky-300 overflow-x-auto border border-slate-200 dark:border-slate-800">
								{/* <MathRenderer
									math="W_{\text{net}} = \int \vec{F} \cdot d\vec{r} = \Delta K"
									display
								/> */}
							</div>
						</div>
						<div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-4">
							<Link
								to="/topics/phys-foundations-kinematics-1d"
								className="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline flex items-center justify-between"
							>
								<span>Sample Topic: 1D Kinematics</span>
								<ChevronRight className="w-4 h-4" />
							</Link>
						</div>
					</Card>

					{/* Chemistry Card */}
					<Card className="hover:border-emerald-400 dark:hover:border-emerald-600 transition-all flex flex-col justify-between">
						<div className="space-y-4">
							<div className="flex items-center justify-between">
								{/* <Badge variant="chemistry">Chemistry</Badge> */}
								<span className="text-xs font-mono text-slate-400">
									Levels 0 – 7
								</span>
							</div>
							<h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 font-serif">
								Atomic Structure to Molecular Geometry &
								Stoichiometry
							</h3>
							<p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
								Explore electron orbital filling rules, periodic
								trends in electronegativity, 3D VSEPR shapes,
								and mole conservation balances.
							</p>
							<div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-lg text-center font-serif text-xs text-emerald-700 dark:text-emerald-300 overflow-x-auto border border-slate-200 dark:border-slate-800">
								{/* <MathRenderer
									math="\ce{2 Al + Fe2O3 -> Al2O3 + 2 Fe}"
									display
								/> */}
							</div>
						</div>
						<div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-4">
							<Link
								to="/topics/chem-atomic-structure-periodic-trends"
								className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center justify-between"
							>
								<span>Sample Topic: Atomic Structure</span>
								<ChevronRight className="w-4 h-4" />
							</Link>
						</div>
					</Card>
				</div>
			</section>

			{/* The 8-Stage Architecture */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-100/70 dark:bg-slate-900/60 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800">
				<div className="text-center space-y-2 mb-10">
					<h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 font-serif">
						The Eight-Stage Pedagogical Flow
					</h2>
					<p className="text-sm text-slate-500 max-w-xl mx-auto">
						Every playable topic enforces the exact same verifiable
						progression. The server prevents skipping ahead while
						preserving past achievements.
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
					{[
						{
							step: 1,
							title: "Concept Hook",
							desc: "Why the principle matters, prerequisite recall, and explicit objectives.",
						},
						{
							step: 2,
							title: "Deep Explanation",
							desc: "Formal mathematical derivations, core formulas, and glossary nomenclature.",
						},
						{
							step: 3,
							title: "Worked Examples",
							desc: "Fully solved step-by-step problems with stated assumptions and units.",
						},
						{
							step: 4,
							title: "Guided Practice",
							desc: "Auto-graded questions with a 3-tier graduated hint ladder (Nudge → Strategy → Full Solution).",
						},
						{
							step: 5,
							title: "Challenge Problem",
							desc: "Multi-step synthetic problems with a self-check analytical rubric.",
						},
						{
							step: 6,
							title: "Formal Assessment",
							desc: "10 server-graded questions with an 80% pass gate and targeted remediation.",
						},
						{
							step: 7,
							title: "Mastery Verification",
							desc: "Distinct synthesis problem with tolerance, units, and verified reasoning.",
						},
						{
							step: 8,
							title: "Next Milestones",
							desc: "Immediate celebration and unlocking of dependent curriculum gates.",
						},
					].map((st) => (
						<div
							key={st.step}
							className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2 shadow-xs"
						>
							<div className="flex items-center gap-2">
								<span className="w-6 h-6 rounded-full bg-indigo-600 text-white font-mono text-xs font-bold flex items-center justify-center">
									{st.step}
								</span>
								<span className="font-semibold text-xs text-slate-900 dark:text-slate-100">
									{st.title}
								</span>
							</div>
							<p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
								{st.desc}
							</p>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default HomePage;
