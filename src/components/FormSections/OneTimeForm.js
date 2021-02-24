import { Container, Divider } from "@material-ui/core";
import React from "react";
import Delivery from "./Delivery/Delivery";
import EventDetails from "./EventDetails/EventDetails";

const OneTimeForm = () => {
	return (
		<Container>
			<EventDetails />
			<Divider />
			<Delivery />
		</Container>
	);
};

export default OneTimeForm;
