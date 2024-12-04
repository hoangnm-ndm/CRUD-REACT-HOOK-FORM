import React from "react";
import HeaderAdmin from "./HeaderAdmin";
import FooterAdmin from "./FooterAdmin";
import { Outlet } from "react-router-dom";

const LayoutAdmin = () => {
	return (
		<>
			<HeaderAdmin />
			<Outlet />
			<FooterAdmin />
		</>
	);
};

export default LayoutAdmin;
