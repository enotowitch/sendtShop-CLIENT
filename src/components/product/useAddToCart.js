import usePullPush from "../../hooks/usePullPush"
import parseForm from "../../utils/parseForm"
import { CART_ROUTE } from "../../consts"

export default function useAddToCart() {

	const { pullPush } = usePullPush()

	function addToCart(e) {
		const { form } = parseForm(e)

		// TODO
		delete form.tags
		delete form.sizes
		delete form.colors
		delete form.textEditorValue
		// TODO

		pullPush({ col: "user", field: "cart", item: form, action: "push", dups: true })
		window.location.href = CART_ROUTE
	}

	return (
		{ addToCart }
	)
}
