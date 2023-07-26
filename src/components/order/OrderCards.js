import React, { useContext } from "react"
import usePosts from "../../hooks/usePosts"
import OrderCard from "./OrderCard"
import { Context } from "../../Context"
import { ADMIN_ORDERS_NEW, ADMIN_ORDERS_SENT, USER_ORDERS } from "../../consts"

export default function OrderCards({ title }) {

	let { all } = usePosts("order")
	const { user } = useContext(Context)

	// show only this user orders
	if (window.location.pathname === USER_ORDERS) {
		// userId in DB ORDER matches this user id
		all = all?.filter(order => order.userId === user?._id)
	}

	// show only admin orders with order.status = "sent"
	if (window.location.pathname === ADMIN_ORDERS_SENT) {
		all = all?.filter(order => order.status === "sent")
	}

	// show only admin orders with no status = `NEW ORDERS`
	if (window.location.pathname === ADMIN_ORDERS_NEW) {
		all = all?.filter(order => !order.status)
	}

	return (
		<>
			<div className="title tac mb">{title}</div>
			{all?.map(order => <OrderCard key={order._id} order={order} />)}
		</>
	)
}
