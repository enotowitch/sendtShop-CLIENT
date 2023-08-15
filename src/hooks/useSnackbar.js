import { useContext } from "react"
import { Context } from "../Context"

export default function useSnackbar() { // TODO move to snackbar folder

	const { snackbarShowSet, snackbarTextSet, snackbarLinkSet, snackbarLinkTextSet, snackbarLinkTypeSet } = useContext(Context)

	function showSnackbar({ text, link, linkText, linkType = "local" }) { // linkType=local||web
		snackbarShowSet(true)
		snackbarTextSet(text)
		snackbarLinkSet(link)
		snackbarLinkTextSet(linkText)
		snackbarLinkTypeSet(linkType)
	}

	return (
		{ showSnackbar }
	)
}
