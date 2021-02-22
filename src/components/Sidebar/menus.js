import React from "react";
import {
	AddCircleOutline,
	CalendarTodayOutlined,
	DashboardOutlined,
	EditOutlined,
	InsertInvitationOutlined,
	PeopleOutline,
	ReorderOutlined,
	SmsOutlined,
	TrendingUpOutlined,
} from "@material-ui/icons";
import styles from "./Sidebar.module.css";

export const menus = [
	{
		name: "Dashboard",
		route: "/dashboard",
		icon: (
			<DashboardOutlined
				style={{ fill: "#DDE1E5" }}
				className={styles.menu_icon}
			/>
		),
	},
	{
		name: "Messages",
		route: "/messages",
		icon: (
			<SmsOutlined
				style={{ fill: "#DDE1E5" }}
				className={styles.menu_icon}
			/>
		),
	},
	{
		name: "Listing",
		route: "/",
		icon: (
			<ReorderOutlined
				style={{ fill: "#DDE1E5" }}
				className={styles.menu_icon}
			/>
		),
		active: true,
	},
	{
		name: "Schedule",
		route: "/schedule",
		icon: (
			<CalendarTodayOutlined
				style={{ fill: "#DDE1E5" }}
				className={styles.menu_icon}
			/>
		),
	},
	{
		name: "Bookings",
		route: "/bookings",
		icon: (
			<InsertInvitationOutlined
				style={{ fill: "#DDE1E5" }}
				className={styles.menu_icon}
			/>
		),
	},
	{
		name: "Customers",
		route: "/customers",
		icon: (
			<PeopleOutline
				style={{ fill: "#DDE1E5" }}
				className={styles.menu_icon}
			/>
		),
	},
	{
		name: "Followers",
		route: "/followers",
		icon: (
			<AddCircleOutline
				style={{ fill: "#DDE1E5" }}
				className={styles.menu_icon}
			/>
		),
	},
	{
		name: "Sales & Analytics",
		route: "/sales",
		icon: (
			<TrendingUpOutlined
				style={{ fill: "#DDE1E5" }}
				className={styles.menu_icon}
			/>
		),
	},
	{
		name: "Edit Page",
		route: "/edit",
		icon: (
			<EditOutlined
				style={{ fill: "#DDE1E5" }}
				className={styles.menu_icon}
			/>
		),
	},
];
