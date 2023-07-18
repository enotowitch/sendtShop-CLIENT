import { useContext } from "react"
import { Context } from "../Context"

export default function useSnackbar() {

	const { snackbarShowSet, snackbarTextSet, snackbarLinkSet, snackbarLinkTypeSet } = useContext(Context)

	function showSnackbar({ text, link, linkType }) { // linkType=local||web
		snackbarShowSet(true)
		snackbarTextSet(text)
		snackbarLinkSet(link)
		snackbarLinkTypeSet(linkType)
	}

	return (
		{ showSnackbar }
	)
}
