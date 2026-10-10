import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<div className="flex flex-col items-center h-screen">
			<div />
			<Outlet />
			<footer className="">
				<p className="text-sm">
					&copy; {new Date().getFullYear()}
					{""} Powered by{""}{" "}
					<a
						href="https://pickaxe-and-shovel.vercel.app"
						target="_blank"
						rel="noopener noreferrer"
						className="cursor-pointer hover:text-blue-600"
					>
						Pickaxe & Shovel
					</a>
				</p>
			</footer>
		</div>
	);
};

export default Layout;
