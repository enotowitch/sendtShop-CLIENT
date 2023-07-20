import { Context } from "../../Context"
import { useContext } from "react"

// `user` and (admin) `order` both have `cart` field (array of prod ids), so can be rendered in similar way
// = `user` and (admin) `order` = userOrOrder(array)
export default function useUserOrOrderCart() {

	const { user } = useContext(Context)

	let userOrOrder, link, className, text
	if (window.location.pathname.includes("/cart")) { // !!
		userOrOrder = user
		link = "/cart/shipping"
		text = "* Additional taxes and fees will be calculated at checkout"
	}
	if (window.location.pathname.includes("/order")) { // !!
		// order never changes after it's written to DB, so can be written to localStorage, to be displayed to admin
		userOrOrder = JSON.parse(localStorage.getItem("order"))
		link = "/order/shipping"
		className = "orderCard" // !! hide all (svg) icons in CartCard via style .orderCard: .cartCard => with icons; .orderCard => NO icons
		// text = "Deliver these products using shipping info and send email with tracking link to user" // TODO
		text = "* some text here"
	}

	return (
		{ userOrOrder, link, className, text }
	)
}
