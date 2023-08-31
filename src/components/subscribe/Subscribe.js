import React, { useContext } from "react"
import Input from "../form/Input"
import useSubscribe from "./useSubscribe"
import { Button } from "@mui/material"
import { Context } from "../../Context"

export default function Subscribe() {

	const { subscribe } = useSubscribe()
	const { user } = useContext(Context)

	return (
		<section className="wM m0a">
			<form onSubmit={subscribe}>
				<div className="title tac mb">Subscribe Newsletter</div>
				<div className="tac mb">
					Subscribe to our newsletter to not miss any
					of our news
				</div>
				<Input disabled name="email" type="email" placeholder="email" label="email" editValue={user?.email} />
				<Button type="submit" variant="contained">Subscribe</Button>
			</form>
		</section>
	)
}