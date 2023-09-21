import { useState, useEffect } from "react"
import Spinner from "../other/Spinner"
import { CART_SHIPPING } from "../../consts"
import { useLocation } from "react-router-dom"
import { Button } from "@mui/material"

export default function StripeBtn({ isBtnDisabled, varText }) {

	const [isStripeLoading, isStripeLoadingSet] = useState(true)
	const location = useLocation().pathname

	useEffect(() => {
		// only make Spinner for CART_SHIPPING (where Stripe should load)
		location !== CART_SHIPPING && isStripeLoadingSet(false)
		setTimeout(() => {
			isStripeLoadingSet(false)
		}, 3000);
	}, [])

	return (
		<Spinner loading={isStripeLoading}>
			<Button type="submit" disabled={isBtnDisabled} variant="contained">{varText}</Button>
		</Spinner>
	)
}
