import React, { cloneElement, useContext } from "react"
import { BRAND_COLOR } from "../../consts"
import { Context } from "../../Context"
import useHeaderIcon from "./useHeaderIcon"
import { Link } from "react-router-dom"

// field=cart/likes
export default function HeaderIcon({ children, route, className, field }) {

	const { showMenuSet } = useContext(Context)
	function onClick() { showMenuSet(false) } // close mobile menu on header icon click
	const { iconCount } = useHeaderIcon(field)

	return (
		window.location.pathname === route
			?
			<div className="fcc por wfc">
				<Link to={route} className={className} onClick={onClick}>{cloneElement(children, { style: { fill: BRAND_COLOR } })}</Link>
				{/* show user.cart || user.likes count */}
				{iconCount > 0 &&
					<div className="headerIconCount">{iconCount}</div>
				}
			</div>
			:
			<div className="fcc por wfc">
				<Link to={route} className={className} onClick={onClick}>{children}</Link>
				{/* show user.cart || user.likes count */}
				{iconCount > 0 &&
					<div className="headerIconCount">{iconCount}</div>
				}
			</div>
	)
}
