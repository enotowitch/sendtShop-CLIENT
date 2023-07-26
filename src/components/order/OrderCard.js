import React from "react"
import { useNavigate } from "react-router-dom"
import { ADMIN_ORDER_NEW, ADMIN_ORDER_SENT, ADMIN_ORDERS_NEW, ADMIN_ORDERS_SENT, USER_ORDER, USER_ORDERS } from "../../consts"
import "./index.scss"

export default function OrderCard({ order }) {

	const navigate = useNavigate()

	function onClick(order) {
		// order never changes after it's written to DB(it's paid), so can be written to localStorage, to be displayed to admin/user
		localStorage.setItem("order", JSON.stringify(order))
		window.location.pathname === ADMIN_ORDERS_NEW && navigate(ADMIN_ORDER_NEW)
		window.location.pathname === ADMIN_ORDERS_SENT && navigate(ADMIN_ORDER_SENT)
		window.location.pathname === USER_ORDERS && navigate(USER_ORDER)
	}

	return (
		<section className="f jcsb m0a mb wM cp" onClick={() => onClick(order)}>
			{/* id */}
			<div className="fc p orderCard__item">
				<div className="fw500">Order id:</div>
				<div className="brand">{order._id}</div>
			</div>
			{/* created */}
			<div className="fc p orderCard__item">
				<div className="fw500">Created:</div>
				<div className="brand">
					{order.createdAt.replace(/T/, " / ").replace(/\..+/, "")}
				</div>
			</div>
			{/* track sent (date): // !! assuming order only updated when status is changed to "sent" */}
			{order.status === "sent" &&
				<div className="fc p orderCard__item">
					<div className="fw500">Track sent:</div>
					<div className="brand">
						{order.updatedAt.replace(/T/, " / ").replace(/\..+/, "")}
					</div>
				</div>
			}
			{/* quantity */}
			<div className="fc p orderCard__item">
				<div className="fw500">Total quantity:</div>
				<div className="brand">{order.cart.length}</div>
			</div>
			{/* order status */}
			{order.status &&
				<div className="fc p orderCard__item">
					<div className="fw500">Order status:</div>
					<div className="brand">
						{order.status}
					</div>
				</div>
			}
		</section>
	)
}
