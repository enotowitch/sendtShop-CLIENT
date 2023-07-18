import React, { useContext } from "react"
import { Context } from "../../Context"
import Logout from "./Logout"

export default function ProfileInfo() {

	const { user } = useContext(Context)

	return (
		<section className="wS m0a">
			<div className="title">Email: </div>
			<div>{user?.email}</div>

			<Logout />
		</section>
	)
}
