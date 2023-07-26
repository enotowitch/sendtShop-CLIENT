import { ADMIN_ORDER_NEW, ADMIN_ORDER_SENT, CART_ROUTE } from "../../consts"

export default function useCartSteps() {

	let varText1, varText2, varText3, showSteps // don't show steps in USER_ORDERS
	// ! user cart
	if (window.location.pathname.includes(CART_ROUTE)) {
		varText1 = "Cart"
		varText2 = "Shipping"
		varText3 = "Checkout"
		showSteps = true
	}
	// ! admin order (NEW)
	if (window.location.pathname.includes(ADMIN_ORDER_NEW)) {
		varText1 = "Products"
		varText2 = "Shipping"
		varText3 = "Send track"
		showSteps = true
	}
	// ! admin order (SENT)
	if (window.location.pathname.includes(ADMIN_ORDER_SENT)) {
		varText1 = "Sent products"
		varText2 = "Shipped to"
		varText3 = "Resend track"
		showSteps = true
	}

	return (
		{ varText1, varText2, varText3, showSteps }
	)
}
