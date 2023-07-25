import React, { useContext } from "react"
import usePosts from "../../hooks/usePosts"
import OrderCard from "./OrderCard"
import { Context } from "../../Context"
import { USER_ORDERS } from "../../consts"

export default function OrderCards({ title }) {

	let { all } = usePosts("order")

	// show only this user orders
	const { user } = useContext(Context)
	if (window.location.pathname === USER_ORDERS) {
		// userId in DB ORDER matches this user id
		all = all?.filter(order => order.userId === user?._id)
	}

	return (
		<>
			<div className="title tac mb">{title}</div>
			{all?.map(order => <OrderCard key={order._id} order={order} />)}
		</>
	)
}
