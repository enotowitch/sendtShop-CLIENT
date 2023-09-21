import { useContext, useEffect, useState } from "react"
import { Context } from "../../Context"
import usePosts from "../../hooks/usePosts"

// field=cart/likes
export default function useHeaderIcon(field) {

	const { user, update, products } = useContext(Context)
	const [iconCount, iconCountSet] = useState(0)

	useEffect(() => { // eg: user.cartProd || user.likesProd
		iconCountSet(0) // null iconCount
		let id
		let quantity = 0
		user?.[field]?.map(fieldProd => {
			quantity += Number(fieldProd?.quantity)
			if (field === "cart") {
				id = fieldProd._id // obj.id
			}
			if (field === "likes") {
				id = fieldProd // just id
			}
			products?.map(allProd => {
				if (id === allProd._id) {
					if (allProd.status === "hidden" || allProd.status === "deleted") return // prevent adding "hidden/deleted" prods to iconCount
					field === "likes" && iconCountSet(prev => prev + 1) // count mathed ids
					field === "cart" && iconCountSet(quantity) // += quantity
				}
			})
		})
	}, [user, field, update])

	return (
		{ iconCount }
	)
}
