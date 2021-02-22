import { Typography } from "@material-ui/core";
import React from "react";
import { menus } from "./menus";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
	return (
		<div className={styles.sidemenu}>
			{menus.map((menuItem, i) => (
				<div
					className={`${styles.menu_item} ${
						menuItem.active ? styles.active : null
					}`}
					key={i}
				>
					{menuItem.icon}{" "}
					<Typography variant="body1">{menuItem.name}</Typography>
				</div>
			))}
		</div>
	);
};

export default Sidebar;
