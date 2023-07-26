import { Button } from "@mui/material"
import React from "react"
import useShipping from "./useShipping"
import Input from "../form/Input"
import useUserOrOrderShipping from "./useUserOrOrderShipping"
import CartSteps from "./CartSteps"

export default function Shipping() {

	const { addShipping } = useShipping()
	const { userOrOrder, varText, varLink, userEmail, isInputDisabled, isBtnDisabled, varBtnHelpText } = useUserOrOrderShipping()

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
						<Input editValue={userOrOrder?.firstName} required name="firstName" label="firstName" helperText="text" isDisabled={isInputDisabled} />
						<Input editValue={userOrOrder?.lastName} required name="lastName" label="lastName" helperText="text" isDisabled={isInputDisabled} />
					</div>
					<Input editValue={userOrOrder?.city} required name="city" label="town/city" helperText="text" isDisabled={isInputDisabled} />
					<div className="f fwn g2">
						<Input editValue={userOrOrder?.address} required name="address" label="address" helperText="text" isDisabled={isInputDisabled} />
						<Input editValue={userOrOrder?.apartment} name="apartment" label="apartment" helperText="optional" isDisabled={isInputDisabled} />
					</div>
					<Input editValue={userOrOrder?.zipCode} required name="zipCode" type="number" label="ZIP Code" helperText="number" isDisabled={isInputDisabled} />
					<Input editValue={userOrOrder?.phone} required name="phone" type="number" label="phone" helperText="number" isDisabled={isInputDisabled} />
					<Input editValue={userOrOrder?.email || userEmail} required name="email" type="email" label="email" helperText="email" isDisabled={isInputDisabled} />
					<Button type="submit" disabled={isBtnDisabled} variant="contained">{varText}</Button>
					<div className="brand tac fsi">{varBtnHelpText}</div>
				</form>
			</section>
		</>
	)
}
