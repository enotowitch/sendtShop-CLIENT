import React, { useContext } from "react"
import usePosts from "../../hooks/usePosts"
import { Context } from "../../Context"
import { useNavigate } from "react-router-dom"

export default function Orders() { // TODO rename to OrderCards

	const { all } = usePosts("order")
	const { orderSet } = useContext(Context)
	const navigate = useNavigate()

	function onClick(order) {
		orderSet(order)
		navigate("/order")
	}

	// TODO ??? when page reloads => lose Context => no orders (in admin panel) 
	return (
		<>
			{all?.map(order => ( // TODO: separate component: OrderCard
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
