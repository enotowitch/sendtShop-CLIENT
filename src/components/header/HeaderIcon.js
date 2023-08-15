import React, { cloneElement, useContext } from "react"
import { BRAND_COLOR } from "../../consts"
import { Context } from "../../Context"

// field=cart/likes
export default function HeaderIcon({ children, route, className, field }) {

	const { showMenuSet, user } = useContext(Context)

	function onClick() {
		showMenuSet(false) // close mobile menu on header icon click
	}

	return (
		window.location.pathname === route
			?
			<div className="fcc por wfc">
				<a href={route} className={className} onClick={onClick}>{cloneElement(children, { style: { fill: BRAND_COLOR } })}</a>
				{/* show user.cart || user.likes count */}
				{user?.[field]?.length > 0 &&
					<div className="headerIconCount">{user?.[field]?.length}</div>
				}
			</div>
			:
			<div className="fcc por wfc">
				<a href={route} className={className} onClick={onClick}>{children}</a>
				{/* show user.cart || user.likes count */}
				{user?.[field]?.length > 0 &&
					<div className="headerIconCount">{user?.[field]?.length}</div>
				}
			</div>
	)
}
