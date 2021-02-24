import {
	FormControl,
	FormControlLabel,
	Grid,
	Radio,
	RadioGroup,
	TextField,
	Typography,
} from "@material-ui/core";
import React from "react";
import ActionButton from "../../ActionButton/ActionButton";
import styles from "./Delivery.module.css";

const Delivery = () => {
	return (
		<div className={styles.delivery_form_div}>
			<Grid container spacing={3}>
				<Grid item sm={12} md={5}>
					<Typography variant="body1" className={styles.field_header}>
						Choose Delivery Mode
					</Typography>
					<Typography variant="body1" style={{ color: "#858D95" }}>
						Basic Details for your listing descriptions
					</Typography>
				</Grid>
				<Grid item sm={12} md={7}>
					<Typography variant="body1" className={styles.field_header}>
						Service Delivery
						<span style={{ color: "red" }}>{" * "}</span>
					</Typography>
					<FormControl component="fieldset" style={{ width: "100%" }}>
						<RadioGroup
							aria-label="event_type"
							name="event_type"
							value="offline"
						>
							<Grid container spacing={3}>
								<Grid item xs={6}>
									<FormControlLabel
										value="online"
										control={<Radio color="primary" />}
										label="Online"
									/>
								</Grid>
								<Grid item xs={6}>
									<FormControlLabel
										value="offline"
										control={<Radio color="primary" />}
										label="Offline"
									/>
									<Typography
										variant="body1"
										style={{ color: "#484F56" }}
									>
										Enter Address
									</Typography>
									<TextField
										multiline
										rows={4}
										variant="outlined"
										style={{ width: "100%" }}
									/>
								</Grid>
							</Grid>
						</RadioGroup>
					</FormControl>
					<div className={styles.btn_div}>
						<ActionButton primary text="Next" />
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default Delivery;
