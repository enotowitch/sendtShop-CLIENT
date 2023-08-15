import { useContext } from "react"
import { Context } from "../../Context"
import usePosts from "../../hooks/usePosts"
import { ADMIN_ORDERS_NEW, ADMIN_ORDERS_SENT, USER_ORDERS } from "../../consts"

export default function useOrderCards() {

	let { all: allOrders } = usePosts("order")
	const { user } = useContext(Context)

	// show only this user orders
	if (window.location.pathname === USER_ORDERS) {
		// userId in DB ORDER matches this user id
		allOrders = allOrders?.filter(order => order.userId === user?._id)
	}

	// show only admin orders with order.status = "sent"
	if (window.location.pathname === ADMIN_ORDERS_SENT) {
		allOrders = allOrders?.filter(order => order.status === "sent")
	}

	// show only admin orders with order.status = "pending"
	if (window.location.pathname === ADMIN_ORDERS_NEW) {
		allOrders = allOrders?.filter(order => order.status === "pending")
	}

	return (
		{ allOrders }
	)
}
