import { Grid, Typography } from "@material-ui/core";
import React from "react";
import styles from "./BasicDetails.module.css";

const BasicDetails = () => {
	return (
		<div className={styles.basic_details_page}>
			<Grid container spacing={3}>
				<Grid item sm={12} md={5}>
					<Typography variant="body1" className={styles.field_header}>
						Basic Details
					</Typography>
					<Typography variant="body1" style={{ color: "#858D95" }}>
						Add details about your listing to help customers
						understand the listings better.
					</Typography>
				</Grid>
				<Grid item sm={12} md={7}>
					<Typography variant="body1" className={styles.field_header}>
						Listing Name{" "}
						<span style={{ color: "red" }}>{" * "}</span>
					</Typography>
				</Grid>
			</Grid>
		</div>
	);
};

export default BasicDetails;
