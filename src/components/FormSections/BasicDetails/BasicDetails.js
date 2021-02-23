import { Grid, Typography } from "@material-ui/core";
import React from "react";
import InputField from "../../InputField/InputField";
import styles from "./BasicDetails.module.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Dropzone from "react-dropzone";
import { CloudUploadOutlined } from "@material-ui/icons";

const BasicDetails = () => {
	return (
		<div className={styles.basic_details_page}>
			<Grid container spacing={3}>
				<Grid item sm={12} md={5}>
					<Typography variant="body1" className={styles.field_header}>
						Basic Details
					</Typography>
					<Typography variant="body1" style={{ color: "#858D95" }}>
						Add details about your listing to help customers
						understand the listings better.
					</Typography>
				</Grid>
				<Grid item sm={12} md={7}>
					<div style={{ marginBottom: "40px" }}>
						<Typography
							variant="body1"
							className={styles.field_header}
						>
							Listing Name{" "}
							<span style={{ color: "red" }}>{" * "}</span>
						</Typography>
						<InputField placeholder="Enter listing name" />
					</div>
					<div style={{ marginBottom: "40px" }}>
						<Typography
							variant="body1"
							className={styles.field_header}
						>
							Listing Description{" "}
							<span style={{ color: "red" }}>{" * "}</span>
						</Typography>
						<Editor editorClassName="text-editor" />
					</div>
					<div style={{ marginBottom: "40px" }}>
						<Typography
							variant="body1"
							className={styles.field_header}
						>
							Cover Photo
						</Typography>
						<Typography
							variant="body1"
							style={{ color: "#858D95" }}
						>
							Recommended thumbnail size 800x400 (px).
						</Typography>
						<div className={styles.dropzone}>
							<Dropzone onDrop={console.log("sdsd")}>
								{({ getRootProps, getInputProps }) => (
									<section>
										<div {...getRootProps()}>
											<input {...getInputProps()} />
											<CloudUploadOutlined
												className="drop-icon"
												style={{ fill: "#98A6AD" }}
											/>
											<p
												style={{
													color: "#484F56",
													margin: "0",
												}}
											>
												Drop files here or click to
												upload.
											</p>
										</div>
									</section>
								)}
							</Dropzone>
						</div>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default BasicDetails;
