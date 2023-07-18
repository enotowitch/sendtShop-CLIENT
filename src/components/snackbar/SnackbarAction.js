import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useContext } from "react";
import { Context } from "../../Context";

export default function SnackbarAction() {

	const { snackbarShowSet } = useContext(Context)

	return (
		<>
			<IconButton
				size="small"
				aria-label="close"
				color="inherit"
				onClick={() => snackbarShowSet(false)}
			>
				<CloseIcon fontSize="small" />
			</IconButton>
		</>
	)
}