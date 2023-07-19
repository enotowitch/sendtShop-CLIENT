import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import * as api from "../../api"
import { Context } from "../../Context"

export default function VerifyOrderToken() {

	const { token } = useParams()
	const { user } = useContext(Context)

	useEffect(() => {
		async function verifyOrderToken() {
			// if user is redirected to "/verifyOrderToken" page, he gets orderToken, 
			// then client makes app.post("/addOrder") from "/verifyOrderToken" page
			// then if token verified => create order
			const res = await api.addOrder(token, user?.cart)
			res.ok && (window.location.href = "/") // TODO clear user's cart, as if res.ok => order added to DB
		}

		verifyOrderToken()
	}, [user])

	return (
		""
	)
}
