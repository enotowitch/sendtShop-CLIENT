import React from "react"
import usePosts from "../../hooks/usePosts"
import OrderCard from "./OrderCard"

export default function OrderCards() {

	const { all } = usePosts("order")

	return (
		<>
			{all?.map(order => <OrderCard key={order._id} order={order} />)}
		</>
	)
}
