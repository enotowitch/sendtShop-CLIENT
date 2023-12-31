import { Context } from "../../Context"
import { useContext } from "react"
import { ADMIN_ORDER_NEW, ADMIN_ORDER_SENT, ADMIN_ORDER_NEW_SHIPPING, USER_ORDER, ADMIN_ORDER_SENT_SHIPPING, CART_ROUTE, USER_ORDER_SHIPPING, CART_SHIPPING } from "../../consts"
import usePullPush from "../../hooks/usePullPush"
import usePostFull from "../../hooks/usePostFull"
import useNoUser from "../../hooks/useNoUser"

// `user` and (admin) `order` both have `cart` field (array of prod ids), so can be rendered in similar way
// = `user` and (admin) `order` = userOrOrder(object)
export default function useUserOrOrderCart() {

	const { user } = useContext(Context)
	const { pullPush } = usePullPush()
	const { noUserRedirect } = useNoUser()

	// get order from orderId
	const orderId = localStorage.getItem("orderId")
	const { fullPost: order } = usePostFull("order", orderId)

	let userOrOrder, varLink, varLink2, className, varText, varBtnText, varBtnText2, varBtnFn
	// ! user cart
	if (window.location.pathname.includes(CART_ROUTE)) {
		userOrOrder = user ? user : JSON.parse(localStorage.getItem("user")) // if no user use localStorage cart
		varLink = CART_SHIPPING
		varText = "* Additional taxes and fees will be calculated at checkout"
		varBtnText = "CONTINUE TO SHIPPING"
		varBtnFn = () => noUserRedirect()
	}
	// ! admin order (NEW): one user order (of many users' orders) managed by admin
	if (window.location.pathname.includes(ADMIN_ORDER_NEW)) { // !!
		// order never changes after it's written to DB, so can be written to localStorage, to be displayed to admin
		userOrOrder = order
		varLink = ADMIN_ORDER_NEW_SHIPPING
		className = "hideSvg"
		varText = "Deliver these products using shipping info and send email with tracking link to user"
		varBtnText = "USER SHIPPING INFO"
	}
	// ! admin order (SENT): one user order (of many users' orders) managed by admin
	if (window.location.pathname.includes(ADMIN_ORDER_SENT)) { // !!
		// order never changes after it's written to DB, so can be written to localStorage, to be displayed to admin
		userOrOrder = order
		varLink = ADMIN_ORDER_SENT_SHIPPING
		className = "hideSvg"
		varText = "Check where the order was shipped"
		varBtnText = "SHIPPED TO"
	}
	// ! user order: one PREVIOUS user order managed by user
	if (window.location.pathname.includes(USER_ORDER)) { // !!
		// order never changes after it's written to DB, so can be written to localStorage, to be displayed to user
		userOrOrder = order
		varLink = CART_ROUTE
		// user clicks on orderCard (one prev order) => prev order info is written to localStorage(order)
		// then if user clicks REPEAT ORDER => prev order info is written to user.cart (DB), so user can pay and order same order again
		const repeatUserOrderCart = userOrOrder?.cart // [prodId1,prodId2...]
		varBtnFn = () => pullPush({ col: "user", field: "cart", item: repeatUserOrderCart, action: "push" })
		className = "hideSvg"
		varText = "By clicking `order again` products in this previous order will be added to your cart. You will be able to modify this new order or order the same"
		varBtnText = "ORDER AGAIN"
		// user previous order has 2 buttons
		varLink2 = USER_ORDER_SHIPPING
		varBtnText2 = "CHECK SHIPPING INFO"
	}

	return (
		{ userOrOrder, varLink, varLink2, className, varText, varBtnText, varBtnText2, varBtnFn }
	)
}
