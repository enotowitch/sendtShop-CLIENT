import React, { cloneElement } from "react"
import { Link, useLocation } from "react-router-dom"
import { BRAND_COLOR } from "../../consts"

export default function HeaderIcon({ children, route }) {

	const { pathname } = useLocation()

	return (
		pathname === route
			?
			<Link to={route}>{cloneElement(children, { style: { fill: BRAND_COLOR } })}</Link>
			:
			<Link to={route}>{children}</Link>
	)
}
