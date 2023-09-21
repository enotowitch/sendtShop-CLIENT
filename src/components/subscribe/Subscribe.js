import React, { useContext } from "react"
import Input from "../form/Input"
import useSubscribe from "./useSubscribe"
import { Button } from "@mui/material"
import { Context } from "../../Context"
import Spinner from "../other/Spinner"

export default function Subscribe() {

	const { user } = useContext(Context)
	const { subscribe, isSubscribed, loading } = useSubscribe(user?.email)

	return (
		<section className="wM m0a">
			<div className="title tac mb">Subscribe Newsletter</div>
			<div className="tac mb">
				Subscribe to our newsletter to not miss any
				of our news
			</div>
			<Input disabled name="email" type="email" placeholder="email" label="email" editValue={user?.email} helperText="registration email used" />
			<Spinner loading={loading}>
				{!isSubscribed && <Button onClick={subscribe} variant="contained">Subscribe</Button>}
			</Spinner>
		</section>
	)
}