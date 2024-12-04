import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { authRequest } from "../services/auth";
import { loginSchema } from "../schemas/auth";

const LoginPage = () => {
	const nav = useNavigate();
	const {
		handleSubmit,
		reset,
		register,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(loginSchema),
	});

	const handleLogin = async (dataBody) => {
		const data = await authRequest("/login", dataBody);
		if (data.accessToken && confirm("Go back home?")) {
			localStorage.setItem("accessToken", data.accessToken);
			localStorage.setItem("email", data?.user?.email);
			nav("/");
		} else {
			reset();
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit(handleLogin)}>
				<h1>Login</h1>
				<div className="mb-3">
					<label htmlFor="email" className="form-label">
						Email
					</label>
					<input type="email" className="form-control" {...register("email")} />
					{errors?.email && <p className="text-danger">{errors.email?.message}</p>}
				</div>

				<div className="mb-3">
					<label htmlFor="password" className="form-label">
						Password
					</label>
					<input type="password" className="form-control" {...register("password")} />
					{errors?.password && <p className="text-danger">{errors.password?.message}</p>}
				</div>

				<div className="mb-3">
					<Link to="/register">You has not account?</Link>
				</div>

				<div className="mb-3">
					<button className="btn btn-primary w-100">Login</button>
				</div>
			</form>
		</>
	);
};

export default LoginPage;
