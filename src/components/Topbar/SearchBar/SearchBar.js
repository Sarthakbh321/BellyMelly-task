import { TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React, { useState } from "react";

const SearchBar = () => {
	const [text, setText] = useState("");
	return (
		<TextField
			value={text}
			onChange={(e) => setText(e.target.value)}
			placeholder="Search..."
			variant="outlined"
			className="search_bar"
			InputProps={{
				endAdornment: <Search style={{ fill: "#858D95" }} />,
			}}
		/>
	);
};

export default SearchBar;
