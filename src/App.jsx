import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/admin/Dashboard";
import ProductTable from "./pages/admin/ProductTable";
import ProductForm from "./pages/admin/ProductForm";
import NotFoundPage from "./pages/NotFoundPage";
import LayoutAdmin from "./components/layouts/LayoutAdmin";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import LayoutClient from "./components/layouts/LayoutClient";

function App() {
	return (
		<>
			<Routes>
				{/* client layout */}
				<Route path="/" element={<LayoutClient />}>
					<Route index element={<HomePage />} />
				</Route>

				{/* admin layout */}
				<Route path="/admin" element={<LayoutAdmin />}>
					<Route index element={<Dashboard />} />
					<Route path="products" element={<ProductTable />} />
					<Route path="products/add" element={<ProductForm />} />
					<Route path="products/update/:id" element={<ProductForm />} />
				</Route>

				{/* empty layout */}
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</>
	);
}

export default App;
