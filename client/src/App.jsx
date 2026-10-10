import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";

const App = () => {
	const AuthenticatedApp = () => {
		return (
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		);
	};

	return (
		<Router>
			<AuthenticatedApp />
		</Router>
	);
};

export default App;
