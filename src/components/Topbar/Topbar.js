import {
	Avatar,
	Badge,
	Container,
	IconButton,
	Typography,
} from "@material-ui/core";
import { ArrowDropDown, NotificationsOutlined } from "@material-ui/icons";
import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import styles from "./Topbar.module.css";

const Topbar = () => {
	return (
		<Container className={styles.topbar}>
			<SearchBar />
			<Badge
				badgeContent={9}
				color="secondary"
				style={{ marginRight: "2%" }}
			>
				<NotificationsOutlined
					style={{ fill: "#858D95" }}
					fontSize="large"
				/>
			</Badge>
			<Avatar alt="user-profile" src="/assets/user.svg" />
			<Typography
				variant="body1"
				style={{ margin: "0 1%", fontWeight: 600 }}
			>
				Sofia
			</Typography>
			<IconButton>
				<ArrowDropDown style={{ fill: "#ADB5BD" }} />
			</IconButton>
		</Container>
	);
};

export default Topbar;
