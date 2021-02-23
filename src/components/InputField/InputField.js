/* eslint-disable react/prop-types */
import { TextField } from "@material-ui/core";
import React from "react";

const InputField = ({ placeholder }) => {
	return (
		<TextField
			variant="outlined"
			placeholder={placeholder}
			className="input_field"
		/>
	);
};

export default InputField;
