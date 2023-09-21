import { useContext } from "react"
import { Context } from "../../Context"
import { Link } from "react-router-dom"

export default function SnackbarMessage() {

	const { snackbarText, snackbarLink, snackbarLinkText, snackbarLinkType } = useContext(Context)

	// snackbarLinkType=web||local
	const href = snackbarLinkType === "web" ? `http://${snackbarLink}` : `${snackbarLink}`

	return (
		snackbarLinkType === "web"
			?
			<>{snackbarText}<a target="blank_" href={href}>{snackbarLinkText}</a></>
			:
			<>{snackbarText}<Link to={href}>{snackbarLinkText}</Link></>
	)
}
