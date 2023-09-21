import { useContext } from "react"
import { Context } from "../Context"
import { PROFILE_ROUTE } from "../consts"
import { useNavigate } from "react-router-dom"

export default function useNoUser() {

	const { user } = useContext(Context)
	const navigate = useNavigate()

	function noUserRedirect() {
		!user && (navigate(PROFILE_ROUTE))
	}

	return (
		{ noUserRedirect }
	)
}
