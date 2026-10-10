import { BrowserRouter } from "react-router-dom";
import RouterConfiguration from "./RouteConfiguration.jsx";
// import { ScrollToTop } from "../../shared/index.js";

export function AppRouter() {
	return (
		<BrowserRouter>
			{/* <ScrollToTop /> */}
			<RouterConfiguration />
		</BrowserRouter>
	);
}
