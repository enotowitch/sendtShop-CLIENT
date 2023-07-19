import usePullPush from "../../hooks/usePullPush"
import useAnimation from "../../hooks/useAnimation"

export default function useCartCard(productId) {

	// ! deleteAll (products) // TODO rename ?
	const { pullPush } = usePullPush()
	const { deleteAnimation } = useAnimation()

	async function deleteAll(e) {
		const res = await pullPush({ col: "user", field: "cart", item: productId, action: "pull" })
		deleteAnimation(e, "product")
	}

	return (
		{ deleteAll }
	)
}
