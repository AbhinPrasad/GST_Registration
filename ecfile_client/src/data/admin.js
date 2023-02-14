export const columns = [
	{ field: "id", headerName: "NO.", width: 70 },
	{ field: "NameOfCompany", headerName: "Name of Company", width: 270 },
	{ field: "service", headerName: "Service Type", width: 230 },
	{
		field: "amount",
		headerName: "Amount",
		type: "number",
		width: 150
	},
	{ field: "email", headerName: "Email", width: 230 },

	{
		field: "age",
		headerName: "Phone",
		type: "number",
		width: 150
	},
	{
		field: "aadhaar",
		headerName: "Aadhaar No.",
		type: "number",
		width: 150
	},
	{
		field: "pan",
		headerName: "PAN",
		type: "number",
		width: 150
	}
];

export const rows = [
	{ id: 1, NameOfCompany: "Snow", service: "Jon", age: 35 },
	{ id: 2, NameOfCompany: "Lannister", firstName: "Cersei", age: 42 },
	{ id: 3, NameOfCompany: "Lannister", firstName: "Jaime", age: 45 },
	{ id: 4, NameOfCompany: "Stark", firstName: "Arya", age: 16 },
	{ id: 5, NameOfCompany: "Targaryen", firstName: "Daenerys", age: null },
	{ id: 6, NameOfCompany: "Melisandre", firstName: null, age: 150 },
	{ id: 7, NameOfCompany: "Clifford", firstName: "Ferrara", age: 44 },
	{ id: 8, NameOfCompany: "Frances", firstName: "Rossini", age: 36 },
	{ id: 9, NameOfCompany: "Roxie", firstName: "Harvey", age: 65 }
];
