import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import * as api from "../../api"
import { Context } from "../../Context"
import usePullPush from "../../hooks/usePullPush"

export default function VerifyOrderToken() {

	const { token } = useParams()
	const { user } = useContext(Context)
	const { pullPush } = usePullPush()

	useEffect(() => {
		async function verifyOrderToken() {
			// if user is redirected to "/verifyOrderToken" page, he gets orderToken, 
			// then client makes app.post("/addOrder") from "/verifyOrderToken" page
			// then if token verified => create order
			const res = await api.addOrder(token, user?.cart)
			if (res.ok) { // order added to DB => clear user's cart
				await pullPush({ col: "user", field: "cart", action: "clear" })
				window.location.href = "/"
			}
		}

		verifyOrderToken()
	}, [user])

	return (
		""
	)
}
