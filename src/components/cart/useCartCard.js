import usePullPush from "../../hooks/usePullPush"
import useAnimation from "../../hooks/useAnimation"

export default function useCartCard(obj) {

	const { _id, size, color } = obj
	const cartProduct = { _id, size, color }

	const { pullPush } = usePullPush()
	const { deleteAnimation } = useAnimation()

	async function deleteAllCartProducts(e) {
		const res = await pullPush({ col: "user", field: "cart", item: cartProduct, action: "pull", pullMode: "all" })
		deleteAnimation(e, "product")
	}

	return (
		{ deleteAllCartProducts }
	)
}
