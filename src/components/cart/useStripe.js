import { useEffect, useState } from "react";
import { baseURL } from "../../consts";

export default function useStripe() {

	const [stripeLink, stripeLinkSet] = useState("")

	useEffect(() => {
		fetch(`${baseURL}/create-checkout-session`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					// TODO real items
					items: [
						{ id: 1, quantity: 3 },
						{ id: 2, quantity: 1 },
					],
				}),
			})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				stripeLinkSet(data.url);
			});
	}, [])

	return (
		{ stripeLink }
	)
}