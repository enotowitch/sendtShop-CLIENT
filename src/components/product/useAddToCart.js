import usePullPush from "../../hooks/usePullPush"
import parseForm from "../../utils/parseForm"
import { useContext } from "react"
import { Context } from "../../Context"

export default function useAddToCart(fullPost) {

	const { pullPush } = usePullPush()
	const { dialogContentSet, dialogContentNameSet, dialogTitleSet, dialogShowSet } = useContext(Context)

	async function addToCart(e) {
		e.preventDefault()
		const { form } = parseForm(e)

		// TODO
		delete form.tags
		delete form.textEditorValue
		// TODO
		const res = await pullPush({ col: "user", field: "cart", item: form, action: "push", dups: true })

		// make dialog
		const totalPrice = fullPost.price * form.quantity
		dialogContentSet({ ...fullPost, ...form, totalPrice })
		dialogContentNameSet("addedToCart")
		dialogTitleSet("Product added to cart")
		dialogShowSet(true)
	}

	return (
		{ addToCart }
	)
}
