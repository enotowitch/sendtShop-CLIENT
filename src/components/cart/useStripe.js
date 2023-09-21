import { useEffect, useState, useContext } from "react";
import { baseURL } from "../../consts";
import { Context } from "../../Context";

export default function useStripe() {

	const [stripeLink, stripeLinkSet] = useState("")
	const { user } = useContext(Context)

	useEffect(() => {
		fetch(`${baseURL}/create-checkout-session`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ userId: user._id }),
			})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data)
				stripeLinkSet(data.url);
			});
	}, [])

	return (
		{ stripeLink }
	)
}