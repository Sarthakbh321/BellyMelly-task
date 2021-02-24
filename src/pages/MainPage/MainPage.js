import {
	Container,
	Divider,
	Grid,
	Hidden,
	Typography,
} from "@material-ui/core";
import React from "react";
import ActionBar from "../../components/ActionBar/ActionBar";
import ListingForm from "../../components/FormSections/ListingForm";
import PageTabs from "../../components/PageTabs/PageTabs";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import styles from "./MainPage.module.css";
import OneTimeForm from "../../components/FormSections/OneTimeForm";

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
						<ActionBar />
						<Divider />
						<Container style={{ margin: "3% 0" }}>
							<PageTabs />
							<ListingForm />
						</Container>
					</div>
				</Grid>
				<Hidden smDown>
					<Grid item sm={0} md={2}></Grid>
				</Hidden>
				<Grid item sm={12} md={10}>
					<div className={styles.main_section}>
						<Container>
							<Typography
								variant="h5"
								style={{
									color: "#33393F",
									fontWeight: "bold",
									padding: "3% 0",
								}}
							>
								One Time Event
							</Typography>
						</Container>
						<Divider />
						<Container style={{ margin: "3% 0" }}>
							<OneTimeForm />
						</Container>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default MainPage;
