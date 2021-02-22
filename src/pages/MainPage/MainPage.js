import { Grid } from "@material-ui/core";
import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./MainPage.module.css";

const MainPage = () => {
	return (
		<div className={styles.main_page}>
			<Grid container spacing={3}>
				<Grid item md={0} lg={2}>
					<img src="/assets/logo.png" alt="seristo-logo" />
					<Sidebar />
				</Grid>
			</Grid>
		</div>
	);
};

export default MainPage;
