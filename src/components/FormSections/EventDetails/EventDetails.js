import { Grid, Typography } from "@material-ui/core";
import React from "react";
import styles from "./EventDetails.module.css";

const EventDetails = () => {
	return (
		<div>
			<Grid container spacing={3}>
				<Grid item sm={12} md={5}>
					<Typography variant="body1" className={styles.field_header}>
						Event Details
					</Typography>
					<Typography variant="body1" style={{ color: "#858D95" }}>
						Basic Details for your listing descriptions
					</Typography>
				</Grid>
				<Grid item sm={12} md={7}></Grid>
			</Grid>
		</div>
	);
};

export default EventDetails;
