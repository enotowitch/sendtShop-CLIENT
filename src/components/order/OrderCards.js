import React from "react"
import OrderCard from "./OrderCard"
import useOrderCards from "./useOrderCards"

export default function OrderCards({ title }) {

	const { allOrders } = useOrderCards()

	return (
		<>
			<div className="title tac mb">{title}</div>
			{allOrders?.map(order => <OrderCard key={order._id} order={order} />)}
		</>
	)
}
