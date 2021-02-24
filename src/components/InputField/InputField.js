/* eslint-disable react/prop-types */
import { TextField } from "@material-ui/core";
import React from "react";

const InputField = ({ placeholder, area }) => {
	return (
		<TextField
			variant="outlined"
			placeholder={placeholder}
			className="input_field"
			multiline={area}
			rows={4}
		/>
	);
};

export default InputField;
