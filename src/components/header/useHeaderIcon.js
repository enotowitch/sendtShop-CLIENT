import { useContext, useEffect, useState } from "react"
import { Context } from "../../Context"

// field=cart/likes
export default function useHeaderIcon(field) {

	const { user } = useContext(Context)
	const [iconCount, iconCountSet] = useState(0)

	useEffect(() => { // eg:											user.cartProd || user.likesProd
		iconCountSet(user?.[field]?.length)
	}, [user, field])

	return (
		{ iconCount }
	)
}
