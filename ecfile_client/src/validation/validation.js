import * as Yup from "yup";

const validationSchema = Yup.object().shape({
	companyName: Yup.string()
		.min(4, "Company name must be at least 4 characters")
		.required("Company name required"),
	email: Yup.string()
		.email("Invalid email address")
		.required("Enter your email"),
	phone: Yup.string()
		.matches(/^[0-9]{10}$/, "Invalid phone number")
		.required("Enter Phone Number"),
	aadhaar: Yup.string()
		.matches(/^\d{12}$/, "Invalid Aadhaar number")
		.required("Enter Aadhaar Number"),
	pan: Yup.string()
		.matches(/^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/, "Invalid PAN card number")
		.required("Enter PAN Number")
});

export default validationSchema;
