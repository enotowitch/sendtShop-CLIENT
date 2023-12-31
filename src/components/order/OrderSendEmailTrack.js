import React from "react"
import Input from "../form/Input"
import { Button } from "@mui/material"
import useOrderSendEmailTrack from "./useOrderSendEmailTrack"
import CartSteps from "../cart/CartSteps"
import usePostFull from "../../hooks/usePostFull"

export default function OrderSendEmailTrack() {
	// admin clicks to one order
	// sees products in order
	// clicks CONTINUE TO SHIPPING
	// sees user's shipping info(where to deliver) => makes `DELIVERY`
	// clicks SEND EMAIL
	// (`DELIVERY` made): admin has `track number`
	// admin copies `track number` to input and SENDS EMAIL with `track number` to user

	const { sendEmail, varBtnText, showBtn } = useOrderSendEmailTrack()

	// get order from orderId
	const orderId = localStorage.getItem("orderId")
	const { fullPost: order } = usePostFull("order", orderId)
	
	const { email, _id: _orderId, track } = order // user order email & id

	return (
		<>
			<CartSteps step={3} />
			<section className="wM m0a">
				<form onSubmit={sendEmail}>
					<Input editValue={_orderId} disabled name="_id" label="order id" className="mb" />
					<Input editValue={email} disabled name="email" label="user email" className="mb" />
					<Input editValue={track} required name="track" type="url" label="track delivery link" helperText="url" />
					{showBtn && <Button type="submit" variant="contained">{varBtnText}</Button>}
				</form>
			</section>
		</>
	)
}
