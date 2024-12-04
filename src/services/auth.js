// login

import instance from ".";

// register

export const registerAccount = async (dataBody) => {
	try {
		const { data } = await instance.post("/register", dataBody);
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const loginAccount = async (dataBody) => {
	try {
		const { data } = await instance.post("/login", dataBody);
		return data;
	} catch (error) {
		console.log(error);
	}
};

// Cach 2:
export const authRequest = async (path, dataBody) => {
	try {
		const { data } = await instance.post(path, dataBody);
		return data;
	} catch (error) {
		console.log(error);
		alert(error?.response?.data || "Register failed!!!");
	}
};
