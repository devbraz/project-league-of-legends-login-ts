import { Route, Routes } from "react-router-dom";

import { Login } from "../pages/Login";

export const MainRoutes = () => {
	return (
		<Routes>
			<Route exact path="/login" component={Login} />
		</Routes>
	);
};
