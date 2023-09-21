import React from "react"
import Input from "../form/Input"
import InputUncontrolled from "../form/InputUncontrolled"
import useContactUs from "./useContactUs"
import { Button } from "@mui/material"
import { useContext } from "react"
import { Context } from "../../Context"

export default function ContactUs() {

	const { contactUs } = useContactUs()
	const { user } = useContext(Context)

	return (
		<section className="wM m0a">
			<form className="clearForm" onSubmit={contactUs}>
				<div className="title tac mb">Contact Us</div>
				<div className="tac mb">
					Our team is looking forward to responding to your message.
					<br></br>
					You can expect to hear back from us soon.
				</div>

				<Input disabled type="email" name="email" placeholder="email" label="Email" editValue={user?.email} helperText="registration email used" />
				<InputUncontrolled name="orderId" placeholder="Order id" label="Order id" />
				<InputUncontrolled required name="subject" placeholder="subject" label="Subject" />
				<InputUncontrolled required multiline name="message" placeholder="message" label="Message" />
				<Button type="submit" variant="contained">Send message</Button>
			</form>
		</section>
	)
}