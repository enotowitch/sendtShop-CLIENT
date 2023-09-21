import { Button } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"

export default function ButtonLink(props) {

	const { href, children, disabled } = props

	return (
		<Link to={href} className={`tdn ${disabled ? "pin" : ""}`}>
			<Button className={`white ${disabled ? "disabled" : ""}`} {...props}>{children}</Button>
		</Link>
	)
}
