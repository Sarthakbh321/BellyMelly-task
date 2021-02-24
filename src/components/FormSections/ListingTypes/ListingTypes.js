import {
	FormControl,
	FormControlLabel,
	Grid,
	Radio,
	RadioGroup,
	Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import styles from "./ListingTypes.module.css";

const ListingTypes = () => {
	const [selected, setSelected] = useState(null);
	return (
		<div className={styles.listing_types_div}>
			<Grid container spacing={3}>
				<Grid item sm={12} md={5}>
					<Typography variant="body1" className={styles.field_header}>
						Choose Listing Type
					</Typography>
					<Typography variant="body1" style={{ color: "#858D95" }}>
						Basic Details for your listing descriptions
					</Typography>
				</Grid>
				<Grid item sm={12} md={7}>
					<FormControl component="fieldset" style={{ width: "100%" }}>
						<RadioGroup
							aria-label="event_type"
							name="event_type"
							value={selected}
							onChange={(e) => setSelected(e.target.value)}
						>
							<Grid container spacing={3}>
								<Grid item sm={12} md={6}>
									<div
										style={{ display: "flex" }}
										className={styles.radio_option}
									>
										<FormControlLabel
											value="time_bound"
											control={<Radio color="primary" />}
										/>
										<div>
											<Typography
												variant="body1"
												className={styles.field_header}
											>
												Time Bound Service
											</Typography>
											<Typography
												variant="body1"
												style={{ color: "#858D95" }}
											>
												For 1x1 consultation
											</Typography>
										</div>
									</div>
								</Grid>
								<Grid item sm={12} md={6}>
									<div
										style={{ display: "flex" }}
										className={styles.radio_option}
									>
										<FormControlLabel
											value="one_time"
											control={<Radio color="primary" />}
										/>
										<div>
											<Typography
												variant="body1"
												className={styles.field_header}
											>
												One Time Event
											</Typography>
											<Typography
												variant="body1"
												style={{ color: "#858D95" }}
											>
												For hosting exclusive webinars/
												special learning sessions
											</Typography>
										</div>
									</div>
								</Grid>
								<Grid item sm={12} md={6}>
									<div
										style={{ display: "flex" }}
										className={styles.radio_option}
									>
										<FormControlLabel
											value="project_based"
											control={<Radio color="primary" />}
										/>
										<div>
											<Typography
												variant="body1"
												className={styles.field_header}
											>
												Project Based Service
											</Typography>
											<Typography
												variant="body1"
												style={{ color: "#858D95" }}
											>
												For outcome driven service Ex:
												Website Redesign
											</Typography>
										</div>
									</div>
								</Grid>

								<Grid item sm={12} md={6}>
									<div
										style={{ display: "flex" }}
										className={styles.radio_option}
									>
										<FormControlLabel
											value="membership"
											control={<Radio color="primary" />}
										/>
										<div>
											<Typography
												variant="body1"
												className={styles.field_header}
											>
												Membership
											</Typography>
											<Typography
												variant="body1"
												style={{ color: "#858D95" }}
											>
												For monthly teaching clsses
												(1x1/ many), once a week, twice
												a week etc class
											</Typography>
										</div>
									</div>
								</Grid>
							</Grid>
						</RadioGroup>
					</FormControl>
				</Grid>
			</Grid>
		</div>
	);
};

export default ListingTypes;
