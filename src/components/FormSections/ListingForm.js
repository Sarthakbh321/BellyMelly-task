import { Container, Divider } from "@material-ui/core";
import React from "react";
import BasicDetails from "./BasicDetails/BasicDetails";
import ListingTypes from "./ListingTypes/ListingTypes";

const ListingForm = () => {
	return (
		<Container>
			<BasicDetails />
			<Divider />
			<ListingTypes />
		</Container>
	);
};

export default ListingForm;
