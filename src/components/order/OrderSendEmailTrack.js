import React from "react"
import Input from "../form/Input"
import { Button } from "@mui/material"
import useOrderSendEmailTrack from "./useOrderSendEmailTrack"
import CartSteps from "../cart/CartSteps"

export default function OrderSendEmailTrack() {
	// admin clicks to one order
	// sees products in order
	// clicks CONTINUE TO SHIPPING
	// sees user's shipping info(where to deliver) => make `DELIVERY`
	// clicks SEND EMAIL
	// (`DELIVERY` made): admin has `track number`
	// admin copies `track number`to input and SENDS EMAIL with `track number` to user

	const { sendEmail } = useOrderSendEmailTrack()
	const email = JSON.parse(localStorage.getItem("order")).email // user order email

	// TODO ??? all <Input/> className="w100" = via style
	return (
		<>
			<CartSteps step={3} />
			<section className="wM m0a">
				<form onSubmit={sendEmail}>
					<Input editValue={email} disabled name="email" label="user email" className="w100 mb" />
					<Input required name="track" type="url" label="track delivery link" helperText="url" className="w100" />
					<Button type="submit" variant="contained">SEND EMAIL</Button>
				</form>
			</section>
		</>
	)
}
