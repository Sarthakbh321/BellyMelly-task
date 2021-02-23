import { Divider, Grid, Hidden } from "@material-ui/core";
import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import styles from "./MainPage.module.css";

const MainPage = () => {
	return (
		<div className={styles.main_page}>
			<Grid container spacing={3}>
				<Hidden smDown>
					<Grid item sm={0} md={2}>
						<img src="/assets/logo.png" alt="seristo-logo" />
						<Sidebar />
					</Grid>
				</Hidden>
				<Grid item sm={12} md={10}>
					<div className={styles.main_section}>
						<Topbar />
						<Divider />
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default MainPage;
