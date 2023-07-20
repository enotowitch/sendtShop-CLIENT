import usePullPush from "../../hooks/usePullPush"
import parseForm from "../../utils/parseForm"

export default function useShipping() {

	const { pullPush } = usePullPush()

	async function addShipping(e) {
		e.preventDefault()

		// user click PLACE ORDER
		// shipping form is added to user.shipping (DB)
		const { form } = parseForm(e)
		const res = await pullPush({ col: "user", field: "shipping", item: form, action: "push" })

		// go to stripe page
		// if stripe success => user is redirected to "/verifyOrderToken" page, he gets orderToken,
		// then client makes app.post("/addOrder") from "/verifyOrderToken" page
		// then if token verified => create ORDER (collection item) with cart & shipping fields (same as user's fields)
	}

	return (
		{ addShipping }
	)
}
