import { Button } from "@mui/material"
import React from "react"
import useShipping from "./useShipping"
import Input from "../form/Input"
import useUserOrOrderShipping from "./useUserOrOrderShipping"

export default function Shipping() {

	const { addShipping } = useShipping()
	const { userOrOrder, varText, varLink } = useUserOrOrderShipping()

	return (
		<section>
			<form onSubmit={(e) => addShipping(e)} className="wM m0a">
				<div className="f fwn g2">
					<Input editValue={userOrOrder?.firstName} required name="firstName" label="firstName" helperText="text" className="w100" />
					<Input editValue={userOrOrder?.lastName} required name="lastName" label="lastName" helperText="text" className="w100" />
				</div>
				<Input editValue={userOrOrder?.city} required name="city" label="town/city" helperText="text" className="w100" />
				<Button type="submit" variant="contained" href={varLink}>{varText}</Button>
				{/* TODO: cart button = useStripe; order button = go to send email */}
			</form>
		</section>
	)
}
