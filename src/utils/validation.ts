interface FormData {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	confirmPassword: string;
}

interface FormErrors {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	confirmPassword: string;
}

export const validateForm = (formData: FormData): { valid: boolean; errors: FormErrors } => {
	let valid = true;
	let errors = { firstName: "", lastName: "", email: "", password: "", confirmPassword: "" };

	if (!formData.firstName) {
		errors.firstName = "First name is required";
		valid = false;
	}

	if (!formData.lastName) {
		errors.lastName = "Last name is required";
		valid = false;
	}

	if (!formData.email) {
		errors.email = "Email is required";
		valid = false;
	} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
		errors.email = "Email is invalid";
		valid = false;
	}

	if (!formData.password) {
		errors.password = "Password is required";
		valid = false;
	} else if (formData.password.length < 6) {
		errors.password = "Password must be at least 6 characters";
		valid = false;
	}

	if (!formData.confirmPassword) {
		errors.confirmPassword = "Confirm Password is required";
		valid = false;
	} else if (formData.confirmPassword !== formData.password) {
		errors.confirmPassword = "Passwords do not match";
		valid = false;
	}

	return { valid, errors };
};
