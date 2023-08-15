import React from "react"
import Rating from "../product/Rating"

export default function Review(props) {

	const { text, user, rating } = props.obj
	const firstEmailChar = user.email.charAt(0).toUpperCase()
	const email = user.email.match(/(.+)(?:@)/)[1]

	return (
		<div className="mt">
			<div className="f g aic">
				<div className="round fcc fw600">{firstEmailChar}</div>
				<div className="fw500">{email}</div>
				<Rating initialValue={rating} disabled={true} size={20} />
			</div>
			<div className="pl3">{text}</div>
		</div>
	)
}
