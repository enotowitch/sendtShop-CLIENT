import { useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import * as api from "../../api"
import usePullPush from "../../hooks/usePullPush"
import { USER_ORDER_NEW } from "../../consts"
import { Context } from "../../Context"

export default function VerifyOrderToken() {

	const { token } = useParams()
	const { pullPush } = usePullPush()
	const navigate = useNavigate()
	const { dialogSet } = useContext(Context)

	useEffect(() => {
		async function verifyOrderToken() {
			// if user is redirected to "/verifyOrderToken" page, he gets orderToken, 
			// then client makes app.post("/addOrder") from "/verifyOrderToken" page
			// then if token verified => create ORDER (collection item) with cart & shipping fields (same as user's fields)
			const res = await api.addOrder(token)
			if (res.ok) { // order added to DB => clear user's cart
				await pullPush({ col: "user", field: "cart", action: "clear" })
				localStorage.setItem("orderId", res.orderId) // set orderId for navigate
				navigate(USER_ORDER_NEW)
				dialogSet({
					dialogShow: true,
					dialogTitle: "Your order is in the queue for shipment",
					dialogContentName: "ordered"
				})
			}
		}

		verifyOrderToken()
	}, [token])

	return (
		""
	)
}
