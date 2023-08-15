import { useContext } from "react"
import usePosts from "../../hooks/usePosts"
import { Context } from "../../Context"

export default function useIsOrderedByUser(productId) {

	const { all } = usePosts("order")
	const { user } = useContext(Context)

	let isOrderedByUser = false

	all?.map(order => {
		if (order?.userId === user?._id) {
			order.cart.map(prod => {
				if (prod._id === productId) {
					isOrderedByUser = true
				}
			})
		}
	})

	return (
		{ isOrderedByUser }
	)
}
