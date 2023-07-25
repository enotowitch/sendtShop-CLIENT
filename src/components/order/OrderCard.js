import React from "react"
import { useNavigate } from "react-router-dom"
import { ADMIN_ORDER, ADMIN_ORDERS, USER_ORDER, USER_ORDERS } from "../../consts"

export default function OrderCard({ order }) {

	const navigate = useNavigate()

	function onClick(order) {
		// order never changes after it's written to DB(it's paid), so can be written to localStorage, to be displayed to admin/user
		localStorage.setItem("order", JSON.stringify(order))
		window.location.pathname === ADMIN_ORDERS && navigate(ADMIN_ORDER)
		window.location.pathname === USER_ORDERS && navigate(USER_ORDER)
	}

	return (
		<section className="f jcsb m0a mb wM cp" onClick={() => onClick(order)}>
			<div className="fc p">
				<div className="fw500">Order id:</div>
				<div className="brand">{order._id}</div>
			</div>
			<div className="fc p">
				<div className="fw500">Created:</div>
				<div className="brand">
					{order.createdAt.replace(/T/, " / ").replace(/\..+/, "")}
				</div>
			</div>
			<div className="fc p">
				<div className="fw500">Total quantity:</div>
				<div className="brand">{order.cart.length}</div>
			</div>
		</section>
	)
}
