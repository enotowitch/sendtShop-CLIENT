import React from "react"
import { Button } from "@mui/material"
import useLogin from "../auth/useLogin"

export default function Logout() {

	const { logout } = useLogin()

	return (
		<Button onClick={logout} variant="outlined" className="danger dangerBorder mt">Log out</Button>
	)
}
