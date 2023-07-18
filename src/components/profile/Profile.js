import React, { useContext } from "react"
import { Context } from "../../Context"
import ProfileInfo from "./ProfileInfo"
import Login from "../auth/Login"
import AdminPanel from "./AdminPanel"

export default function Profile() {

	const { user } = useContext(Context)

	return (
		<>
			<AdminPanel />
			{user ? <ProfileInfo /> : <Login />}
		</>
	)
}
