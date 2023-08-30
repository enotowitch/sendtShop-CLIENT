import React from "react"
import { useContext } from "react"
import { Context } from "../../Context"

export default function ForAdmin({ children }) {

	const { user } = useContext(Context)

	return (
		user?.isAdmin && children
	)
}
