import usePullPush from "../../hooks/usePullPush"
import useAnimation from "../../hooks/useAnimation"

export default function useCartCard(productId) {

	const { pullPush } = usePullPush()
	const { deleteAnimation } = useAnimation()

	async function deleteAll(e) {
		const res = await pullPush({ col: "user", field: "cart", item: productId, action: "pull" })
		res.ok && deleteAnimation(e, "product")
	}

	return (
		{ deleteAll }
	)
}
