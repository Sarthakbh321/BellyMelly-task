import { Container, Typography } from "@material-ui/core";
import { Done, SaveAlt, VisibilityOutlined } from "@material-ui/icons";
import React from "react";
import ActionButton from "../ActionButton/ActionButton";
import styles from "./ActionBar.module.css";

const ActionBar = () => {
	return (
		<Container className={styles.action_bar}>
			<Typography
				variant="h5"
				style={{ color: "#33393F", fontWeight: "bold" }}
			>
				Create New Listing
			</Typography>
			<div className={styles.action_btn_div}>
				<ActionButton
					text="Preview"
					icon={<VisibilityOutlined style={{ fill: "#858D95" }} />}
				/>
				<ActionButton
					text="Save"
					icon={<SaveAlt style={{ fill: "#858D95" }} />}
				/>
				<ActionButton
					text="Publish"
					icon={<Done style={{ fill: "white" }} />}
					primary
				/>
			</div>
		</Container>
	);
};

export default ActionBar;
