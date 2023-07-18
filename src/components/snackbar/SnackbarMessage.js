import { useContext } from "react"
import { Context } from "../../Context"

export default function SnackbarMessage() {

	const { snackbarText, snackbarLink, snackbarLinkType } = useContext(Context)

	// snackbarLinkType=web||local
	const href = snackbarLinkType === "web" ? `http://${snackbarLink}` : `/${snackbarLink}`

	return (
		<>{snackbarText}<a target="blank_" href={href}>{snackbarLink}</a></>
	)
}
