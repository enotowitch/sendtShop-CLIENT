import { useContext } from "react"
import { Context } from "../../Context"
import { ADMIN_ORDERS_NEW, ADMIN_ORDERS_SENT, USER_ORDERS_NEW, USER_ORDERS_SENT } from "../../consts"
import usePosts from "../../hooks/usePosts"

export default function useOrderCards() {

	let { user } = useContext(Context)
	let { all: orders } = usePosts("order")

	// show only this USER NEW orders
	if (window.location.pathname === USER_ORDERS_NEW) {
		// userId in DB ORDER matches this user id
		orders = orders?.filter(order => order.userId === user?._id && order.status === "pending")
	}

	// show only this USER SENT orders
	if (window.location.pathname === USER_ORDERS_SENT) {
		// userId in DB ORDER matches this user id
		orders = orders?.filter(order => order.userId === user?._id && order.status === "sent")
	}

	// show only ADMIN NEW orders
	if (window.location.pathname === ADMIN_ORDERS_NEW) {
		orders = orders?.filter(order => order.status === "pending")
	}

	// show only ADMIN SENT orders
	if (window.location.pathname === ADMIN_ORDERS_SENT) {
		orders = orders?.filter(order => order.status === "sent")
	}

	return (
		{ orders }
	)
}
