import { useContext } from "react"
import * as api from "../api"
import { Context } from "../Context"

export default function usePullPush() { // TODO ??? move to post folder

	const { updateContext } = useContext(Context)

	async function pullPush({ col, colId, field, item, action, dups, pullMode }) {
		// for updating already created fields in collection
		// HOW TO USE:
		// col=user/product/article...
		// colId= userId by default (comes from addUserId middleware) || productId/articleId/...
		// field=cart/like...
		// item: productId/articleId/{}/...
		// action: pull/push/clear/pullPush
		// dups: false by default (allow duplicate items be added to `field`)
		// dups: "TRUE example": duplicate product ids in user cart `field`
		// dups: "FALSE example": only one user id in article like `field`
		// pullMode: all/one; "all" by default (pull all or one item(s) from `field`)

		// examples:
		// pullPush({ col: "user", field: "cart", item: productId, action: "pull" })
		// pullPush({ col: "user", field: "cart", item: productId, action: "push", dups: true })
		// pullPush({ col: "user", field: "cart", item: productId, action: "pull", pullMode: "one" })
		// pullPush({ col: "user", field: "shipping", item: {...form}, action: "push" })
		// pullPush({ col: "user", field: "cart", action: "clear" })
		const res = await api.pullPush({ col, colId, field, item, action, dups, pullMode })
		updateContext() // TODO dicide whether to update Context in some situations
		return res
	}

	return (
		{ pullPush }
	)
}
