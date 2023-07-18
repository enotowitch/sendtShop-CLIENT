import { useContext } from "react";
import { Context } from "../../Context"
import Snackbar from "@mui/material/Snackbar";
import "./index.scss"
import SnackbarMessage from "./SnackbarMessage";
import SnackbarAction from "./SnackbarAction";

export default function _Snackbar() {

	const { snackbarShow, snackbarShowSet } = useContext(Context)

	return (
		snackbarShow &&
		<div>
			<Snackbar
				open={snackbarShow}
				// autoHideDuration={6000}
				onClose={() => snackbarShowSet(false)}
				message={<SnackbarMessage />}
				action={<SnackbarAction />}
			/>
		</div>
	);
}