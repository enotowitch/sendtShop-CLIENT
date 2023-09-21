import React from "react"
import OrderCard from "./OrderCard"
import useOrderCards from "./useOrderCards"

export default function OrderCards({ title }) {

	const { orders } = useOrderCards()

	return (
		<>
			<div className="title tac mb">{title}</div>
			{orders?.map(order => <OrderCard key={order._id} order={order} />)}
		</>
	)
}
