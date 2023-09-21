import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { ADMIN_ORDER_NEW, ADMIN_ORDER_SENT, ADMIN_ORDERS_NEW, ADMIN_ORDERS_SENT, USER_ORDER, USER_ORDER_NEW, USER_ORDER_SENT, USER_ORDERS, USER_ORDERS_NEW, USER_ORDERS_SENT } from "../../consts"
import "./index.scss"
import cleanTimestamp from "../../utils/cleanTimestamp"

export default function OrderCard({ order }) {

	const navigate = useNavigate()
	const location = useLocation().pathname
	const { _id, createdAt, status, number } = order

	// TODO ??? refactor
	function onClick(order) {
		// order never changes after it's written to DB(it's paid), so can be written to localStorage, to be displayed to admin/user
		localStorage.setItem("orderId", _id)
		location === ADMIN_ORDERS_NEW && navigate(ADMIN_ORDER_NEW)
		location === ADMIN_ORDERS_SENT && navigate(ADMIN_ORDER_SENT)
		location === USER_ORDERS_NEW && navigate(USER_ORDER_NEW)
		location === USER_ORDERS_SENT && navigate(USER_ORDER_SENT)
		location === USER_ORDERS && navigate(USER_ORDER)
	}

	return (
		<section className="f jcsb m0a mb wM orderCard cardAnim" onClick={() => onClick(order)}>
			{/* number */}
			{(location === ADMIN_ORDERS_NEW || location === ADMIN_ORDERS_SENT) &&
				<div className="fc p orderCard__item">
					<div className="fw500">No.</div>
					<div className="brand">{number}</div>
				</div>
			}
			{/* id */}
			<div className="fc p orderCard__item">
				<div className="fw500">Order id:</div>
				<div className="brand">{_id}</div>
			</div>
			{/* created */}
			<div className="fc p orderCard__item">
				<div className="fw500">Created:</div>
				<div className="brand">
					{cleanTimestamp(createdAt)}
				</div>
			</div>
			{/* order status */}
			{status &&
				<div className="fc p orderCard__item">
					<div className="fw500">Order status:</div>
					<div className="brand">
						{status}
					</div>
				</div>
			}
		</section>
	)
}
