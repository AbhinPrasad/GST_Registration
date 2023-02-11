import * as Yup from "yup";

const validationSchema = Yup.object().shape({
	companyName: Yup.string()
		.min(4, "Company name must be at least 4 characters")
		.required("Company name required"),
	email: Yup.string()
		.email("Invalid email address")
		.required("Email is required"),
	phone: Yup.number()
		// .min(10, "Phone number must be at least 10 characters")
		// .max(10,"Phone number cannot exceed 10 characters")
		.required("Password is required"),
	aadhaar: Yup.number()
		// .min(14, "Aadhaar must be 14 characters")
		// .max(14, "Aadhaar must be 14 characters")
		.required("Aadhaar number is required"),
	pan: Yup.number()
		// .min(10, "PAN must be 14 characters")
		// .max(10, "PAN cannot exceed 14 characters")
        .required("PAN number is required")
});

export default validationSchema;
