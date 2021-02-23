/* eslint-disable react/prop-types */
import React from "react";
import styles from "./ActionButton.module.css";

const ActionButton = ({ icon, text, primary }) => {
	return (
		<button
			className={`${styles.button} ${
				primary ? styles.primary : styles.secondary
			}`}
		>
			<span className={styles.icon_span}>{icon}</span> {text}
		</button>
	);
};

export default ActionButton;
