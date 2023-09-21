import React, { useContext } from "react"
import { BRAND_COLOR } from "../../consts"
import { Context } from "../../Context"
import useHeaderIcon from "./useHeaderIcon"
import { Link, useLocation } from "react-router-dom"

// field=cart/likes
export default function HeaderIcon({ children, route, className, field, text }) {

	const { showMenuSet, skipProdsSet } = useContext(Context)
	function onClick() {
		showMenuSet(false) // close mobile menu on header icon click
		skipProdsSet(0)
	}
	const { iconCount } = useHeaderIcon(field)
	const isVisited = useLocation().pathname === route

	return (
		<div className={`headerIcon ${isVisited ? "visited" : ""}`}>
			<div className="fcc wfc">
				<Link to={route} className={`fc aic px05 tdn ${className ? className : ""}`} onClick={onClick}>
					{children}
					<div className="fz12" style={{ color: `${isVisited ? BRAND_COLOR : "white"}` }}>{text}</div>
				</Link>
				{/* show user.cart || user.likes count */}
				{iconCount > 0 && <div className="headerIconCount">{iconCount}</div>}
			</div>
		</div>
	)
}
