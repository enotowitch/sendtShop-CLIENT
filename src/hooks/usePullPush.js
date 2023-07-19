import * as api from "../api"

export default function usePullPush() { // TODO: rename pullPush to pushTo & +pullFrom

	async function pullPush({ col, field, item, action, dups, pullMode }) {
		// HOW TO USE:
		// col=user/product/article...
		// colId= userId by default (comes from addUserId middleware) || productId/articleId/...
		// field=cart/like...
		// item: productId/articleId/{}/...
		// action: pull/push
		// dups: false by default (allow duplicate items be added to `field`)
		// dups: "TRUE example": duplicate product ids in user cart `field`
		// dups: "FALSE example": only one user id in article like `field`
		// pullMode: all/one; "all" by default (pull all or one item(s) from `field`)
		const res = await api.pullPush({ col, field, item, action, dups, pullMode })
		console.log(res)
	}

	return (
		{ pullPush }
	)
}
