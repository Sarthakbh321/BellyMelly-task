import React from "react";
import styles from "./PageTabs.module.css";

const PageTabs = () => {
	return (
		<div className={styles.page_tabs_div}>
			<div className={`${styles.active} ${styles.page_tab}`}>Listing</div>
			<div className={styles.page_tab}>Checkout</div>
			<div className={styles.page_tab}>Share</div>
		</div>
	);
};

export default PageTabs;
