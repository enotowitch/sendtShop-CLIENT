import * as api from "../api"

export default function useAddTo() { // TODO: rename addTo to pushTo & +pullFrom

	async function addTo(place, _id) { // place=cart/like/...
		const res = await api.addTo(place, _id)
		console.log(res)
	}

	return (
		{ addTo }
	)
}
