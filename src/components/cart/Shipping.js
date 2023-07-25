import { Button } from "@mui/material"
import React from "react"
import useShipping from "./useShipping"
import Input from "../form/Input"
import useUserOrOrderShipping from "./useUserOrOrderShipping"
import CartSteps from "./CartSteps"

export default function Shipping() {

	const { addShipping } = useShipping()
	const { userOrOrder, varText, varLink, userEmail } = useUserOrOrderShipping()

	function onSubmit(e) { // !! don't refactor
		addShipping(e) // 1. add shipping form to user (DB); then user.shipping is copied to order.shipping
		window.location.href = varLink // 2. USER: go to: stripeLink || ORDER: go to: "/order/sent"
	}

	return (
		<>
			<CartSteps step={2} />
			<section>
				<form onSubmit={onSubmit} className="wM m0a">
					<div className="f fwn g2">
						<Input editValue={userOrOrder?.firstName} required name="firstName" label="firstName" helperText="text" />
						<Input editValue={userOrOrder?.lastName} required name="lastName" label="lastName" helperText="text" />
					</div>
					<Input editValue={userOrOrder?.city} required name="city" label="town/city" helperText="text" />
					<div className="f fwn g2">
						<Input editValue={userOrOrder?.address} required name="address" label="address" helperText="text" />
						<Input editValue={userOrOrder?.apartment} name="apartment" label="apartment" helperText="optional" />
					</div>
					<Input editValue={userOrOrder?.zipCode} required name="zipCode" type="number" label="ZIP Code" helperText="number" />
					<Input editValue={userOrOrder?.phone} required name="phone" type="number" label="phone" helperText="number" />
					<Input editValue={userOrOrder?.email || userEmail} required name="email" type="email" label="email" helperText="email" />
					<Button type="submit" variant="contained">{varText}</Button>
				</form>
			</section>
		</>
	)
}
