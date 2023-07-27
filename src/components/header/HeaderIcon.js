import React, { cloneElement, useContext } from "react"
import { Link, useLocation } from "react-router-dom"
import { BRAND_COLOR } from "../../consts"
import { Context } from "../../Context"

export default function HeaderIcon({ children, route }) {

	const { pathname } = useLocation()
	const { showMenuSet } = useContext(Context) // close mobile menu on header icon click

	return (
		pathname === route
			?
			<Link to={route} onClick={() => showMenuSet(false)}>{cloneElement(children, { style: { fill: BRAND_COLOR } })}</Link>
			:
			<Link to={route} onClick={() => showMenuSet(false)}>{children}</Link>
	)
}
