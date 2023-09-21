import usePullPush from "../../hooks/usePullPush"
import parseFormAddToCart from "../../utils/parseFormAddToCart"
import { useContext } from "react"
import { Context } from "../../Context"

export default function useAddToCart(fullPost) {

	const { pullPush } = usePullPush()
	const { dialogSet, user, prodFullSelectedImgInd } = useContext(Context)

	async function addToCart(e) {
		e.preventDefault()
		let { form } = parseFormAddToCart(e)
		form = { ...form, prodFullSelectedImgInd } // add which img user selected in prod full => to show in cart: eg: color: blue: ind: 1

		if (!user) { // if NO user logged in write cart to localStorage
			let prevUser = JSON.parse(localStorage.getItem("user"))
			const prevUserCart = prevUser?.cart
			prevUser = prevUser ? { ...prevUser, cart: [...prevUserCart, form] } : { cart: [form] }
			localStorage.setItem("user", JSON.stringify(prevUser))
		} else { // if user logged in
			const res = await pullPush({ col: "user", field: "cart", item: form, action: "push", dups: true })
		}


		// make dialog
		const totalPrice = fullPost.price * form.quantity
		dialogSet(prev => ({
			...prev,
			dialogContent: { ...fullPost, ...form, totalPrice },
			dialogContentName: "addedToCart",
			dialogTitle: "Product added to cart",
			dialogShow: true,
			dialogHasButtons: true,
			dialogRightBtnFn: "goToCart",
			dialogRightBtnText: "Go to cart",
			dialogLeftBtnText: "Continue shopping"
		}))
	}

	return (
		{ addToCart }
	)
}
