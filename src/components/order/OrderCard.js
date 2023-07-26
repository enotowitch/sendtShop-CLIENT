import React from "react"
import { useNavigate } from "react-router-dom"
import { ADMIN_ORDER, ADMIN_ORDERS_NEW, USER_ORDER, USER_ORDERS } from "../../consts"

export default function OrderCard({ order }) {

	const navigate = useNavigate()

	function onClick(order) {
		// order never changes after it's written to DB(it's paid), so can be written to localStorage, to be displayed to admin/user
		localStorage.setItem("order", JSON.stringify(order))
		window.location.pathname === ADMIN_ORDERS_NEW && navigate(ADMIN_ORDER)
		window.location.pathname === USER_ORDERS && navigate(USER_ORDER)
	}

	return (
		<section className="f jcsb m0a mb wM cp" onClick={() => onClick(order)}>
			{/* id */}
			<div className="fc p">
				<div className="fw500">Order id:</div>
				<div className="brand">{order._id}</div>
			</div>
			{/* created */}
			<div className="fc p">
				<div className="fw500">Created:</div>
				<div className="brand">
					{order.createdAt.replace(/T/, " / ").replace(/\..+/, "")}
				</div>
			</div>
			{/* track sent: // !! assuming order only updated when status is changed to "sent" */}
			{order.status === "sent" &&
				<div className="fc p">
					<div className="fw500">Track sent:</div>
					<div className="brand">
						{order.updatedAt.replace(/T/, " / ").replace(/\..+/, "")}
					</div>
				</div>
			}
			{/* quantity */}
			<div className="fc p">
				<div className="fw500">Total quantity:</div>
				<div className="brand">{order.cart.length}</div>
			</div>
		</section>
	)
}
