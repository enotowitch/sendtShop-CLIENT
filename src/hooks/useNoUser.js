import { useContext } from "react"
import { Context } from "../Context"
import { PROFILE_ROUTE } from "../consts"

export default function useNoUser() {

	const { user } = useContext(Context)

	function noUserRedirect() {
		!user && (window.location.href = PROFILE_ROUTE)
	}

	return (
		{ noUserRedirect }
	)
}
