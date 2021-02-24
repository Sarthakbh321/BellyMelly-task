import { Grid, Typography } from "@material-ui/core";
import React from "react";
import InputField from "../../InputField/InputField";
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
				<Grid item sm={12} md={7}>
					<div style={{ marginBottom: "40px" }}>
						<Grid container spacing={3}>
							<Grid item xs={12} sm={12} md={6}>
								<Typography
									variant="body1"
									className={styles.field_header}
								>
									Price / entry{" "}
									<span style={{ color: "red" }}>
										{" * "}
									</span>
								</Typography>
								<InputField placeholder="Price / entry" />
							</Grid>
							<Grid item xs={12} sm={12} md={6}>
								<Typography
									variant="body1"
									className={styles.field_header}
								>
									Maximum Participants{" "}
								</Typography>
								<InputField placeholder="Maximum participants" />
							</Grid>
						</Grid>
					</div>
					<div style={{ marginBottom: "40px" }}>
						<Grid container spacing={3}>
							<Grid item xs={12} sm={12} md={6}>
								<Typography
									variant="body1"
									className={styles.field_header}
								>
									Day of Event{" "}
								</Typography>
								<InputField placeholder="Select date" />
							</Grid>
						</Grid>
					</div>
					<div style={{ marginBottom: "40px" }}>
						<Grid container spacing={3}>
							<Grid item xs={12} sm={12} md={6}>
								<Typography
									variant="body1"
									className={styles.field_header}
								>
									Event Duration{" "}
								</Typography>
								<InputField placeholder="1 hr" />
							</Grid>
							<Grid item xs={12} sm={12} md={6}>
								<Typography
									variant="body1"
									className={styles.field_header}
								>
									Event Timings
								</Typography>
								<div style={{ display: "flex" }}>
									<InputField />
									<span
										style={{
											margin: "0 5px",
											display: "inline-flex",
											alignItems: "center",
										}}
									>
										to
									</span>
									<InputField />
								</div>
							</Grid>
						</Grid>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default EventDetails;
