import React from "react"
import { useNavigate } from "react-router-dom"

export default function OrderCard({ orders }) {

	const navigate = useNavigate()

	function onClick(order) {
		// order never changes after it's written to DB, so can be written to localStorage, to be displayed to admin
		localStorage.setItem("order", JSON.stringify(order))
		navigate("/order")
	}

	return (
		<>
			{orders?.map(order => (
				<section className="f jcsb m0a mb wM" onClick={() => onClick(order)}>
					<div className="fc">
						<div>Order id:</div>
						<div className="brand">{order._id}</div>
					</div>
					<div className="fc">
						<div>Total quantity:</div>
						<div className="brand">{order.cart.length}</div>
					</div>
				</section>
			))
			}
		</>
	)
}
