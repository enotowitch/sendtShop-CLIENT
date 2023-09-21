import { useContext } from "react"
import { Context } from "../Context"
import { useLocation } from "react-router-dom"
import { PROFILE_ROUTE } from "../consts"

export default function useSnackbar() { // TODO move to snackbar folder

	const { snackbarShowSet, snackbarTextSet, snackbarLinkSet, snackbarLinkTextSet, snackbarLinkTypeSet, user } = useContext(Context)
	const location = useLocation().pathname

	function showSnackbar({ text, link, linkText, linkType = "local" }) { // linkType=local||web
		if (!user && location !== PROFILE_ROUTE) return // !! if no user show snackbar only in profile page: for auth snackbar
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
